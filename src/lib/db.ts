export const db = {
  async query(sql: string, params: any[] = []) {
    // Esta é uma implementação simulada para desenvolvimento local
    // Em produção, isso se conectará ao banco de dados D1 do Cloudflare
    console.log('Executando query:', sql, params);
    
    // Simulação de resposta do banco de dados
    if (sql.includes('SELECT * FROM categorias')) {
      return [
        {
          id: '1',
          nome: 'Sofás',
          descricao: 'Sofás confortáveis para sua sala',
          destaque: true,
          imagem: '/img/Camera_1745603212.82549.png'
        },
        {
          id: '2',
          nome: 'Mesas',
          descricao: 'Mesas para sala de jantar e escritório',
          destaque: true,
          imagem: '/img/Camera_1745603819.333027.png'
        },
        {
          id: '3',
          nome: 'Camas',
          descricao: 'Camas confortáveis para seu quarto',
          destaque: false,
          imagem: '/img/Camera_1745604327.707315.png'
        },
        {
          id: '4',
          nome: 'Armários',
          descricao: 'Armários para quarto e cozinha',
          destaque: false,
          imagem: '/img/Camera_1745605439.757379.png'
        }
      ];
    }
    
    if (sql.includes('SELECT * FROM produtos')) {
      return [
        {
          id: '1',
          nome: 'Sofá 3 Lugares',
          categoria: '1',
          preco: 'R$ 2.499,00',
          estoque: 5,
          descricao: 'Sofá confortável de 3 lugares com tecido suede',
          caracteristicas: '3 lugares\nTecido suede\nEstrutura de madeira\nPés de metal',
          destaque: true,
          imagens: ['/img/Camera_1745603212.82549.png', '/img/Camera_1745603622.712518.png']
        },
        {
          id: '2',
          nome: 'Mesa de Jantar',
          categoria: '2',
          preco: 'R$ 1.899,00',
          estoque: 3,
          descricao: 'Mesa de jantar para 6 pessoas com tampo de vidro',
          caracteristicas: 'Para 6 pessoas\nTampo de vidro\nEstrutura de madeira\nDimensões: 160x90cm',
          destaque: true,
          imagens: ['/img/Camera_1745603819.333027.png', '/img/Camera_1745603941.788338.png']
        },
        {
          id: '3',
          nome: 'Cama Box Casal',
          categoria: '3',
          preco: 'R$ 1.699,00',
          estoque: 2,
          descricao: 'Cama box casal com colchão ortopédico',
          caracteristicas: 'Casal (138x188cm)\nColchão ortopédico\nBase box\nAltura: 58cm',
          destaque: false,
          imagens: ['/img/Camera_1745604327.707315.png']
        },
        {
          id: '4',
          nome: 'Armário de Cozinha',
          categoria: '4',
          preco: 'R$ 2.299,00',
          estoque: 1,
          descricao: 'Armário de cozinha completo com 8 portas e 4 gavetas',
          caracteristicas: '8 portas\n4 gavetas\nAcabamento em MDF\nPuxadores em alumínio',
          destaque: false,
          imagens: ['/img/Camera_1745605439.757379.png']
        }
      ];
    }
    
    // Simulação de operações de inserção, atualização e exclusão
    if (sql.includes('INSERT INTO') || sql.includes('UPDATE') || sql.includes('DELETE')) {
      return { success: true, affectedRows: 1 };
    }
    
    return [];
  }
};
