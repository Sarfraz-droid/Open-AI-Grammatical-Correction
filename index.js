
const OpenAI = require('openai-api');

var openai = null;
function APIkey(key)
{
    openai = new OpenAI(key);
}

async function GetError(text)
{

    text = text.split('\n').join(' ');
    const gptResponse = await openai.complete({
        engine:"davinci",
        prompt:`Original: ${text}\n  $ Standard American English:`,
        temperature:0,
        max_tokens:60,
        top_p:1.0,
        frequency_penalty:0.0,
        presence_penalty:0.0,
        stop:["\n"]
    });

    return gptResponse.data
}

async function GetResponse(text)
{
    text = text.split('\n').join(' ');
    const gptResponse = await openai.complete({
            engine:"davinci",
            prompt:`Human: ${text}\nAI:`,
            temperature:0.9,
            max_tokens:150,
            top_p:1,
            frequency_penalty:0.0,
            presence_penalty:0.6,
            stop:["\n", " Human:", " AI:"]
    });

    return gptResponse.data
}

module.exports = {
    APIkey : APIkey,
    GetError : GetError,
    GetResponse : GetResponse
}