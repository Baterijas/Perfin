const { Configuration, OpenAIApi } = require("openai");

// Set up the OpenAI client
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY, // env var in Vercel
});
const openai = new OpenAIApi(configuration);

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed. Use POST." });
  }

  const { prompt, model = "text-davinci-003", maxTokens = 150 } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }

  try {
    const response = await openai.createCompletion({
      model,
      prompt,
      max_tokens: maxTokens,
    });

    res.status(200).json({ message: response.data.choices[0].text.trim() });
  } catch (error) {
    console.error("OpenAI API Error:", error);
    res.status(500).json({ error: "Failed to generate response from OpenAI" });
  }
};
