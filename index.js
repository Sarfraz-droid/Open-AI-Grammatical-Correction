
const OpenAI = require('openai-api');

var openai = null;
function APIkey(key)
{
    openai = new OpenAI(key);
}

async function GetError(text)
{
    const gptResponse = await openai.complete({
        engine:"davinci",
        prompt:`Original: ${text}\nStandard American English:`,
        temperature:0,
        max_tokens:60,
        top_p:1.0,
        frequency_penalty:0.0,
        presence_penalty:0.0,
        stop:["\n"]
    });

    return gptResponse.data
}

module.exports = {
    APIkey : APIkey,
    GetError : GetError
}