import { readFileSync, readdirSync } from 'fs';
import { join, extname } from 'path';

/**
 * @description função que coloca todos o JSONs de uma pasta dentro de um array, para conseguirmos manipular
 * @param filePath caminho do arquivo com base na raiz
 */
export function handleJSONfiles(filePath) {
  try {
    const fullPath = join(process.cwd(), filePath);
    let posts = [];

    const jsonsInDir = readdirSync(fullPath)
      .filter((file) => extname(file) === ".json");

    jsonsInDir.forEach((file) => {
      const fullFilePath = join(fullPath, file);
      const fileData = readFileSync(fullFilePath, 'utf8');
      const json = JSON.parse(fileData);
      posts.push({
        ...json,
        fileName: file.split(".")[0]
      });
    });
    
    return posts;
  } catch (error) {
    console.error('Error in handleJSONfiles:', error);
    return [];
  }
}
  
/**
 * @description função que carrega um único JSON de um caminho
 * @param filePath caminho do arquivo com base na raiz
 */
export function handleJSONfile(filePath) {
  const fullPath = join(process.cwd(), filePath);
  try {
    const fileContents = readFileSync(fullPath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error('Error reading file:', error);
    return null;
  }
}