-- Criação da tabela de produtos
CREATE TABLE IF NOT EXISTS produtos (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nome TEXT NOT NULL,
  categoria TEXT NOT NULL,
  preco TEXT NOT NULL,
  estoque INTEGER DEFAULT 0,
  descricao TEXT NOT NULL,
  caracteristicas TEXT,
  destaque INTEGER DEFAULT 0,
  imagens TEXT,
  data_criacao TEXT
);

-- Criação da tabela de categorias
CREATE TABLE IF NOT EXISTS categorias (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nome TEXT NOT NULL,
  descricao TEXT,
  destaque INTEGER DEFAULT 0,
  imagem TEXT,
  data_criacao TEXT
);

-- Criação da tabela de imagens
CREATE TABLE IF NOT EXISTS imagens (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nome TEXT NOT NULL,
  url TEXT NOT NULL,
  tamanho TEXT,
  data_criacao TEXT
);

-- Criação da tabela de configurações
CREATE TABLE IF NOT EXISTS configuracoes (
  id INTEGER PRIMARY KEY,
  nome_empresa TEXT NOT NULL,
  telefone TEXT,
  email TEXT,
  endereco TEXT,
  horario_funcionamento TEXT,
  facebook TEXT,
  instagram TEXT,
  whatsapp TEXT,
  logo TEXT
);

-- Inserção de dados iniciais para configurações
INSERT OR IGNORE INTO configuracoes (id, nome_empresa, telefone, email, endereco, horario_funcionamento)
VALUES (1, 'Barra Móveis', '(21) 9999-9999', 'contato@barramoveis.com.br', 'Av. das Américas, 1000 - Barra da Tijuca, Rio de Janeiro - RJ', 'Segunda a Sexta: 9h às 18h\nSábado: 9h às 14h\nDomingo: Fechado');

-- Inserção de dados iniciais para categorias
INSERT OR IGNORE INTO categorias (nome, descricao, destaque, imagem, data_criacao)
VALUES 
  ('Sala', 'Móveis para sala de estar e jantar, incluindo sofás, mesas, racks e estantes.', 1, '/img/categoria-sala.jpg', datetime('now')),
  ('Quarto', 'Móveis para quarto, incluindo camas, guarda-roupas, cômodas e criados-mudos.', 1, '/img/categoria-quarto.jpg', datetime('now')),
  ('Cozinha', 'Móveis para cozinha, incluindo armários, bancadas e mesas.', 0, '/img/categoria-cozinha.jpg', datetime('now')),
  ('Escritório', 'Móveis para escritório, incluindo escrivaninhas, cadeiras e estantes.', 0, '/img/categoria-escritorio.jpg', datetime('now'));

