import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: "YOUR-KEY",
  dangerouslyAllowBrowser: true,
});

export default openai;
