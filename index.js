const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

openai
  .createImage({
    prompt: "A cute baby sea otter",
    n: 2,
    size: "1024x1024",
  })
  .then((response) => console.log(response.data));
