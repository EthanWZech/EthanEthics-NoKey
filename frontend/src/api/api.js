// api.js

import axios from 'axios';

const apiKey = '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'; // Replace with your actual API key
const endpoint = 'https://api.openai.com/v1/engines/davinci/completions';

async function fetchChatGPTResponse(prompt) {
  try {
    const response = await axios.post(endpoint, {
      prompt: prompt,
      max_tokens: 150, // Adjust this as needed
    }, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      }
    });

    return response.data.choices[0].text;
  } catch (error) {
    console.error('Error calling ChatGPT API:', error);
    console.error('Response status:', error.response.status);
    console.error('Response data:', error.response.data);
    return 'An error occurred while fetching the response.';
  }
}

export { fetchChatGPTResponse };
