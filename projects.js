'use strict';

// Single source for the list and detail panels. Add projects here, not in app.js.
// Media can be { type: 'image', src, alt, caption } when a real capture is supplied.
const portfolioProjects = [
  {
    id: 'coco', category: 'web', categoryLabel: 'Desenvolvimento web',
    title: 'Coco Cuesta', status: 'Site institucional · Repositório público',
    summary: 'Uma presença digital para comunicar a nova identidade da marca, apresentar os produtos e facilitar o contato comercial.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'EmailJS'],
    media: {
      type: 'placeholder', title: 'Captura real pendente',
      description: 'Uma captura fiel da versão publicada será adicionada aqui. Conheça o projeto pelos detalhes e pelos links.',
      caption: 'Site institucional da Coco Cuesta'
    },
    sections: [
      { title: 'O contexto', text: 'Comunicar a transição de Mais Sabor para Coco Cuesta, preservando a história do negócio e apresentando os produtos e as novas embalagens.' },
      { title: 'Minha contribuição', text: 'Desenvolvimento da interface institucional em React e TypeScript: apresentação da marca, catálogo de sabores, história e caminhos para contato. O repositório documenta a integração do formulário com EmailJS e o contato por WhatsApp.' },
      { title: 'O que o repositório documenta', items: ['Navegação responsiva entre apresentação, sabores, experiência e história.', 'Produtos com novas embalagens e embalagens em transição.', 'Contato comercial pelo formulário e WhatsApp.'] }
    ],
    note: 'A captura do site publicado ainda não está disponível neste portfólio. O conteúdo foi conferido na documentação pública do projeto; a aplicação externa não foi validada nesta sessão.',
    links: [
      { label: 'Visitar site', href: 'https://www.cococuesta.com.br/', primary: true },
      { label: 'Ver repositório', href: 'https://github.com/fatalite38/GeloMaisSabor' }
    ]
  },
  {
    id: 'gelo', category: 'sistemas', categoryLabel: 'Sistema de gestão',
    title: 'Gelo Gestão', status: 'Em desenvolvimento · Sem demonstração pública',
    summary: 'Um projeto para conectar regras da operação a produtos, estoque, movimentações e acesso por perfil.',
    technologies: ['React', 'TypeScript', 'Supabase', 'Vite'],
    media: {
      type: 'placeholder', title: 'Captura do sistema pendente',
      description: 'Este espaço aguarda uma captura real do Gelo Gestão com dados demonstrativos.',
      caption: 'Projeto em desenvolvimento'
    },
    sections: [
      { title: 'O contexto', text: 'A vivência com a operação do negócio familiar motiva um sistema para organizar informações e registrar o trabalho do dia a dia.' },
      { title: 'Minha contribuição', text: 'Projeto em desenvolvimento que aproxima as necessidades da operação da construção do sistema. A base técnica registrada é React e TypeScript no frontend, com Supabase para dados e autenticação.' },
      { title: 'Escopo em desenvolvimento', items: ['Produtos, sabores e unidades, com regras de conversão.', 'Entradas, saídas e acompanhamento de estoque.', 'Empresas, perfis, permissões e políticas de acesso (RLS).', 'Histórico de alterações para rastreabilidade.'] },
      { title: 'Estado de implementação', text: 'O material disponível não discrimina quais módulos estão concluídos e quais permanecem planejados. Os itens acima descrevem o escopo, sem afirmar entrega, disponibilidade pública ou uso em produção.' }
    ],
    note: 'Não há captura real nem demonstração pública disponível. O estado de cada funcionalidade será detalhado após confirmação e revisão do sistema com dados demonstrativos.',
    links: []
  },
  {
    id: 'bert', category: 'ia', categoryLabel: 'Inteligência artificial',
    title: 'Análise de sentimentos com BERT', status: 'Projeto acadêmico · Trabalho de conclusão de curso',
    summary: 'Um estudo de classificação de críticas do IMDb como positivas ou negativas, usando um modelo BERT pré-treinado.',
    technologies: ['Python', 'PyTorch', 'Transformers', 'Scikit-learn'],
    media: {
      type: 'source', title: 'analyzesentiment.py',
      code: "from transformers import BertTokenizer, BertForSequenceClassification\n\nbert_model = BertForSequenceClassification.from_pretrained('bert-base-uncased')",
      caption: 'Trecho literal do código publicado · exportação do Colab'
    },
    sections: [
      { title: 'A investigação', text: 'Trabalho de conclusão de curso em Engenharia de Computação sobre o uso de BERT na classificação binária de críticas de filmes do IMDb.' },
      { title: 'Minha contribuição', text: 'Investigação acadêmica com preparação dos textos, tokenização, treinamento e avaliação. O material público inclui o código exportado do Colab e o relatório do TCC.' },
      { title: 'O que está no código', items: ['Carregamento do IMDb pelo TensorFlow/Keras e preparação dos textos.', 'BERT e tokenização com Transformers; treinamento com PyTorch.', 'Cálculo de acurácia, precisão, recall e F1, matriz de confusão e curva ROC.'] },
      { title: 'Limites do estudo', text: 'O escopo é um experimento acadêmico com críticas de filmes. Não há aplicação interativa ou API pública de inferência neste portfólio. Não são apresentados números de desempenho sem a devida validação.' }
    ],
    note: 'O README do projeto menciona um notebook, mas o arquivo disponível na árvore pública é analyzesentiment.py, uma exportação do Colab. Os links abaixo apontam para os materiais existentes.',
    links: [
      { label: 'Ver código do estudo', href: 'https://github.com/fatalite38/AnalyzeSentimentBERT/blob/main/analyzesentiment.py', primary: true },
      { label: 'Ler relatório do TCC', href: 'https://github.com/fatalite38/AnalyzeSentimentBERT/blob/main/Tcc.pdf' },
      { label: 'Ver repositório', href: 'https://github.com/fatalite38/AnalyzeSentimentBERT' }
    ]
  }
];
