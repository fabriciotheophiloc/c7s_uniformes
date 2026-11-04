# c7s_uniformes

Catálogo dos novos uniformes do Colégio 7 de Setembro, publicado pelo GitHub Pages e incorporado no site da escola.

Endereço: https://fabriciotheophiloc.github.io/c7s_uniformes/

## Liberar ou bloquear o catálogo

Edite o arquivo `liberacao.json` (ícone de lápis) e salve com **Commit changes**:

- `"liberado": false` → quem abrir o link vê "Em breve"
- `"liberado": true` → catálogo aberto para todos

A mudança vale em 1 a 2 minutos.

## Pré-visualização (com o catálogo bloqueado)

Acrescente ao endereço: `?previa=previa-43518a`

Exemplo: https://fabriciotheophiloc.github.io/c7s_uniformes/?previa=previa-43518a

Com o código, o catálogo abre mesmo bloqueado e mostra o selo "Versão de validação". O selo some sozinho quando o catálogo é liberado.

## Alterar peças, nomes, segmentos e informações

Tudo fica em `data.js`. As instruções estão no topo do arquivo.
Imagens ficam em `img/` com o nome `<id-da-peça>-frente.webp` e `<id-da-peça>-costas.webp`.
