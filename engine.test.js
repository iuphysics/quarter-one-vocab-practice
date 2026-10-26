import test from 'node:test';
import assert from 'node:assert/strict';
import {words,passages} from './data.js';
import {makeQuiz,question} from './engine.js';
test('complete vocabulary, balanced units, valid passages',()=>{assert.equal(words.length,60);assert.equal(new Set(words.map(w=>w.word)).size,60);for(let unit=1;unit<=3;unit++)assert.equal(words.filter(w=>w.unit===unit).length,20);for(const w of words){assert.ok(w.definition&&w.opposite&&w.sentence.includes('___'));}for(const p of passages)for(const id of p.ids)assert.ok(p.text.toLowerCase().includes(words[id].word.toLowerCase()));});
test('every word and mode produce exactly one correct choice',()=>{for(let round=0;round<30;round++)for(const w of words)for(const mode of ['pairs','meaning','antonyms','associations','reading']){const q=question(w,mode);assert.equal(q.choices.length,4);assert.equal(new Set(q.choices).size,4);assert.equal(q.choices.filter(c=>c===q.answer).length,1);assert.ok(q.ids.every(id=>words[id]));}});
test('single missed word remains answerable in every mode',()=>{for(const w of words)for(const mode of ['mixed','pairs','reading']){const qs=makeQuiz([w],mode);assert.equal(qs.length,1);assert.equal(new Set(qs[0].choices).size,4);assert.ok(qs[0].ids.includes(w.id));}});
test('quiz size is bounded and reading targets respect units',()=>{assert.equal(makeQuiz(words,'mixed').length,10);assert.deepEqual(makeQuiz([],'mixed'),[]);for(let unit=1;unit<=3;unit++){const pool=words.filter(w=>w.unit===unit);for(const q of makeQuiz(pool,'reading'))assert.ok(q.ids.every(id=>words[id].unit===unit));}});

import {extraQuestions,matchingExtras} from './extra-questions.js';
test('50 unique authored questions, ten per format, covering all 60 words',()=>{
 assert.equal(extraQuestions.length,50);
 assert.equal(new Set(extraQuestions.map(q=>q.key)).size,50);
 assert.equal(new Set(extraQuestions.map(q=>q.prompt)).size,50);
 assert.equal(new Set(extraQuestions.flatMap(q=>q.ids)).size,60);
 for(const mode of ['pairs','meaning','antonyms','associations','reading'])assert.equal(extraQuestions.filter(q=>q.mode===mode).length,10);
 for(const q of extraQuestions){
  assert.equal(q.choices.length,4);assert.equal(new Set(q.choices).size,4);
  assert.equal(q.choices.filter(c=>c===q.answer).length,1);
  assert.ok(q.choices.every(c=>typeof c==='string'&&c.length>0));
  assert.ok(q.explanation);assert.ok(q.ids.every(id=>words[id]));
  if(q.mode==='pairs')assert.equal(q.prompt.split('___').length,3);
  if(q.mode==='reading'){assert.ok(q.passage);for(const id of q.ids)assert.ok(q.passage.toLowerCase().includes(words[id].word.toLowerCase()));}
 }
});
test('extra sessions include every matching question once without mutating the bank',()=>{
 const original=JSON.stringify(extraQuestions);
 for(let round=0;round<20;round++){
  const quiz=makeQuiz(words,'extra');assert.equal(quiz.length,50);assert.equal(new Set(quiz.map(q=>q.key)).size,50);
  for(const q of quiz)assert.equal(q.choices.filter(c=>c===q.answer).length,1);
 }
 assert.equal(JSON.stringify(extraQuestions),original);
 for(let unit=1;unit<=3;unit++){
  const pool=words.filter(w=>w.unit===unit),quiz=makeQuiz(pool,'extra');
  assert.equal(quiz.length,matchingExtras(pool).length);assert.ok(quiz.length>0);
  assert.ok(quiz.every(q=>q.ids.every(id=>words[id].unit===unit)));
 }
 assert.deepEqual(makeQuiz([],'extra'),[]);
 const one=makeQuiz([words[42]],'extra');assert.equal(one.length,1);assert.deepEqual(one[0].ids,[42]);
 assert.deepEqual(makeQuiz([words[0]],'extra'),[]);
});
