// Fifty original, hand-written questions: ten for each test format.
// The first choice in each source row is correct; the engine shuffles on use.
import {words} from './data.js';
const sections = {
 pairs: `Approbation,Meritorious|The council expressed ___ for the volunteers' ___ rescue efforts.|approbation / meritorious|umbrage / meritorious|approbation / hackneyed|hiatus / provincial|Approbation is praise, and meritorious actions deserve that praise.
Assuage,Elicit|To ___ the patient's fears, the nurse asked gentle questions designed to ___ details about the pain.|assuage / elicit|assuage / simulate|transcend / elicit|expostulate / intercede|The nurse wants to calm fears and draw out information.
Hackneyed,Jaded|Years of reading the same ___ plots had left the editor ___ and difficult to impress.|hackneyed / jaded|meritorious / petulant|provincial / unctuous|lurid / meritorious|Overused plots lack originality; repeated exposure can leave someone bored and jaded.
Innuendo,Umbrage|The article never accused the mayor directly, but its ___ caused him to take ___ at the implied insult.|innuendo / umbrage|approbation / hiatus|prerogative / approbation|coalition / decadence|Innuendo hints at an accusation; taking umbrage means feeling offended.
Ameliorate,Lassitude|A full night's sleep should ___ the exhaustion, allowing the athlete to overcome her ___.|ameliorate / lassitude|precipitate / aplomb|infringe / lassitude|ameliorate / epitome|Ameliorate means improve; lassitude is weariness or lack of energy.
Callow,Aplomb|Although the intern was ___ and inexperienced, she answered the hostile questions with surprising ___.|callow / aplomb|intrinsic / drivel|bombastic / lassitude|callow / lassitude|Callow describes inexperience; aplomb is confidence and composure.
Stringent,Infringe|The archive has ___ rules, and visitors who ___ on others' rights may be asked to leave.|stringent / infringe|occult / exhort|stringent / permeate|intrinsic / ingratiate|Stringent rules are strict; to infringe on rights is to violate them.
Circuitous,Expedite|Rather than take a ___ route through several villages, the courier chose the highway to ___ delivery.|circuitous / expedite|tenuous / expiate|adventitious / abominate|circuitous / commiserate|A circuitous route is indirect; expedite means speed up.
Inadvertent,Expiate|The broken window was the result of an ___ mistake, but the student still offered to ___ his wrongdoing by paying for repairs.|inadvertent / expiate|seditious / expedite|nominal / ascribe|noncommittal / peculate|Inadvertent means unintentional; expiate means make amends for wrongdoing.
Tenuous,Ascribe|Because the evidence was ___, the researchers refused to ___ the illness to any single cause.|tenuous / ascribe|vitriolic / wheedle|nominal / enjoin|seditious / commiserate|Tenuous evidence is weak; ascribe means attribute something to a cause.`,
 meaning: `Coalition|Three rival neighborhood groups formed a coalition to preserve the library. What is a coalition here?|an alliance working toward a common goal|a pause in negotiations|a public expression of resentment|a rule imposed by an official|The separate groups joined forces for one shared purpose.
Expostulate|Lena tried to expostulate with her brother before he quit school impulsively. What did she try to do?|reason earnestly with him against his decision|praise his decision without reservation|imitate his behavior|hide his decision from others|She is trying to dissuade him through reasoning.
Lurid|The documentary rejected lurid descriptions of the accident in favor of a restrained report. What does lurid mean?|sensational and shocking|ordinary and unemotional|vague and incomplete|strictly confidential|The contrast with a restrained report points to shocking, sensational descriptions.
Prerogative|As team captain, choosing the warm-up routine was Nia's prerogative. What was it?|a special right attached to her role|an error caused by inattention|a reward shared by all spectators|an obligation to obey another team's captain|A prerogative is a special right or privilege.
Provincial|Despite traveling widely, he retained a provincial outlook and dismissed unfamiliar customs. Which meaning fits?|narrow-minded|calm under pressure|financially generous|physically exhausted|Here provincial describes a limited outlook, not merely a geographic location.
Unctuous|The applicant's unctuous praise sounded calculated rather than sincere. How was the praise delivered?|with excessive, insincere flattery|with open hostility|with obvious confusion|with restrained honesty|Unctuous behavior tries too hard to seem agreeable or earnest.
Ex officio|The principal sits on the board ex officio; whoever becomes principal automatically receives that seat. What does ex officio mean?|by virtue of holding a particular office|through a separate popular election|as a temporary unpaid visitor|without the board's permission|The seat comes automatically with the office of principal.
Intrinsic|The historian valued the diary for its intrinsic interest, even though it had no resale value. What does intrinsic mean?|inherent in the thing itself|assigned solely by a buyer|acquired entirely by accident|concealed from every reader|The diary is interesting in its own nature, regardless of market value.
Precipitate|Closing the bridge without warning could precipitate a transportation crisis. What does precipitate mean here?|bring about suddenly|prevent entirely|study carefully|describe indirectly|In this sentence precipitate is a verb meaning cause to happen suddenly.
Adventitious|The extra funding was adventitious: it came from an unexpected gift rather than the project's regular budget. What does adventitious mean?|arising from an outside or chance circumstance|essential to the project's inherent nature|deliberately stolen from an account|guaranteed by the original plan|The gift is an outside, unexpected addition rather than an inherent part of the budget.`,
 antonyms: `Petulant|Which expression is most nearly opposite to petulant in “a petulant response to a tiny inconvenience”?|patient and good-tempered|sulky and irritable|immature and inexperienced|bitter and insulting|Petulant means easily irritated by small annoyances; patient good humor is the contrast.
Bombastic|Which word most nearly opposes bombastic in “a bombastic speech full of inflated phrases”?|plainspoken|pompous|pretentious|grandiose|Plainspoken language is direct and simple rather than inflated.
Inveigh|Which action most nearly opposes inveigh against a proposal?|praise it warmly|condemn it forcefully|protest it angrily|attack it verbally|To inveigh is to attack in words; praise is the opposite response.
Permeate|Which phrase most nearly opposes permeate in “water began to permeate the fabric”?|remain entirely outside|soak all the way through|spread throughout|seep into every layer|Permeate means spread or soak through, unlike remaining outside.
Abominate|Which word is most nearly opposite to abominate?|adore|detest|despise|loathe|Abominate means hate intensely; adore expresses strong love.
Acculturation|Which situation contrasts most directly with acculturation?|a culture remaining isolated from contact with other cultures|a community adopting customs after meeting newcomers|two groups blending their traditions through contact|immigrants adapting to local social patterns|Acculturation involves cultural change through contact; isolation prevents that contact.
Noncommittal|Which word most nearly opposes noncommittal in “a noncommittal answer about which plan she supported”?|decisive|evasive|ambiguous|indefinite|A decisive answer takes a clear position; a noncommittal one avoids doing so.
Seditious|Which description most nearly opposes seditious in “a seditious movement seeking to overthrow the government”?|loyal to the established government|intent on rebellion|determined to incite an uprising|organized to overthrow authority|Seditious activity encourages rebellion against established authority.
Vitriolic|Which word most nearly opposes vitriolic in “a vitriolic personal attack”?|kind|caustic|venomous|scathing|Vitriolic language is bitter and harsh; kind language is the contrast.
Sangfroid|Which word most nearly opposes sangfroid during an emergency?|panic|composure|poise|coolness|Sangfroid means remaining cool and composed under pressure.`,
 associations: `Decadence|Which word best describes a period of decline marked by wasteful luxury and excessive self-indulgence?|Decadence|Approbation|Hiatus|Coalition|Decadence can refer to decline and excessive self-indulgence.
Intercede|A teacher speaks to the principal on behalf of a student who cannot explain the situation. What does the teacher do?|Intercede|Simulate|Elicit|Transcend|To intercede is to intervene or plead on someone else's behalf.
Simulate|A machine reproduces earthquake vibrations so engineers can test a model building. Which verb describes what it does to an earthquake's motion?|Simulate|Assuage|Expostulate|Transcend|Simulate means imitate or reproduce the signs of something.
Epitome|An athlete accepts defeat graciously and is described as the perfect example of sportsmanship. Which noun fits?|Epitome|Interloper|Drivel|Millennium|An epitome is a perfect example of a quality or type.
Exhort|A speaker urgently calls on volunteers to keep working and not give up. Which verb describes this strong encouragement?|Exhort|Infringe|Peculate|Surmise|Exhort means urge strongly or advise earnestly.
Ingratiate|An employee flatters the supervisor to make himself liked and accepted. Which verb completes “He tries to ___ himself with the supervisor”?|Ingratiate|Inveigh|Permeate|Expiate|Ingratiate means gain favor by making oneself agreeable.
Interloper|Someone enters a private rehearsal without an invitation and refuses to leave. Which noun best describes this person?|Interloper|Coalition|Epitome|Prerogative|An interloper is someone who intrudes where they are not wanted or entitled to be.
Millennium|An exhibit traces exactly ten centuries of history. Which word names that span?|Millennium|Hiatus|Ferment|Lassitude|A millennium is a period of one thousand years, or ten centuries.
Occult|A novel centers on hidden magical forces and mysterious supernatural rituals. Which adjective best describes these elements?|Occult|Intrinsic|Nominal|Callow|Occult can describe the mysterious, magical, or supernatural.
Proclivity|A child repeatedly chooses to explore insects and plants without being prompted. Which word describes this natural tendency toward nature study?|Proclivity|Umbrage|Acculturation|Sangfroid|A proclivity is a natural or habitual inclination.`
};
export const extraQuestions = [];
function targetIds(names) {
 return names.split(',').map(name=>{
  const word=words.find(w=>w.word===name);
  if(!word) throw new Error(`Unknown vocabulary target: ${name}`);
  return word.id;
 });
}
for(const [mode,rows] of Object.entries(sections)) {
 for(const row of rows.split('\n')) {
  const [names,prompt,answer,b,c,d,explanation]=row.split('|');
  extraQuestions.push({key:`extra-${extraQuestions.length+1}`,mode,prompt,answer,choices:[answer,b,c,d],ids:targetIds(names),explanation});
 }
}
const readingSets = [
 {
 passage:'The robotics club paused its meetings during a two-week hiatus while the school repaired the lab. When meetings resumed, its prototype could transcend the limits of the old design: it crossed obstacles that had stopped every earlier model. Members did not know why the old motor had failed, so they could only surmise that overheating was responsible. Their advisor urged them to test that idea before stating it as a fact.',
 rows:`Hiatus|What does hiatus mean in the passage?|a temporary break in activity|a permanent ban on robotics|an alliance between clubs|a sudden mechanical failure|The meetings stopped for two weeks and then resumed, showing a temporary break.
Transcend|What does transcend suggest about the new prototype?|It could surpass the old design's limitations.|It merely imitated the old design's weaknesses.|It concealed the old design from view.|It made the old design more expensive.|Crossing previously impossible obstacles shows that it went beyond earlier limits.
Surmise|Why does the writer use surmise for the members' explanation?|They were guessing without conclusive evidence.|They had confirmed the cause through repeated tests.|They wanted to forbid use of the motor.|They were making amends for damaging it.|The cause was still unknown, and the advisor wanted them to test their idea.`
 },
 {
 passage:'When a storm destroyed the market stalls, neighbors came to commiserate with the vendors, sharing their distress. The mayor could enjoin contractors to follow safety rules, but she could not make the repairs happen instantly. The town charged vendors a nominal fee of one dollar to use temporary stalls. One vendor tried to wheedle a second stall from the organizer by praising her kindness and gently asking again.',
 rows:`Commiserate|Which action best illustrates commiserate as used here?|sharing the vendors' sorrow over their losses|blaming the vendors for the storm|refusing to discuss the damage|celebrating the vendors' misfortune|The neighbors shared the vendors' distress rather than criticizing them.
Enjoin|What does enjoin mean in the mayor's situation?|order authoritatively|guess without evidence|sympathize with|flatter insincerely|The mayor has the authority to direct contractors to follow rules.
Nominal|Which detail best establishes the meaning of nominal here?|The fee was only one dollar.|The storm damaged the stalls.|The contractors had safety rules.|The vendors needed temporary space.|Nominal describes an amount so small that it is not substantial.
Wheedle|How did the vendor try to wheedle an extra stall?|by coaxing the organizer with praise and gentle requests|by threatening to destroy the market|by secretly taking money from its accounts|by ordering the organizer to close the market|Wheedle means use coaxing or flattery to obtain something.`
 },
 {
 passage:'The student paper rejected an anonymous letter as drivel because its claims were obvious nonsense. Even so, rumors put the campus in a ferment, with excited arguments in every hallway. A later investigation found that a club treasurer had tried to peculate money: the funds had been entrusted to her for supplies, but she transferred them to her own account.',
 rows:`Drivel|Why does the editor call the letter drivel?|Its claims were foolish nonsense.|Its claims were difficult but well supported.|Its author had a special official privilege.|Its style was calm and precise.|The passage explicitly identifies the claims as obvious nonsense.
Ferment|Which meaning of ferment fits the campus reaction?|a state of agitation and excitement|a chemical process producing alcohol|a long period of inactivity|a feeling of physical weariness|The excited arguments show social unrest or agitation, not a chemical process.
Peculate|What makes the treasurer's action an example of peculate?|She stole money that had been entrusted to her care.|She accidentally lost money belonging to herself.|She paid an approved supplier from the club account.|She publicly criticized the club's spending.|Peculate specifically means steal property or money entrusted to one's management.`
 }
];
for(const set of readingSets)for(const row of set.rows.split('\n')) {
 const [names,prompt,answer,b,c,d,explanation]=row.split('|');
 extraQuestions.push({key:`extra-${extraQuestions.length+1}`,mode:'reading',passage:set.passage,prompt,answer,choices:[answer,b,c,d],ids:targetIds(names),explanation});
}
export function matchingExtras(pool) {
 const ids=new Set(pool.map(w=>w.id));
 return extraQuestions.filter(q=>q.ids.every(id=>ids.has(id)));
}
