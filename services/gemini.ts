import { GoogleGenAI, Type } from "@google/genai";
import { Episode } from "../types.ts";

export const fetchYouTubeEpisodes = async (): Promise<Episode[]> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const prompt = `
    Encontre os 8 vídeos mais recentes do canal do YouTube "@escadasparaosucessopodcast".
    Para cada vídeo, extraia:
    1. Título do vídeo LIMPO (Remova obrigatoriamente qualquer menção a número de episódio como #52, #ep, Ep., etc).
    2. URL do vídeo no YouTube.
    3. Uma descrição curta baseada no conteúdo (máximo 2 linhas, use ... se necessário).
    4. Nome do convidado (se mencionado no título ou descrição).
    
    Retorne as informações estritamente em formato JSON seguindo esta estrutura:
    [
      {
        "id": "string única",
        "title": "título limpo sem números de ep",
        "slug": "slug-do-titulo",
        "date": "",
        "duration": "",
        "guest": "nome ou 'Aldo Ramos'",
        "categories": ["Engenharia"],
        "shortDesc": "resumo em 2 linhas",
        "fullDesc": "descrição completa",
        "youtubeUrl": "URL embed",
        "coverImage": "URL da thumbnail (hqdefault.jpg)",
        "featured": true
      }
    ]
    Importante: No campo youtubeUrl, transforme a URL normal em URL de EMBED (ex: youtube.com/embed/ID). 
    No campo coverImage, use o padrão https://img.youtube.com/vi/ID/maxresdefault.jpg.
    Deixe os campos "date" e "duration" como strings vazias.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        tools: [{ googleSearch: {} }],
        responseMimeType: "application/json",
      },
    });

    let jsonStr = response.text || "[]";
    
    // Limpeza de possíveis blocos de markdown que a IA possa retornar
    if (jsonStr.includes("```json")) {
      jsonStr = jsonStr.split("```json")[1].split("```")[0].trim();
    } else if (jsonStr.includes("```")) {
      jsonStr = jsonStr.split("```")[1].split("```")[0].trim();
    }

    try {
      return JSON.parse(jsonStr);
    } catch (parseError) {
      console.error("Erro ao converter JSON da IA:", parseError, jsonStr);
      return [];
    }
  } catch (error) {
    console.error("Erro ao buscar episódios do YouTube:", error);
    return [];
  }
};