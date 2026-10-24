
import "dotenv/config";
import { SarvamAIClient } from "sarvamai";

const apiKey = process.env.SARVAM_API_KEY;

if (!apiKey) {
  throw new Error("SARVAM_API_KEY is missing. Check your .env file.");
}

const client = new SarvamAIClient({
  apiSubscriptionKey: apiKey,
});

async function main() {
  try {
    const response = await client.chat.completions({
      model: "sarvam-105b",
      messages: [
        {
          role: "user",
          content: "Explain machine learning in two simple sentences.",
        },
      ],
    });

    const answer = response.choices?.[0]?.message?.content;

    if (!answer) {
      console.log("API responded, but no text was returned.");
      return;
    }

    console.log("Sarvam AI response:\n");
    console.log(answer);
  } catch (error) {
    console.error(
      "Sarvam API request failed. Check your key, model access, and API quota."
    );

    if (error.statusCode) {
      console.error("HTTP status:", error.statusCode);
    }
  }
}

main();
