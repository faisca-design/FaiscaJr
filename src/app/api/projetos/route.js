import { NextResponse } from 'next/server'
import path from 'path'
import fs from 'fs'
import { headers } from 'next/headers'

export async function GET() {
  const headersList = headers()
  
  try {
    const projetosDir = path.join(process.cwd(), 'content/projetos')
    const files = fs.readdirSync(projetosDir).filter(file => file.endsWith('.json'))
    
    const projetos = files.map(file => {
      const filePath = path.join(projetosDir, file)
      const content = fs.readFileSync(filePath, 'utf8')
      return { ...JSON.parse(content), fileName: file.split('.')[0] }
    })

    return new NextResponse(JSON.stringify(projetos), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}