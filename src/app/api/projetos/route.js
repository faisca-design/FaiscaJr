import { NextResponse } from 'next/server'
import path from 'path'
import fs from 'fs'

export async function GET() {
  const projetosDir = path.join(process.cwd(), 'content/projetos')
  const files = fs.readdirSync(projetosDir).filter(file => file.endsWith('.json'))
  
  const projetos = files.map(file => {
    const filePath = path.join(projetosDir, file)
    const content = fs.readFileSync(filePath, 'utf8')
    return { ...JSON.parse(content), fileName: file.split('.')[0] }
  })

  return NextResponse.json(projetos)
}