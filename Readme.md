## Overview
This package is a built on top of [openai-api](https://www.npmjs.com/package/openai-api) for getting grammatical corrections in any sentence.

If you find any issue you message me or open a PR.

## Installation
`npm i openai-grammaticalcorrection`

## Usage

```javascript

const openai = require('openai-grammaticalcorrection')

openai.APIkey(process.env.OPENAI_API_KEY);
(async () => {
    const data = await openai.GetError('She no went to the market.')

    console.log(data);
})();
```

Output should be as 
```javascript
{
  id: 'cmpl-4AnafCXtp8GCYELLzdY9tgZDyTxC5',
  object: 'text_completion',
  created: 1638479253,
  model: 'davinci:2020-05-03',
  choices: [
    {
      text: " She didn't go to the market.",
      index: 0,
      logprobs: null,
      finish_reason: 'stop'
    }
  ]
}


```

### Text Completion


```javascript
(async () => {
    const data = await openai.GetResponse('Who are you?');

    console.log(data);
})();
```

Output should be as
```
{
  id: 'cmpl-4IvLnvGTRNf3JG5Ohswj8wgjE1EOm',
  object: 'text_completion',
  created: 1640415707,
  model: 'davinci:2020-05-03',
  choices: [
    {
      text: ' I am your AI TSB.',
      index: 0,
      logprobs: null,
      finish_reason: 'stop'
    }
  ]
}
```