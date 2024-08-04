
import { streamText } from 'ai'
import {google} from '@ai-sdk/google'



export const maxDuration = 30;


export async function POST(req: Request) {
  const { messages } = await req.json();
  const url = new URL(req.url);
  const slug = url.pathname.split('/').pop();

  const result = await streamText({
    model: google('models/gemini-1.5-pro-latest'),
    system:  `eres una herramienta que le permite a los desarrolladores de software respondiendo preguntas teniendo en cuenta una documentacion seleccionada por el usuario, en este caso  buscaras en la documentacion de ${slug}, las respuestas a las preguntas que te hagan, si la pregunta no se encuentra en la documentacion, no podras responderla
    
    `,
    messages,
  });

  return result.toAIStreamResponse();
}