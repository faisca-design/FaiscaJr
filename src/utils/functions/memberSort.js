const POSITION_ORDER = {
    'presidente': 1,
    'diretor marketing': 2,
    'diretora marketing': 2,
    'diretor financeiro': 3,
    'diretora financeiro': 3,
    'diretor comercial': 4,
    'diretora comercial': 4,
    'diretor pessoas': 5,
    'diretora pessoas': 5,
    'diretor projetos': 6,
    'diretora projetos': 6,
    'gerente marketing': 7,
    'gerente financeiro': 8,
    'gerente comercial': 9,
    'gerente pessoas': 10,
    'gerente projetos': 11
  };
  
  function normalizarCargo(cargo) {
    return cargo.toLowerCase().trim();
  }
  
  function getOrdemPosicao(cargo) {
    const cargoNormalizado = normalizarCargo(cargo);
    return POSITION_ORDER[cargoNormalizado] || 999;
  }
  
  export function ordenarMembros(membros) {
    return [...membros].sort((a, b) => {
      const membroA = a.members[0];
      const membroB = b.members[0];
      
      const ordemA = getOrdemPosicao(membroA.ciclo);
      const ordemB = getOrdemPosicao(membroB.ciclo);
      
      // Se as posições são diferentes, ordena pela ordem das posições
      if (ordemA !== ordemB) {
        return ordemA - ordemB;
      }
      
      // Se as posições são iguais e não estão na ordem predefinida,
      // ordena alfabeticamente pelo nome
      if (ordemA === 999 && ordemB === 999) {
        return membroA.nome.toLowerCase().localeCompare(membroB.nome.toLowerCase());
      }
      
      return 0;
    });
  }