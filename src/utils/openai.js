import OpenAI from "openai";
export const openai = async (query) => {
  const client = new OpenAI({
    apiKey: "",
    apiVersion: "2023-05-15",
    dangerouslyAllowBrowser: true // Use with caution, not recommended for production
  });

  const response = await client.responses.create({
    model: "gpt-4o",
    input:
      `I am creating a hindi movie suggestion. Query on ` +
      query +
      " and provide 5 outputs",
  });

  console.log(response.output_text);
  return response.output_text;
};
