import OpenAI from "openai";
import https from "https";

const agent = new https.Agent({ rejectUnauthorized: false });

const ai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    baseURL: process.env.OPENAI_BASE_URL,
});

export default ai
