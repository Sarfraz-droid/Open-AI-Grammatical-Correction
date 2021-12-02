## Overview
This package is a built on top of [openai-api](https://www.npmjs.com/package/openai-api) for getting grammatical corrections in any sentence.

If you find any issue you message me or open a PR.

## Installation
`npm i openai-grammaticalcorrection`

## Usage

```
require('dotenv').config()

const openai = require('openai-grammaticalcorrection')

openai.APIkey(process.env.OPENAI_API_KEY);
(async () => {
    const data = await openai.GetError('She no went to the market.')

    console.log(data);
})();
```

Output should be as 
```
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