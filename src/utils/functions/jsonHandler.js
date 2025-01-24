import { readFileSync, readdirSync } from 'fs'
import { join, extname } from 'path'

/**
* @description função que coloca todos o JSONs de uma pasta dentro de um array, para conseguirmos manipular
* @param filePath caminho do arquivo com base na raiz
*/
export async function handleJSONfiles(filePath) {
  try {
    if (process.env.NODE_ENV === 'development') {
      let posts = []
      const jsonsInDir = readdirSync(filePath).filter(file => extname(file) === '.json')

      jsonsInDir.forEach(file => {
        const fileData = readFileSync(join(filePath, file))
        const json = JSON.parse(fileData.toString())
        posts.push({ ...json, fileName: file.split('.')[0] })
      })

      return posts
    } else {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
      const response = await fetch(`${baseUrl}/api/projetos`, {
        headers: { 'Content-Type': 'application/json' }
      })
      if (!response.ok) throw new Error('Failed to fetch')
      return response.json()
    }
  } catch (error) {
    console.error('Error in handleJSONfiles:', error)
    return []
  }
}

/**
* @description função que carrega um único JSON de um caminho
* @param filePath caminho do arquivo com base na raiz
*/
export function handleJSONfile(filePath) {
 const fullPath = join(process.cwd(), filePath)
 try {
   const fileContents = readFileSync(fullPath, 'utf8')
   return JSON.parse(fileContents)
 } catch (error) {
   console.error('Error reading file:', error)
   return null
 }
}