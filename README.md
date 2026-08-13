🌦️ Previsão do Tempo

Aplicação web que exibe a previsão do tempo em tempo real de qualquer cidade, com um fundo dinâmico que muda de acordo com as condições climáticas do local pesquisado.

🔗 Demo: izluthecreator.github.io/Previsao-do-tempo

📸 Preview

<img width="1685" height="836" alt="image" src="https://github.com/user-attachments/assets/96bf959b-7e8a-4f33-b225-a6f05ebadd0d" />

💡 Sobre o projeto

Esse projeto foi desenvolvido para praticar consumo de APIs REST em JavaScript puro (vanilla JS), incluindo tratamento de estados assíncronos (carregamento, sucesso e erro) e integração de duas APIs externas diferentes no mesmo fluxo da aplicação.

⚙️ Funcionalidades

🔍 Busca de clima por nome da cidade
🌡️ Exibição de temperatura, sensação térmica, umidade e velocidade do vento
⏳ Estado de carregamento durante a busca
⚠️ Tratamento de erro para cidades não encontradas
⌨️ Busca via botão ou tecla Enter
🖼️ Fundo dinâmico: a imagem de fundo muda de acordo com a condição climática retornada (ensolarado, nublado, chuva, tempestade, neve, neblina)
📱 Layout responsivo para dispositivos móveis

🛠️ Tecnologias utilizadas

HTML5 — estruturação da página
CSS3 — estilização, gradientes, efeitos de vidro fosco (glassmorphism) e responsividade
JavaScript (Vanilla JS) — lógica da aplicação, manipulação do DOM e requisições assíncronas
OpenWeatherMap API — dados de clima em tempo real
Unsplash API — imagens de fundo dinâmicas baseadas no clima

🧠 Conceitos praticados
Requisições assíncronas com fetch, async/await e try/catch/finally
Consumo e integração de múltiplas APIs REST no mesmo projeto
Manipulação dinâmica do DOM
Gerenciamento de estados visuais (loading, erro, sucesso) via classList
Mapeamento de dados da API através de objetos (tradução de códigos de clima para palavras-chave de imagem)
Template literals para montagem de URLs e textos dinâmicos
Responsividade com media queries
