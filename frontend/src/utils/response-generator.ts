import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI('AIzaSyCBOrWbhDgeQwhrC27aFKBBHr4O60w-6_M')

const model = genAI.getGenerativeModel({model:"gemini-1.5-flash"})

export async function getResponse(query: string) {
    const prompt = query
  
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return text
  }
  
