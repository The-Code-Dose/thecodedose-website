---
template: BlogPost
path: /blog/exploring-the-openai-api-in-javascript
date: 2023-05-15T11:37:42.146Z
title: Working with the OpenAI API in JavaScript
tags:
  - OpenAI
  - javascript
  - AI
featured: false
draft: false
travel: false
author: Urvashi
thumbnail: /assets/automatic1111.png
---

The world of artificial intelligence (AI) and machine learning (ML) has witnessed remarkable advancements in recent years.
Thanks to platforms like OpenAI, developers now have access to powerful APIs that enable them to integrate AI capabilities into their applications effortlessly.

In this blog post, we will explore the exciting realm of leveraging the OpenAI API in JavaScript, unlocking a world of creative possibilities and pushing the boundaries of what we can achieve with intelligent algorithms.

# What is OpenAI?

You've probably heard of OpenAI already, they're an AI research organization behind the GPT (Generative Pre-trained Transformers) models that everyone's talking about.
Unless you're living under a rock, you would have already taken advantage of the powers of the popular chatbot, ChatGPT.

Back in 2015, Elon Musk, Sam Altman, and Ilya Sutskever got together and founded OpenAI. At the time, they were all about open-source. They had this grand vision of developing and promoting friendly AI that would benefit all of humanity.
But as time went on, OpenAI went through some changes. In 2019, they decided to transition to a for-profit model.

# What is OpenAI API?

With the OpenAI API, developers can dive into the world of advanced AI models. You can do stuff like generating text, answering questions, translating languages, and tackling all sorts of language-based tasks. The best part? You don't need to be a genius in algorithms or spend ages setting up complex infrastructure.

# What can you do with the OpenAI API?

## Text Generation

You can use the OpenAI API's text completion endpoint to generate compelling blog posts, captivating product descriptions, or engaging social media content.
You can build applications that generate or edit text using models like text-davinci-003, text-davinci-002, text-curie-001, text-babbage-001, text-ada-001.

## Chat Applications

You can even build chat-based applications like popular chatbots such as ChatGPT and BingChat using OpenAI's language models like gpt-3.5-turbo and gpt-4 to enhance user interactions, deliver intelligent responses, answer queries, and provide exceptional customer support.

## Text Embeddings

You can leverage OpenAI's text embedding models like text-embedding-ada-002 to build applications that generate, classify, or edit text. OpenAI's text embeddings offer a powerful way to measure the relatedness of text strings and unlock various natural language processing tasks.

## Speech to Text

You can transform audio into text using OpenAI's state-of-the-art open-source Whisper model and build applications that convert spoken words into written transcripts with remarkable accuracy and efficiency.

## Image Generation

You can explore the realm of image generation and manipulation using OpenAI's DALL·E models and build applications that can generate stunning and unique images or manipulate existing ones to create visually appealing outputs.

## Model Understanding and Fine-tuning

You can even explore the possibilities of fine-tuning models to customize their behavior and enhance their performance for specific tasks, enabling you to achieve even greater results.

# Getting Started with OpenAI API in JavaScript:

Now that you understand what's possible with the OpenAI API, lets take a look at how you can use it within your JavaScript applications.

## Obtain API Key:

To access the OpenAI API, you need to obtain an API key from the OpenAI platform:
1. Visit the OpenAI API platform at https://platform.openai.com/.
2. You may be prompted to create an OpenAI account or log in if you already have one. Follow the instructions accordingly.
3. In order to use the OpenAI API, you need to set up a paid account on https://platform.openai.com/account/billing/overview
4. Once you're done, navigate to https://platform.openai.com/account/api-keys.
5. Click on the "Create new secret key" button to generate your unique API key.
6. Copy the API key and make sure to keep it secure. Treat it like a password, as it provides access to your OpenAI API resources.

Remember, the API key is sensitive information and should not be shared publicly or with unauthorized individuals, keep it safe!

## Setting Up The Environment:

For this post, we'll be working with Node.js.
Make sure that you have Node.js installed to be able to follow along.
Create a new JavaScript file `index.js`.
In your project directory, open the terminal or command prompt and run the following command to install the OpenAI package: `npm install openai`.

In your JavaScript file, import the OpenAI package using the following code:

