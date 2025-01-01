

export async function getProjeto(nome) {
    try {
      const response = await fetch(`/api/projetos/${nome}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erro ao buscar projeto:', error);
      return null;
    }
  }