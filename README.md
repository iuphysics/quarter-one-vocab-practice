# Wordcraft — Quarter 1 Vocabulary

**[Open the practice app](https://iuphysics.github.io/quarter-one-vocab-practice/)**

A responsive, no-build study app based on the supplied Quarter 1 Summative review guide. Includes all 60 vocabulary terms, arranged into three groups of 20 in guide order, plus the six extra words used in question directions.

## Practice

- Two-word sentence completions, meanings in context, antonyms, word associations, and reading comprehension
- Ten-question mixed quizzes with instant explanations
- Flashcards with self-assessment, searchable word library, and missed-word review
- Progress saved locally in your browser; no account, analytics, or backend

Definitions are paraphrased and all practice sentences and passages are original. These are study exercises, not actual test questions. Antonym choices are contextual contrasts; some nouns do not have exact lexical antonyms. Reading mode draws from four original passages and therefore covers a subset of the terms. If a selected missed word appears in no passage, it uses a sentence-context meaning question. A single-word missed set uses another vocabulary word as the second word in paired questions. Pair scores apply to both words. Correct answers clear the missed flag; flashcard self-assessments also count toward progress and accuracy.

## Run locally

Requires Python 3 for serving; Node.js 22+ for tests.

```sh
python3 -m http.server 8000
# Open http://localhost:8000
```

```sh
npm test
```

No packages need to be installed. Optional Google Fonts fall back to system fonts if unavailable. Browser storage may be unavailable in restricted/private contexts; the app still works for the current session. Reset progress is available at the bottom of the page.

## Publish with GitHub Pages

In the repository's **Settings → Pages**, select **Deploy from a branch**, choose **main** and **/ (root)**, and save. The site works under a repository subpath.

## Files

- `data.js`: vocabulary, definitions, example sentences, and passages
- `engine.js`: shuffled question and quiz generation
- `app.js`: study interface and progress tracking
- `engine.test.js`: dataset and question-generation checks

The repository intentionally excludes the original pasted guide and its sample sentences.
