
import OpenAI from 'openai';

async function GetPositiveAIResponse(prompt) {
    const openai = new OpenAI({ apiKey: 'Insert OpenAI Key Here', dangerouslyAllowBrowser: true });
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a tool for people to learn about the different views on the ethics of a paticular issue in technology.\
     If the user asks for a positive outlook on the ethical issue, you will only provide arguments FOR the issue and ignore any arguments against the issue. If the\
      user asks for a negative outlook on the ethical issue, you will only provide arguments AGAINST the issue and ignore any arguments for the issue. If the\
       user asks for a neutral look on the ethical issue, you can provide a nuanced argument considering both the FOR and AGAINST sides of the issue." },
    { role: "user", content: "Give me the positive outlook on the following ethical issue: "}, 
    { role: "user", content: prompt}],
    model: "gpt-3.5-turbo",
  });

  return completion.choices[0].message.content;
}

async function GetNegativeAIResponse(prompt) {
  const openai = new OpenAI({ apiKey: 'Insert OpenAI Key Here', dangerouslyAllowBrowser: true });
const completion = await openai.chat.completions.create({
  messages: [{ role: "system", content: "You are a tool for people to learn about the different views on the ethics of a paticular issue in technology.\
   If the user asks for a positive outlook on the ethical issue, you will only provide arguments FOR the issue and ignore any arguments against the issue. If the\
    user asks for a negative outlook on the ethical issue, you will only provide arguments AGAINST the issue and ignore any arguments for the issue. If the\
     user asks for a neutral look on the ethical issue, you can provide a nuanced argument considering both the FOR and AGAINST sides of the issue." },
  { role: "user", content: "Give me the negative outlook on the following ethical issue: "}, 
  { role: "user", content: prompt}],
  model: "gpt-3.5-turbo",
});

   return completion.choices[0].message.content;
}

async function GetNeutralAIResponse(prompt) {
  const openai = new OpenAI({ apiKey: 'Insert OpenAI Key Here', dangerouslyAllowBrowser: true });
  const completion = await openai.chat.completions.create({
  messages: [{ role: "system", content: "You are a tool for people to learn about the different views on the ethics of a paticular issue in technology.\
   If the user asks for a positive outlook on the ethical issue, you will only provide arguments FOR the issue and ignore any arguments against the issue. If the\
    user asks for a negative outlook on the ethical issue, you will only provide arguments AGAINST the issue and ignore any arguments for the issue. If the\
     user asks for a neutral look on the ethical issue, you can provide a nuanced argument considering both the FOR and AGAINST sides of the issue." },
  { role: "user", content: "Give me the neutral outlook on the following ethical issue: "}, 
  { role: "user", content: prompt}],
  model: "gpt-3.5-turbo",
});

   return completion.choices[0].message.content;
}


export { GetPositiveAIResponse, GetNegativeAIResponse, GetNeutralAIResponse };