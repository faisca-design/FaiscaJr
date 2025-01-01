// src/app/api/projetos/[nome]/route.js
import { handleJSONfiles } from '@/utils/functions/jsonHandler';
import { NextResponse } from 'next/server';

function normalizeString(str) {
  return str.toLowerCase().replace(/\s+/g, '');
}

export async function GET(request, { params }) {
  try {
    const { nome } = params;
    const projects = await handleJSONfiles('./content/projetos');
    
    // Normaliza o nome da URL e compara com os nomes normalizados dos projetos
    const projeto = projects.find(p => 
      normalizeString(p.nome_projeto) === normalizeString(nome)
    );
    
    if (!projeto) {
      return new NextResponse(JSON.stringify({ error: 'Projeto não encontrado' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new NextResponse(JSON.stringify(projeto), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}