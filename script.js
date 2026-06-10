const inicio = document.getElementById("inicio");
const quiz = document.getElementById("quiz");
const resultado = document.getElementById("resultado");

const btnIniciar = document.getElementById("btnIniciar");

const imagemPergunta = document.getElementById("imagemPergunta");
const pergunta = document.getElementById("pergunta");

const alt0 = document.getElementById("alt0");
const alt1 = document.getElementById("alt1");
const alt2 = document.getElementById("alt2");
const alt3 = document.getElementById("alt3");

const mensagem = document.getElementById("mensagem");

let indice = 0;
let acertos = 0;
let erros = 0;

let historico = [];

const perguntas = [

{
imagem:"https://images.unsplash.com/photo-1500937386664-56d1dfef3854",
pergunta:"💧 Qual prática ajuda a economizar água na agricultura?",
alternativas:[
"Irrigação inteligente",
"Desperdício de água",
"Irrigação contínua sem controle",
"Não monitorar o consumo"
],
correta:0
},

{
imagem:"https://images.unsplash.com/photo-1464226184884-fa280b87c399",
pergunta:"🌱 O que ajuda a conservar o solo?",
alternativas:[
"Queimadas",
"Rotação de culturas",
"Desmatamento",
"Monocultura"
],
correta:1
},

{
imagem:"https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
pergunta:"🌳 O que protege rios e nascentes?",
alternativas:[
"Desmatar margens",
"Construir estradas",
"Preservar mata ciliar",
"Queimar vegetação"
],
correta:2
},

{
imagem:"https://images.unsplash.com/photo-1509391366360-2e959784a276",
pergunta:"☀️ Qual fonte de energia é sustentável?",
alternativas:[
"Carvão",
"Diesel",
"Energia solar",
"Óleo combustível"
],
correta:2
},

{
imagem:"https://images.unsplash.com/photo-1473448912268-2022ce9509d8",
pergunta:"🚁 Qual tecnologia auxilia a agricultura moderna?",
alternativas:[
"Drones",
"Desmatamento",
"Queimadas",
"Poluição"
],
correta:0
},

{
imagem:"https://images.unsplash.com/photo-1500382017468-9049fed747ef",
pergunta:"🌾 O que é agricultura sustentável?",
alternativas:[
"Produzir sem cuidar do ambiente",
"Produzir preservando recursos naturais",
"Desmatar para plantar",
"Usar recursos sem controle"
],
correta:1
},

{
imagem:"https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
pergunta:"💦 Recuperar nascentes ajuda a:",
alternativas:[
"Reduzir água",
"Aumentar erosão",
"Preservar recursos hídricos",
"Poluir rios"
],
correta:2
},

{
imagem:"https://images.unsplash.com/photo-1523741543316-beb7fc7023d8",
pergunta:"♻️ O destino correto dos resíduos é:",
alternativas:[
"Queimar",
"Jogar em rios",
"Reciclar e tratar",
"Enterrar sem controle"
],
correta:2
},

{
imagem:"https://images.unsplash.com/photo-1586771107445-d3ca888129ff",
pergunta:"📡 Agricultura de precisão utiliza:",
alternativas:[
"Tecnologia e dados",
"Apenas força manual",
"Desmatamento",
"Queimadas"
],
correta:0
},

{
imagem:"https://images.unsplash.com/photo-1473773508845-188df298d2d1",
pergunta:"🐝 As abelhas são importantes porque:",
alternativas:[
"Polinizam plantas",
"Poluem rios",
"Provocam erosão",
"Destroem lavouras"
],
correta:0
},

{
imagem:"https://images.unsplash.com/photo-1506744038136-46273834b3fb",
pergunta:"🌎 O desenvolvimento sustentável busca:",
alternativas:[
"Produção sem limites",
"Equilíbrio entre produção e ambiente",
"Apenas lucro",
"Exploração total dos recursos"
],
correta:1
},

{
imagem:"https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
pergunta:"🌿 Biodiversidade significa:",
alternativas:[
"Diversidade de seres vivos",
"Somente árvores",
"Somente animais",
"Áreas urbanas"
],
correta:0
},

{
imagem:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
pergunta:"🚜 Qual prática reduz impactos ambientais?",
alternativas:[
"Plantio direto",
"Queimada",
"Desmatamento",
"Erosão"
],
correta:0
},

{
imagem:"https://images.unsplash.com/photo-1511497584788-876760111969",
pergunta:"🌧️ A água da chuva pode ser:",
alternativas:[
"Desperdiçada",
"Captada e reutilizada",
"Poluída intencionalmente",
"Ignorada"
],
correta:1
},

{
imagem:"https://images.unsplash.com/photo-1502082553048-f009c37129b9",
pergunta:"🏆 O tema do Agrinho 2026 destaca:",
alternativas:[
"Produção sem cuidados",
"Equilíbrio entre produção e meio ambiente",
"Somente tecnologia",
"Somente lucro"
],
correta:1
}

];

btnIniciar.onclick = () => {

inicio.classList.remove("ativa");
quiz.classList.add("ativa");

carregarPergunta();

};

function carregarPergunta(){

const p = perguntas[indice];

imagemPergunta.src = p.imagem;

pergunta.innerHTML = p.pergunta;

alt0.innerHTML = "A) " + p.alternativas[0];
alt1.innerHTML = "B) " + p.alternativas[1];
alt2.innerHTML = "C) " + p.alternativas[2];
alt3.innerHTML = "D) " + p.alternativas[3];

document.getElementById("progressoTexto").innerHTML =
`Pergunta ${indice + 1} de ${perguntas.length}`;

document.getElementById("barraProgresso").style.width =
((indice / perguntas.length) * 100) + "%";

}

function responder(opcao){

const p = perguntas[indice];

if(opcao === p.correta){

acertos++;

mensagem.innerHTML = "✅ Resposta correta!";
mensagem.style.color = "#22c55e";

historico.push("✅ " + p.pergunta);

}else{

erros++;

mensagem.innerHTML = "❌ Resposta incorreta!";
mensagem.style.color = "#ef4444";

historico.push("❌ " + p.pergunta);

}

setTimeout(()=>{

mensagem.innerHTML = "";

indice++;

if(indice < perguntas.length){

carregarPergunta();

}else{

finalizar();

}

},1000);

}

alt0.onclick = ()=>responder(0);
alt1.onclick = ()=>responder(1);
alt2.onclick = ()=>responder(2);
alt3.onclick = ()=>responder(3);

function finalizar(){

quiz.classList.remove("ativa");
resultado.classList.add("ativa");

const porcentagem =
Math.round((acertos / perguntas.length) * 100);

let medalha = "";
let titulo = "";

if(porcentagem >= 90){

medalha = "🥇";
titulo = "Guardião Mestre do Agro Sustentável";

}
else if(porcentagem >= 70){

medalha = "🥈";
titulo = "Defensor da Sustentabilidade";

}
else if(porcentagem >= 50){

medalha = "🥉";
titulo = "Aprendiz Sustentável";

}
else{

medalha = "🎖️";
titulo = "Participante da Missão";

}

document.getElementById("tituloFinal").innerHTML = titulo;
document.getElementById("medalha").innerHTML = medalha;

document.getElementById("estatisticas").innerHTML = `
<h3>📊 Resultado Final</h3>
<p>✅ Acertos: ${acertos}</p>
<p>❌ Erros: ${erros}</p>
<p>📈 Aproveitamento: ${porcentagem}%</p>
`;

let lista = "<h3>📜 Histórico</h3>";

historico.forEach(item=>{
lista += `<p>${item}</p>`;
});

document.getElementById("historico").innerHTML = lista;

}