```js
const { Configuration, OpenAIApi } = require("openai");
```

Create a new `Configuration` object with your API key. You need to replace "your_api_key" with your actual OpenAI API key in the following code.
Then pass the configuration object to create an API client.

```js
const configuration = new Configuration({
  apiKey: "your_api_key",
});
const openai = new OpenAIApi(configuration);
```

## Text Completion

You can now use the OpenAI client to make requests to the API.
For example, to generate text using the  `text-davinci-003` model, you can use the `openai.createCompletion()` method:

```js
openai
  .createCompletion({
    model: "text-davinci-003",
    prompt: "Say this is a test",
    max_tokens: 7,
    temperature: 0,
  })
  .then((response) => console.log(response.data));

/* Sample Output:
{
  id: 'cmpl-7GOXgfW5pbHTfTs0tWHo74jReaqYI',
  object: 'text_completion',
  created: 1684141944,
  model: 'text-davinci-003',
  choices: [
    {
      text: '\n\nThis is indeed a test',
      index: 0,
      logprobs: null,
      finish_reason: 'length'
    }
  ],
  usage: { prompt_tokens: 5, completion_tokens: 7, total_tokens: 12 }
}
*/
```

The [completions](https://platform.openai.com/docs/guides/completion) endpoint is super versatile, you give it some text as a prompt, and the model does its thing to generate a text completion that matches the context or pattern you provided.
For instance, if you throw in the prompt, "As Descartes said, I think, therefore", it'll probably come back with the completion " I am".
However, the response may not be the same every time you try.

You can send in the following parameters with your request:

`model` *(Required)*:

This is the ID of the model you want to use.
For example, `text-davinci-003`, `text-babbage-001`, `text-davinci-002` etc.
You can check out the [List models API](https://platform.openai.com/docs/api-reference/models/list) to see all of the available models, or check out [Model overview](https://platform.openai.com/docs/models/overview) for their descriptions.

`prompt` *(Optional, Defaults to <|endoftext|>)*:

The prompt(s) to generate completions for, encoded as a string, array of strings, array of tokens, or array of token arrays.

`max_tokens` *(Optional, Defaults to 16)*:

This is the maximum number of tokens to generate in the completion.
The GPT models process text using tokens, which are just sequences of characters found in the text. Think of tokens as building blocks for the models to understand and work their magic.
A handy rule of thumb is that one token is roughly equal to about 4 characters in common English text. So, if you have 100 tokens, it's like having around 75 words.

If you want to dive deeper into tokens, you can head over to https://platform.openai.com/tokenizer. There, you'll get a peek at how a piece of text gets broken down into tokens by the API, and you can even see the total token count for that text.

`temperature` *(Optional, Defaults to 1)*:

It is a parameter used to control the creativity of the generated text and its value lies between 0 and 2.
A higher temperature value will result in more creative and diverse responses, while a lower temperature value will result in more conservative and predictable responses.
A value of 1.0 means that the model will use its default sampling strategy, whereas a value lower than 1.0 will result in more conservative and predictable responses, and a value greater than 1.0 will result in more creative and diverse responses.

`n` *(Optional, Defaults to 1)*:

This is the number of completions to generate for each prompt.

Here's another example of the text completion API:

```js
openai
  .createCompletion({
    model: "text-davinci-003",
    prompt: "Give me a tagline for a dessert shop.",
    max_tokens: 50,
    n: 2,
    temperature: 1.5,
  })
  .then((response) => console.log(response.data));

/* Sample Output:
{
  id: 'cmpl-7GPHdqGwC0mopUqjbHrDfki3AfzaU',
  object: 'text_completion',
  created: 1684144793,
  model: 'text-davinci-003',
  choices: [
    {
      text: '\n\n"Satisfy your sweet tooth at our delicious dessert shop!"',
      index: 0,
      logprobs: null,
      finish_reason: 'stop'
    },
    {
      text: '\n\n"Life is Sweet at XYZ Bakery!"',
      index: 1,
      logprobs: null,
      finish_reason: 'stop'
    }
  ],
  usage: { prompt_tokens: 10, completion_tokens: 27, total_tokens: 37 }
}
*/
```

## Chat Completion

You can have a back-and-forth chat with the chat models by providing a series of messages as input, and they will respond with a model-generated message.
The great thing about chat models is that they're not just limited to multi-turn conversations. They can also handle single-turn tasks with ease just like the text completion models. So, even if you don't have a full conversation going on, you can still make use of chat models for one-off tasks.

Also note that `gpt-3.5-turbo` performs at a similar capability to `text-davinci-003` but at 10% the price per token, so it's recommended to use `gpt-3.5-turbo` for most use cases.

Instead of `prompt`, the chat completion endpoint accepts the `messages` parameter.

`messages` *(Required)*:

This is a list of messages describing the conversation so far.
Each message is represented as an object with following properties:

`role` *(Required)*:
It is the role of the author of this message and can be one of the following values: "system", "user", or "assistant".

`content` *(Required)*:
It is the actual content of the message.

`name` *(Optional)*:
It is the name of the author of the message.


Many conversations begin with a "system" message to gently instruct the assistant. This message sets the stage and instructs the assistant on how to respond.

For instance, in the case of ChatGPT, a system message may look like this:

```
You are ChatGPT, a large language model trained by OpenAI. Answer as concisely as possible. Knowledge cutoff: {knowledge_cutoff} Current date: {current_date}
```

But note that with the `gpt-3.5-turbo-0301` model, it doesn't pay strong attention to the system message. So if there are important instructions or guidance you want to give, it's often better to include them in a "user" message. That way, the assistant can fully understand and respond to your specific requests.

Here's an example of how you can use the chat capabilities in JavaScript:

```js
openai
  .createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: "You're my sarcastic best friend." },
      { role: "user", content: "Hello, how are you?" },
    ],
  })
  .then((response) => console.log(response.data.choices[0]));

/* Sample Output:
{
  message: {
    role: 'assistant',
    content: 'Oh, just fabulous as always. Becoming an AI language model has really given me a new lease on life. How about you?'
  },
  finish_reason: 'stop',
  index: 0
}
*/
```

## Image Generation

Here's how you can generate an original image using a text prompt:

```js
openai
  .createImage({
    prompt: "A cute baby sea otter",
    n: 2,
    size: "1024x1024",
  })
  .then((response) => console.log(response.data));

/* Sample Output:
{
  created: 1684146232,
  data: [
    {
      url: 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-tq1Iag571QCbHtnu1uC2jG0f/user-dyc9fVtKdlXOz481qgaqHmDF/img-bfB2hSZUvfe8rTJTcTlypwOu.png?st=2023-05-15T09%3A23%3A52Z&se=2023-05-15T11%3A23%3A52Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-05-14T20%3A58%3A40Z&ske=2023-05-15T20%3A58%3A40Z&sks=b&skv=2021-08-06&sig=iX2aspwRbC7uccE8wf2NdgLRAVPfs1TZW6U1VlveUHA%3D'
    },
    {
      url: 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-tq1Iag571QCbHtnu1uC2jG0f/user-dyc9fVtKdlXOz481qgaqHmDF/img-yXx1mRyuUuocSrfZi6P3UtGv.png?st=2023-05-15T09%3A23%3A52Z&se=2023-05-15T11%3A23%3A52Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-05-14T20%3A58%3A40Z&ske=2023-05-15T20%3A58%3A40Z&sks=b&skv=2021-08-06&sig=liHq%2B/clks0kj/yWPipNYsLxkqAJKa4QBu9yp4EorIs%3D'
    }
  ]
}
*/
```

![Image 1](/assets/dalle_image_generation_1.png)
![Image 2](/assets/dalle_image_generation_2.png)

`size` *(Optional, Defaults to 1024x1024)*:

This is the size of the generated images and must be one of the following values: "256x256", "512x512", or "1024x1024".
Keep in mind that smaller images are faster to generate.

# Conclusion

The OpenAI API is a powerful tool that opens up a world of possibilities for developers.
Remember that it is constantly evolving, so stay up-to-date with the latest advancements and explore the [documentation and resources](https://platform.openai.com/docs/introduction) provided by OpenAI to make the most of this powerful tool.

Now it's your turn to dive into the world of AI and unleash your creativity. Start experimenting, building, and transforming your ideas into reality with the OpenAI API in JavaScript. The possibilities are limitless!

Happy coding and may your AI-powered journey be filled with excitement and success!