-- Inserção de dados iniciais para produtos
INSERT OR IGNORE INTO produtos (nome, categoria, preco, estoque, descricao, caracteristicas, destaque, imagens, data_criacao)
VALUES 
  ('Sofá retrátil e reclinável', 'sala', 'R$ 2.499,00', 5, 'Este sofá retrátil e reclinável combina conforto e estilo em um só móvel. Perfeito para sua sala de estar, ele oferece o máximo de conforto para momentos de descanso e lazer com a família. O mecanismo retrátil permite estender o assento, criando uma chaise longue confortável, enquanto o sistema reclinável ajusta o encosto para a posição ideal.', '190cm de largura\nPersintas elásticas italianas\nMaior durabilidade\nTecido suede macio e resistente\nEstrutura em madeira de reflorestamento\nEspuma D-28 de alta densidade', 1, '["img/sofa-retratil.jpg", "img/sofa-retratil-2.jpg", "img/sofa-retratil-3.jpg"]', datetime('now')),
  
  ('Mesa de jantar redonda', 'sala', 'R$ 1.899,00', 3, 'Mesa de jantar redonda com design elegante e contemporâneo, ideal para refeições em família. O tampo de vidro temperado proporciona sofisticação e facilidade na limpeza, enquanto a base em madeira maciça garante estabilidade e durabilidade.', '120cm de diâmetro\nTampo de vidro temperado\nBase em madeira maciça\nComporta até 6 pessoas\nFácil montagem\nDesign atemporal', 1, '["img/mesa-jantar.jpg", "img/mesa-jantar-2.jpg"]', datetime('now')),
  
  ('Rack para TV', 'sala', 'R$ 1.299,00', 8, 'Rack moderno e funcional para sua TV, com espaço para equipamentos eletrônicos e objetos decorativos. Possui gavetas e nichos que facilitam a organização do ambiente, além de acabamento de alta qualidade que valoriza sua sala de estar.', '180cm de largura\n45cm de altura\n40cm de profundidade\nMDF de alta qualidade\nGavetas com corrediças telescópicas\nPés em madeira maciça', 1, '["img/rack-tv.jpg", "img/rack-tv-2.jpg"]', datetime('now')),
  
  ('Cozinha 100% MDF', 'cozinha', 'R$ 4.999,00', 2, 'Cozinha completa em MDF de alta qualidade, com armários superiores e inferiores, gaveteiros e nichos. Design moderno e funcional que otimiza o espaço e facilita o dia a dia na cozinha.', 'MDF de 15mm\nDobradiças com amortecedor\nGavetas com corrediças telescópicas\nPuxadores em alumínio\nVárias opções de cores\nPossibilidade de personalização', 0, '["img/cozinha-mdf.jpg", "img/cozinha-mdf-2.jpg", "img/cozinha-mdf-3.jpg"]', datetime('now')),
  
  ('Cama Box Casal', 'quarto', 'R$ 1.799,00', 4, 'Cama box casal com colchão de molas ensacadas, que proporciona conforto e suporte adequado para o corpo. A base box possui estrutura reforçada e tecido antiácaro, garantindo durabilidade e higiene.', '138cm de largura\n188cm de comprimento\n58cm de altura\nColchão com molas ensacadas\nTecido antiácaro e antialérgico\nEspuma D-33', 0, '["img/cama-box.jpg", "img/cama-box-2.jpg"]', datetime('now')),
  
  ('Guarda-roupa 6 portas', 'quarto', 'R$ 2.899,00', 3, 'Guarda-roupa espaçoso com 6 portas e 6 gavetas, ideal para organizar suas roupas e acessórios. Interior bem dividido, com cabideiros, prateleiras e gaveteiros que facilitam a organização do seu vestuário.', '220cm de largura\n230cm de altura\n55cm de profundidade\nMDF de alta qualidade\nDobradiças metálicas\nPuxadores em alumínio\nEspelho na porta central', 0, '["img/guarda-roupa.jpg", "img/guarda-roupa-2.jpg", "img/guarda-roupa-3.jpg"]', datetime('now')),
  
  ('Escrivaninha com gavetas', 'escritorio', 'R$ 899,00', 6, 'Escrivaninha funcional com gavetas e nichos para organizar seus materiais de trabalho ou estudo. Design moderno e compacto, ideal para otimizar espaços menores sem abrir mão do conforto e praticidade.', '120cm de largura\n75cm de altura\n60cm de profundidade\nMDF de alta qualidade\nGavetas com corrediças metálicas\nNichos organizadores', 0, '["img/escrivaninha.jpg", "img/escrivaninha-2.jpg"]', datetime('now')),
  
  ('Cadeira de escritório', 'escritorio', 'R$ 599,00', 10, 'Cadeira de escritório ergonômica com regulagem de altura e encosto reclinável. O assento e encosto acolchoados proporcionam conforto durante longas horas de trabalho, enquanto o design moderno combina com qualquer ambiente.', 'Regulagem de altura\nEncosto reclinável\nBraços ajustáveis\nBase giratória\nRodízios de silicone\nSuporta até 120kg', 0, '["img/cadeira-escritorio.jpg", "img/cadeira-escritorio-2.jpg"]', datetime('now'));
