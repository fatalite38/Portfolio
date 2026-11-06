import type { Project, ProjectImage } from "../types/project";
import cocoCuestaCapture from "../../assets/projects/coco-cuesta-site.png";
import geloOverviewCapture from "../../assets/projects/gelo-gestao-visao-geral.png";
import geloAccessCapture from "../../assets/projects/gelo-gestao-acesso.png";

const geloOverview: ProjectImage = {
  type: "image",
  src: geloOverviewCapture,
  alt: "Visão geral da interface provisória do Gelo Gestão, com navegação de cadastros e estoque e e-mail da empresa ocultado.",
  width: 1161,
  height: 881,
  caption:
    "Visão geral · Interface provisória · Dados demonstrativos · E-mail ocultado",
};

const geloAccess: ProjectImage = {
  type: "image",
  src: geloAccessCapture,
  alt: "Tela de acesso da interface provisória do Gelo Gestão, com campos de e-mail e senha, botão Entrar e link de recuperação de senha.",
  width: 1179,
  height: 883,
  caption: "Tela de acesso · Interface provisória",
};

// Dados compartilhados pela lista e pelos painéis de projeto.
export const projects: readonly Project[] = [
  {
    id: "coco",
    category: "web",
    categoryLabel: "Desenvolvimento web",
    title: "Coco Cuesta",
    status: "Site institucional SPA · Repositório público",
    summary:
      "Uma aplicação de página única (SPA) para comunicar a nova identidade da marca, apresentar os produtos e facilitar o contato comercial.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "EmailJS"],
    media: {
      type: "image",
      src: cocoCuestaCapture,
      alt: "Página inicial da Coco Cuesta, com menu preto e embalagens de água de coco, maracujá e melancia sobre fundo azul.",
      width: 1904,
      height: 908,
      caption: "Captura real do site Coco Cuesta · Enviada pelo autor",
    },
    sections: [
      {
        title: "O contexto",
        text: "Comunicar a transição de Mais Sabor para Coco Cuesta, preservando a história do negócio e apresentando os produtos e as novas embalagens.",
      },
      {
        title: "Minha contribuição",
        text: "Desenvolvimento da interface institucional em React e TypeScript: apresentação da marca, catálogo de sabores, história e caminhos para contato. O repositório documenta a integração do formulário com EmailJS e o contato por WhatsApp.",
      },
      {
        title: "O que o repositório documenta",
        items: [
          "Navegação responsiva entre apresentação, sabores, experiência e história.",
          "Produtos com novas embalagens e embalagens em transição.",
          "Contato comercial pelo formulário e WhatsApp.",
        ],
      },
    ],
    note: "Captura real da página inicial fornecida pelo autor. A descrição técnica se baseia na documentação pública do projeto.",
    links: [
      {
        label: "Visitar site",
        href: "https://www.cococuesta.com.br/",
        primary: true,
      },
      {
        label: "Ver repositório",
        href: "https://github.com/fatalite38/GeloMaisSabor",
      },
    ],
  },
  {
    id: "gelo",
    category: "sistemas",
    categoryLabel: "Sistema de gestão",
    title: "Gelo Gestão",
    status: "Em desenvolvimento · Fase avançada · Nome provisório",
    summary:
      "Um sistema de gestão de cadastros e estoque em fase avançada de desenvolvimento. Nome e interface provisórios; sem acesso público.",
    technologies: ["React", "TypeScript", "Supabase", "Vite"],
    media: geloOverview,
    gallery: [geloOverview, geloAccess],
    sections: [
      {
        title: "O contexto",
        text: "A vivência com a operação do negócio familiar motiva um sistema para organizar informações e registrar o trabalho do dia a dia.",
      },
      {
        title: "Minha contribuição",
        text: "Projeto em desenvolvimento que aproxima as necessidades da operação da construção do sistema. A base técnica registrada é React e TypeScript no frontend, com Supabase para dados e autenticação.",
      },
      {
        title: "O que as capturas mostram",
        items: [
          "Tela de acesso com campos de e-mail e senha e opção de recuperação de senha.",
          "Visão geral com atalhos para itens e conversões, sabores, parceiros, locais e motivos de estoque.",
          "Navegação para saldo e histórico de estoque, entradas, saídas e empresa/acesso.",
        ],
      },
      {
        title: "Nome e interface provisórios",
        text: "Gelo Gestão é um nome provisório. As capturas registram a interface atual, também provisória; a interface definitiva ainda será construída.",
      },
      {
        title: "Estágio do projeto",
        text: "Considero o projeto em fase avançada de desenvolvimento. Ele não está concluído nem disponível publicamente. As capturas mostram telas e opções de navegação; não validam a implementação completa de cada módulo.",
      },
    ],
    note: "Capturas reais fornecidas pelo autor, com dados demonstrativos. O e-mail da empresa foi ocultado na cópia da visão geral usada neste portfólio. A conclusão de cada módulo ainda precisa ser confirmada em revisão funcional.",
    links: [],
  },
  {
    id: "bert",
    category: "ia",
    categoryLabel: "Inteligência artificial",
    title: "Análise de sentimentos com BERT",
    status: "Projeto acadêmico · Trabalho de conclusão de curso",
    summary:
      "Um estudo de classificação de críticas do IMDb como positivas ou negativas, usando um modelo BERT pré-treinado.",
    technologies: ["Python", "PyTorch", "Transformers", "Scikit-learn"],
    media: {
      type: "source",
      title: "analyzesentiment.py",
      code: "from transformers import BertTokenizer, BertForSequenceClassification\n\nbert_model = BertForSequenceClassification.from_pretrained('bert-base-uncased')",
      caption: "Trecho literal do código publicado · exportação do Colab",
    },
    sections: [
      {
        title: "A investigação",
        text: "Trabalho de conclusão de curso em Engenharia de Computação sobre o uso de BERT na classificação binária de críticas de filmes do IMDb.",
      },
      {
        title: "Minha contribuição",
        text: "Investigação acadêmica com preparação dos textos, tokenização, treinamento e avaliação. O material público inclui o código exportado do Colab e o relatório do TCC.",
      },
      {
        title: "O que está no código",
        items: [
          "Carregamento do IMDb pelo TensorFlow/Keras e preparação dos textos.",
          "BERT e tokenização com Transformers; treinamento com PyTorch.",
          "Cálculo de acurácia, precisão, recall e F1, matriz de confusão e curva ROC.",
        ],
      },
      {
        title: "Limites do estudo",
        text: "O escopo é um experimento acadêmico com críticas de filmes. Não há aplicação interativa ou API pública de inferência neste portfólio. Não são apresentados números de desempenho sem a devida validação.",
      },
    ],
    note: "O README do projeto menciona um notebook, mas o arquivo disponível na árvore pública é analyzesentiment.py, uma exportação do Colab. Os links abaixo apontam para os materiais existentes.",
    links: [
      {
        label: "Ver código do estudo",
        href: "https://github.com/fatalite38/AnalyzeSentimentBERT/blob/main/analyzesentiment.py",
        primary: true,
      },
      {
        label: "Ler relatório do TCC",
        href: "https://github.com/fatalite38/AnalyzeSentimentBERT/blob/main/Tcc.pdf",
      },
      {
        label: "Ver repositório",
        href: "https://github.com/fatalite38/AnalyzeSentimentBERT",
      },
    ],
  },
];
