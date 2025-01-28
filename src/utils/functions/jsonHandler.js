import path from 'path';

/**
 * @description função que coleta todos os JSONs de uma pasta em um array
 * @param filePath caminho do arquivo com base na raiz
 */
export async function handleJSONfiles(filePath) {
  try {
    const fs = require('fs').promises; // Usando a versão com promises
    const fullPath = path.join(process.cwd(), filePath);
    
    const files = await fs.readdir(fullPath);
    const jsonsInDir = files.filter(file => path.extname(file) === '.json');
    
    const posts = await Promise.all(
      jsonsInDir.map(async (file) => {
        const fileData = await fs.readFile(path.join(fullPath, file), 'utf8');
        const json = JSON.parse(fileData);
        return {
          ...json,
          fileName: file.split('.')[0]
        };
      })
    );
    
    return posts;
  } catch (error) {
    console.error('Error reading files:', error);
    return [];
  }
}

/**
 * @description função que carrega um único JSON de um caminho
 * @param filePath caminho do arquivo com base na raiz
 */
export async function handleJSONfile(filePath) {
  try {
    const fs = require('fs').promises;
    const fullPath = path.join(process.cwd(), filePath);
    const fileContents = await fs.readFile(fullPath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error('Error reading file:', error);
    return null;
  }
}