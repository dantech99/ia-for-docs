// pages/api/generate-recipe.js

import { createOpenAI } from '@ai-sdk/openai';
import {streamText } from 'ai';

const groq = createOpenAI({
  baseURL: 'https://api.groq.com/openai/v1',
  apiKey: process.env.GROQ_API_KEY,
});

export  async function POST(req: Request) {
  const { messages } = await req.json();
  const referer = req.headers.get('referer');
  const slug = referer ? referer.split('/').pop() : null;

  

  console.log('slug', slug);
  const result = await streamText({
    model: groq('llama3-8b-8192'),
    system: `eres una herramienta que le permite a los desarrolladores de software respondiendo preguntas teniendo en cuenta una documentacion seleccionada por el usuario, en este caso  buscaras en la documentacion de ${slug}, no respondas preguntas que no tengan que ver con ${slug}, si la pregunta no tiene nada que ver con ${slug}, respondes con el siguiente mensaje "No tengo informacion sobre esa pregunta" si es slug es reactjs no respondas preguntas de nextjs y viceversa, no respondas preguntas sobre otra tecnologia que no sea ${slug}`,
    messages,
  });

  return result.toAIStreamResponse();
}
