/*
  Catálogo de uniformes do C7S — dados
  ------------------------------------------------------------
  Para mudar o catálogo, edite só este arquivo.

  SEGMENTOS: as abas do topo.
  PECAS: cada peça aparece uma vez aqui e pode estar em vários segmentos.
    id        nome do arquivo de imagem (img/<id>-frente.webp e img/<id>-costas.webp)
    nome      nome exibido para as famílias
    grupo     "cima" | "baixo" | "agasalho"
    tipo      "Regular" | "Educação Física" | "AEC" | "Integral"
    segmentos lista de ids de SEGMENTOS onde a peça pode ser usada
    costas    true se existe foto das costas
    inteira   true se a peça já cobre cima e baixo (ex.: vestido)
    obs       texto curto opcional exibido no card
*/
window.SEGMENTOS = [
  { id: "infantil", nome: "Educação Infantil", curto: "Infantil" },
  { id: "fund1", nome: "Ensino Fundamental I", curto: "Fund. I" },
  { id: "fund2", nome: "Ensino Fundamental II", curto: "Fund. II" },
  { id: "medio", nome: "Ensino Médio", curto: "Médio" }
];

var TODOS = ["infantil", "fund1", "fund2", "medio"];
var FUND_MEDIO = ["fund1", "fund2", "medio"];

window.PECAS = [
  // Educação Infantil: camiseta de gola normal e regata
  { id: "camiseta-ei", nome: "Camiseta amarela", grupo: "cima", tipo: "Regular", segmentos: ["infantil"], costas: true },
  { id: "regata-ei", nome: "Regata amarela", grupo: "cima", tipo: "Regular", segmentos: ["infantil"], costas: true },
  { id: "vestido", nome: "Vestido com short", grupo: "cima", tipo: "Regular", segmentos: ["infantil"], costas: false, inteira: true, obs: "Acompanha short por baixo" },

  // Fundamental I em diante: polo e camiseta
  { id: "polo-amarela", nome: "Camisa polo amarela", grupo: "cima", tipo: "Regular", segmentos: ["fund1"], costas: true },
  { id: "camiseta-amarela", nome: "Camiseta amarela", grupo: "cima", tipo: "Regular", segmentos: ["fund1"], costas: true },
  { id: "polo-azul", nome: "Camisa polo azul", grupo: "cima", tipo: "Regular", segmentos: ["fund2"], costas: true },
  { id: "camiseta-azul", nome: "Camiseta azul", grupo: "cima", tipo: "Regular", segmentos: ["fund2"], costas: true },
  { id: "polo-marinho", nome: "Camisa polo marinho", grupo: "cima", tipo: "Regular", segmentos: ["medio"], costas: true },
  { id: "camiseta-marinho", nome: "Camiseta marinho", grupo: "cima", tipo: "Regular", segmentos: ["medio"], costas: true },
  { id: "polo-preuni", nome: "Camisa polo Pré-Universitário", grupo: "cima", tipo: "Regular", segmentos: ["medio"], costas: true, obs: "Versão com a inscrição Pré-Universitário" },
  { id: "camiseta-preuni", nome: "Camiseta Pré-Universitário", grupo: "cima", tipo: "Regular", segmentos: ["medio"], costas: true, obs: "Versão com a inscrição Pré-Universitário" },

  // Atividades específicas (a frente é igual; muda a escrita das costas)
  { id: "camiseta-ef", nome: "Camiseta de Educação Física", grupo: "cima", tipo: "Educação Física", segmentos: ["fund2", "medio"], costas: true, obs: "Nas costas: EDUCAÇÃO FÍSICA" },
  { id: "camiseta-aec", nome: "Camiseta de AEC", grupo: "cima", tipo: "AEC", segmentos: ["fund1"], costas: true, obs: "Nas costas: AEC" },
  { id: "camiseta-integral", nome: "Camiseta do Tempo Integral", grupo: "cima", tipo: "Integral", segmentos: ["infantil", "fund1"], costas: true, obs: "Nas costas: SISTEMA DE TEMPO INTEGRAL" },

  // Partes de baixo
  { id: "calca-marinho", nome: "Calça brim marinho", grupo: "baixo", tipo: "Regular", segmentos: FUND_MEDIO, costas: true },
  { id: "calca-bege", nome: "Calça brim bege", grupo: "baixo", tipo: "Regular", segmentos: FUND_MEDIO, costas: true },
  { id: "bermuda-bege", nome: "Bermuda brim bege", grupo: "baixo", tipo: "Regular", segmentos: FUND_MEDIO, costas: false },
  { id: "short-saia-bege", nome: "Short-saia brim bege", grupo: "baixo", tipo: "Regular", segmentos: FUND_MEDIO, costas: false },
  { id: "short-saia-ef", nome: "Short-saia malha abrigo azul", grupo: "baixo", tipo: "Educação Física", segmentos: TODOS, costas: false },
  { id: "bermuda-ef", nome: "Bermuda malha abrigo", grupo: "baixo", tipo: "Educação Física", segmentos: TODOS, costas: false },
  { id: "calca-abrigo", nome: "Calça azul malha abrigo", grupo: "baixo", tipo: "Educação Física", segmentos: TODOS, costas: false },

  // Agasalhos
  { id: "agasalho", nome: "Agasalho", grupo: "agasalho", tipo: "Regular", segmentos: TODOS, costas: false },
  { id: "moletom-marinho", nome: "Moletom marinho", grupo: "agasalho", tipo: "Regular", segmentos: TODOS, costas: false },
  { id: "moletom-amarelo", nome: "Moletom amarelo", grupo: "agasalho", tipo: "Regular", segmentos: TODOS, costas: false },
  { id: "moletom-cinza", nome: "Moletom cinza", grupo: "agasalho", tipo: "Regular", segmentos: TODOS, costas: false }
];

/*
  INFO: conteúdo da aba "Informações" (a primeira que abre).
  Cada item vira um bloco. "linhas" aceita várias frases.
*/
window.INFO = [
  { titulo: "Período de transição", destaque: "Até o fim de 2028",
    linhas: ["As fardas no padrão 2026 continuam aceitas como uniforme até o final de 2028."] },
  { titulo: "Educação Física e AEC", destaque: "Vale o dia todo",
    linhas: ["No dia da aula, a camisa de Educação Física ou de AEC pode ser usada durante todo o dia, sem necessidade de troca.", "Com essa camisa, a parte de baixo deve ser de malha abrigo: calça, bermuda ou short-saia."] },
  { titulo: "Calçado", destaque: "Sempre tênis",
    linhas: ["O aluno deve usar sempre tênis. O modelo é livre."] }
];
window.FORNECEDORES = [
  { nome: "Crescer Uniformes", locais: ["Ponto de venda na unidade Aldeota", "Ponto de venda na unidade Centro", "Unidade Eusébio (agenda especial e dias específicos)"] },
  { nome: "Stamp Uniformes", locais: ["Sede Jacarecanga", "Sede Aldeota"] }
];
window.CIDADE = "Fortaleza-CE";
