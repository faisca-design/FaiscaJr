import { readFileSync, readdirSync } from 'fs';
import { join, extname } from 'path';

/**
 * @description função que coloca todos o JSONs de uma pasta dentro de um array, para conseguirmos manipular
 * @param filePath caminho do arquivo com base na raiz
 */
export function handleJSONfiles(filePath) {
  try {
    // Removido o process.cwd() pois o caminho já está sendo passado completo
    console.log('Reading directory:', filePath);

    const jsonsInDir = readdirSync(filePath)
      .filter((file) => extname(file) === '.json');

    console.log('JSON files found:', jsonsInDir);

    const posts = jsonsInDir.map((file) => {
      const fileData = readFileSync(join(filePath, file), 'utf8');
      const json = JSON.parse(fileData);
      return {
        ...json,
        fileName: file.split('.')[0]
      };
    });

    return posts;
  } catch (error) {
    console.error('Error in handleJSONfiles:', error);
    throw error;
  }
}
  
/**
 * @description função que carrega um único JSON de um caminho
 * @param filePath caminho do arquivo com base na raiz
 */
export function handleJSONfile(filePath) {
  try {
    console.log('Reading file:', filePath);
    const fileContents = readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error('Error in handleJSONfile:', error);
    throw error;
  }
}