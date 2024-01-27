import { NextRequest } from "next/server";
import axios from "axios";

interface Result {
  success: string;
}

interface TextResult extends Result {
  message: string;
}

const endpoints = [
  "gpt",
  "openchat",
  "bard",
  "gemini",
  "llama",
  "codellama",
  "mixtral",
];

const ModelErrorResponse = new Response(
  JSON.stringify({ error: true, message: "invalid Model name" }),
  {
    status: 400,
    statusText: "invalid request",
  }
);

const PromptErrorResponse = new Response(
  JSON.stringify({ error: true, message: "invalid Prompt content" }),
  {
    status: 400,
    statusText: "invalid request",
  }
);

export async function GET(req: NextRequest) {

  const searchParams = req.nextUrl.searchParams;
  const query = searchParams.get("model");
  const query_prompt = searchParams.get("prompt");

  if (!query || !endpoints.includes(query)) return ModelErrorResponse;
  if (!query_prompt) return PromptErrorResponse;

  const Request = await axios.post<TextResult>(
    `https://ai.rnilaweera.ovh/api/v1/user/${query}`,
    {
      prompt: query_prompt,
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.api_key}`,
      },
    }
  );

  const data = Buffer.from(Request.data.message).toString("base64");

  const Res = new Response(JSON.stringify({ data, encode_type: "base64" }), {
    status: 200,
    statusText: 'done'
  });

  return Res;
}
