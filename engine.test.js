import test from 'node:test';
import assert from 'node:assert/strict';
import {words,passages} from './data.js';
import {makeQuiz,question} from './engine.js';
test('complete vocabulary, balanced units, valid passages',()=>{assert.equal(words.length,60);assert.equal(new Set(words.map(w=>w.word)).size,60);for(let unit=1;unit<=3;unit++)assert.equal(words.filter(w=>w.unit===unit).length,20);for(const w of words){assert.ok(w.definition&&w.opposite&&w.sentence.includes('___'));}for(const p of passages)for(const id of p.ids)assert.ok(p.text.toLowerCase().includes(words[id].word.toLowerCase()));});
test('every word and mode produce exactly one correct choice',()=>{for(let round=0;round<30;round++)for(const w of words)for(const mode of ['pairs','meaning','antonyms','associations','reading']){const q=question(w,mode);assert.equal(q.choices.length,4);assert.equal(new Set(q.choices).size,4);assert.equal(q.choices.filter(c=>c===q.answer).length,1);assert.ok(q.ids.every(id=>words[id]));}});
test('single missed word remains answerable in every mode',()=>{for(const w of words)for(const mode of ['mixed','pairs','reading']){const qs=makeQuiz([w],mode);assert.equal(qs.length,1);assert.equal(new Set(qs[0].choices).size,4);assert.ok(qs[0].ids.includes(w.id));}});
test('quiz size is bounded and reading targets respect units',()=>{assert.equal(makeQuiz(words,'mixed').length,10);assert.deepEqual(makeQuiz([],'mixed'),[]);for(let unit=1;unit<=3;unit++){const pool=words.filter(w=>w.unit===unit);for(const q of makeQuiz(pool,'reading'))assert.ok(q.ids.every(id=>words[id].unit===unit));}});
