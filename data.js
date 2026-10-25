// Definitions are paraphrased from the supplied Quarter 1 guide; examples are original.
const rows = `Approbation|n.|approval or praise|disapproval|The judges expressed ___ after the excellent performance.
Assuage|v.|to ease, calm, or satisfy|aggravate|A sincere apology can ___ hurt feelings.
Coalition|n.|an alliance formed for a shared purpose|division|Several clubs formed a ___ to clean the park.
Decadence|n.|decline or excessive self-indulgence|restraint|The endless extravagant banquets suggested ___ rather than moderation.
Elicit|v.|to draw out a response or information|suppress|The interviewer hoped to ___ an honest answer.
Expostulate|v.|to reason earnestly against an action|acquiesce|I tried to ___ with him about his reckless plan.
Hackneyed|adj.|overused and lacking originality|original|The essay relied on ___ phrases everyone had heard before.
Hiatus|n.|a pause or break|continuation|The show returned after a three-month ___.
Innuendo|n.|an indirect suggestion, often insulting|direct statement|Instead of making an accusation, she used ___ to imply dishonesty.
Intercede|v.|to plead or intervene on another person's behalf|stand aside|The counselor agreed to ___ on behalf of the suspended student.
Jaded|adj.|worn out, bored, or dulled by experience|enthusiastic|After attending dozens of identical events, the ___ critic lost interest.
Lurid|adj.|shockingly vivid or sensational|restrained|The tabloid printed ___ accounts designed to horrify readers.
Meritorious|adj.|deserving praise or recognition|blameworthy|The volunteer received a medal for ___ service.
Petulant|adj.|irritable over minor frustrations|good-tempered|The ___ child complained because the cup was the wrong color.
Prerogative|n.|a special right or privilege|obligation|Choosing the meeting time was the chairperson's ___.
Provincial|adj.|narrow-minded; relating to an outlying region|cosmopolitan|His ___ outlook dismissed every unfamiliar custom.
Simulate|v.|to imitate or pretend|be authentic|The training device can ___ the motion of an airplane.
Transcend|v.|to rise above or surpass|fall short of|Her achievements would ___ everyone's expectations.
Umbrage|n.|offense or resentment; shade|pleasure|He took ___ at the insulting remark.
Unctuous|adj.|excessively flattering in an insincere way|sincere|The salesperson's ___ compliments sounded rehearsed and false.
Ameliorate|v.|to improve or make better|worsen|The repairs should ___ the unsafe conditions.
Aplomb|n.|confidence and composure|panic|She answered the unexpected question with ___.
Bombastic|adj.|pompous and inflated in language|plainspoken|His ___ speech used grand words but offered few ideas.
Callow|adj.|immature or inexperienced|seasoned|The ___ recruit still had much to learn.
Drivel|n./v.|nonsense; to speak foolishly or drool|sense|The claim that rocks can read is pure ___.
Epitome|n.|a perfect example; a summary|opposite|Her gracious response was the ___ of good manners.
Exhort|v.|to urge strongly|discourage|The coach will ___ the runners to keep trying.
Ex officio|adj./adv.|by virtue of holding an office|by separate appointment|The treasurer serves on the budget committee ___ because of that office.
Infringe|v.|to violate or overstep boundaries|respect|Copying the protected work could ___ on the author's rights.
Ingratiate|v.|to gain favor by making oneself agreeable|alienate|He tried to ___ himself with the director through flattery.
Interloper|n.|an unwanted intruder|invited guest|The stranger who entered the private meeting was an ___.
Intrinsic|adj.|belonging to something by its very nature|extrinsic|The gem has ___ beauty regardless of its price.
Inveigh|v.|to attack strongly in words|praise|Residents began to ___ against the unfair proposal.
Lassitude|n.|weariness or lack of energy|vigor|After the long hike, ___ made even standing difficult.
Millennium|n.|a thousand years; an age of great happiness|single moment|A period of ten centuries is a ___.
Occult|adj./n./v.|hidden or mysterious; the supernatural; to conceal|plainly visible|The manuscript described ___ rituals involving mysterious spirits.
Permeate|v.|to spread or soak throughout|remain outside|The smell of baking bread began to ___ the house.
Precipitate|v./adj./n.|to cause suddenly; hasty; a deposited substance|prevent|One careless remark could ___ a sudden argument.
Stringent|adj.|strict or severe|lenient|The lab enforces ___ safety rules without exceptions.
Surmise|v./n.|to guess without certain proof; a conjecture|know for certain|With no evidence yet, we can only ___ what happened.
Abominate|v.|to hate intensely|adore|People who ___ cruelty strongly oppose abuse.
Acculturation|n.|cultural adaptation or blending through contact|cultural isolation|Learning local customs while sharing their own was part of their ___.
Adventitious|adj.|arising by chance rather than inherently|inherent|The discovery was ___: they found it entirely by accident.
Ascribe|v.|to attribute to a cause or source|dissociate|We ___ the team's improvement to daily practice.
Circuitous|adj.|roundabout or indirect|direct|The ___ route wound through three towns before reaching home.
Commiserate|v.|to share sympathy or sorrow|gloat|Friends came to ___ with her after the disappointing result.
Enjoin|v.|to order authoritatively or prohibit|permit|The judge may ___ the company from dumping waste.
Expedite|v.|to speed up progress|delay|Extra workers will ___ the repairs.
Expiate|v.|to make amends for wrongdoing|leave unatoned|He hoped to ___ his wrongdoing by restoring what he had damaged.
Ferment|n./v.|unrest or agitation; to undergo a chemical change producing alcohol|calm|The city was in a state of ___ as protests spread.
Inadvertent|adj.|unintentional or caused by inattention|deliberate|The typo was an ___ error, not a deliberate change.
Nominal|adj.|in name only; very small|substantial|The museum charged a ___ fee of just one cent.
Noncommittal|adj.|avoiding a definite position|decisive|Her ___ reply revealed neither support nor opposition.
Peculate|v.|to steal property entrusted to one's care|safeguard entrusted funds|The dishonest manager planned to ___ money from the accounts he controlled.
Proclivity|n.|a natural or habitual tendency|aversion|His ___ for puzzles made him eager to solve the mystery.
Sangfroid|n.|coolness under pressure|agitation|The pilot showed ___ during the emergency.
Seditious|adj.|encouraging rebellion against established authority|loyal|The pamphlet urged an uprising and was called ___.
Tenuous|adj.|weak, thin, or poorly supported|well-supported|With almost no evidence, the argument remained ___.
Vitriolic|adj.|bitterly harsh or caustic|kind|The review's ___ insults hurt the performers.
Wheedle|v.|to obtain something through coaxing or flattery|demand bluntly|She tried to ___ an extra cookie from him with sweet compliments.`;
export const words = rows.split('\n').map((line, i) => { const [word, pos, definition, opposite, sentence] = line.split('|'); return {id:i, unit:Math.floor(i/20)+1, word,pos,definition,opposite,sentence}; });
export const helpers = {Feats:'achievements', Gallantry:'respectful and courageous behavior', Wanton:'deliberate or unprovoked (the guide emphasizes “on purpose”)', Censure:'express strong disapproval', Faction:'a smaller group within a larger party or organization', Vehemently:'passionately or forcefully'};
export const passages = [
 {text:'The student coalition proposed a garden. At first, the principal gave a noncommittal response, promising neither support nor opposition. Maya presented a careful budget with aplomb, even when challenged. Her evidence helped assuage the principal’s concerns. Soon the group received approbation for its meritorious work.', ids:[2,52,21,1,0,12]},
 {text:'After a hiatus, the theater reopened. A callow actor forgot a line, but the lead performer showed sangfroid and continued calmly. A jaded critic expected hackneyed dialogue. Instead, the original play managed to transcend those expectations. Its intrinsic quality mattered more than its modest scenery.',ids:[7,23,55,10,6,17,31]},
 {text:'The town was in a ferment over a proposed road. A circuitous route would protect the forest but delay construction. Some residents began to inveigh against the cost in vitriolic letters. Others formed a coalition to expedite a compromise. They hoped to ameliorate traffic without damaging the woods.',ids:[49,44,32,58,2,47,20]},
 {text:'An inadvertent accounting error led to a stringent review. At first, investigators could only surmise what had happened; their evidence was tenuous. They refused to ascribe guilt without proof. Eventually they found that a manager had tried to peculate funds. The manager offered to expiate the wrongdoing by repaying the money.',ids:[50,38,39,57,43,53,48]}
];
