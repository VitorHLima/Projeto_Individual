var botao1 = document.getElementById("input_classificacao1");//Aqui estou pegando os id dos botoes de classificação
var botao2 = document.getElementById("input_classificacao2");//Aqui estou pegando os id dos botoes de classificação
var botao3 = document.getElementById("input_classificacao3");//Aqui estou pegando os id dos botoes de classificação
var botao4 = document.getElementById("input_classificacao4");//Aqui estou pegando os id dos botoes de classificação
var botao5 = document.getElementById("input_classificacao5");//Aqui estou pegando os id dos botoes de classificação

botao5.onmouseover = function () {//Essa função é pra quando o mouse estviver encima do botão
    botao1.style.backgroundImage = "url('estrela-amarelo.png')";//Aqui ele vai mudar as imagens dos botões para amarelo ou preto
    botao2.style.backgroundImage = "url('estrela-amarelo.png')";//Aqui ele vai mudar as imagens dos botões para amarelo ou preto
    botao3.style.backgroundImage = "url('estrela-amarelo.png')";//Aqui ele vai mudar as imagens dos botões para amarelo ou preto
    botao4.style.backgroundImage = "url('estrela-amarelo.png')";//Aqui ele vai mudar as imagens dos botões para amarelo ou preto
    botao5.style.backgroundImage = "url('estrela-amarelo.png')";//Aqui ele vai mudar as imagens dos botões para amarelo ou preto
};
botao5.onmouseout = function () {//Essa função é pra quando o mouse estiver fora do botão
    botao1.style.backgroundImage = "url('estrela-preto.png')";//Aqui ele vai mudar as imagens dos botões para amarelo ou preto
    botao2.style.backgroundImage = "url('estrela-preto.png')";//Aqui ele vai mudar as imagens dos botões para amarelo ou preto
    botao3.style.backgroundImage = "url('estrela-preto.png')";//Aqui ele vai mudar as imagens dos botões para amarelo ou preto
    botao4.style.backgroundImage = "url('estrela-preto.png')";//Aqui ele vai mudar as imagens dos botões para amarelo ou preto
    botao5.style.backgroundImage = "url('estrela-preto.png')";//Aqui ele vai mudar as imagens dos botões para amarelo ou preto
};
botao4.onmouseover = function () {//Essa função é pra quando o mouse estviver encima do botão
    botao1.style.backgroundImage = "url('estrela-amarelo.png')";//Aqui ele vai mudar as imagens dos botões para amarelo ou preto
    botao2.style.backgroundImage = "url('estrela-amarelo.png')";//Aqui ele vai mudar as imagens dos botões para amarelo ou preto
    botao3.style.backgroundImage = "url('estrela-amarelo.png')";//Aqui ele vai mudar as imagens dos botões para amarelo ou preto
    botao4.style.backgroundImage = "url('estrela-amarelo.png')";//Aqui ele vai mudar as imagens dos botões para amarelo ou preto
};
botao4.onmouseout = function () {//Essa função é pra quando o mouse estiver fora do botão
    botao1.style.backgroundImage = "url('estrela-preto.png')";//Aqui ele vai mudar as imagens dos botões para amarelo ou preto
    botao2.style.backgroundImage = "url('estrela-preto.png')";//Aqui ele vai mudar as imagens dos botões para amarelo ou preto
    botao3.style.backgroundImage = "url('estrela-preto.png')";//Aqui ele vai mudar as imagens dos botões para amarelo ou preto
    botao4.style.backgroundImage = "url('estrela-preto.png')";//Aqui ele vai mudar as imagens dos botões para amarelo ou preto
};

botao3.onmouseover = function () {//Essa função é pra quando o mouse estviver encima do botão
    botao1.style.backgroundImage = "url('estrela-amarelo.png')";//Aqui ele vai mudar as imagens dos botões para amarelo ou preto
    botao2.style.backgroundImage = "url('estrela-amarelo.png')";//Aqui ele vai mudar as imagens dos botões para amarelo ou preto
    botao3.style.backgroundImage = "url('estrela-amarelo.png')";//Aqui ele vai mudar as imagens dos botões para amarelo ou preto
};
botao3.onmouseout = function () {//Essa função é pra quando o mouse estiver fora do botão
    botao1.style.backgroundImage = "url('estrela-preto.png')";//Aqui ele vai mudar as imagens dos botões para amarelo ou preto
    botao2.style.backgroundImage = "url('estrela-preto.png')";//Aqui ele vai mudar as imagens dos botões para amarelo ou preto
    botao3.style.backgroundImage = "url('estrela-preto.png')";//Aqui ele vai mudar as imagens dos botões para amarelo ou preto
};
botao2.onmouseover = function () {//Essa função é pra quando o mouse estviver encima do botão
    botao1.style.backgroundImage = "url('estrela-amarelo.png')";//Aqui ele vai mudar as imagens dos botões para amarelo ou preto
    botao2.style.backgroundImage = "url('estrela-amarelo.png')";//Aqui ele vai mudar as imagens dos botões para amarelo ou preto
};
botao2.onmouseout = function () {//Essa função é pra quando o mouse estiver fora do botão
    botao1.style.backgroundImage = "url('estrela-preto.png')";//Aqui ele vai mudar as imagens dos botões para amarelo ou preto
    botao2.style.backgroundImage = "url('estrela-preto.png')";//Aqui ele vai mudar as imagens dos botões para amarelo ou preto
};
botao1.onmouseover = function () {//Essa função é pra quando o mouse estviver encima do botão
    botao1.style.backgroundImage = "url('estrela-amarelo.png')";//Aqui ele vai mudar as imagens dos botões para amarelo ou preto
};
botao1.onmouseout = function () {//Essa função é pra quando o mouse estiver fora do botão
    botao1.style.backgroundImage = "url('estrela-preto.png')";//Aqui ele vai mudar as imagens dos botões para amarelo ou preto
};
function botao1_ativado() {//Essa função é pra quando ele apertar no botão
    botao1.innerHTML = `
    <img src="estrela-amarelo.png">`;//Aqui colocar as imagens com o innerHTML
    botao2.innerHTML = `
    <img src="estrela-preto.png">`;//Aqui colocar as imagens com o innerHTML
    botao3.innerHTML = `
    <img src="estrela-preto.png">`;//Aqui colocar as imagens com o innerHTML
    botao4.innerHTML = `
    <img src="estrela-preto.png">`;//Aqui colocar as imagens com o innerHTML
    botao5.innerHTML = `
    <img src="estrela-preto.png">`;//Aqui colocar as imagens com o innerHTML
}
function botao2_ativado() {//Essa função é pra quando ele apertar no botão
    botao1.innerHTML = `
    <img src="estrela-amarelo.png">`;//Aqui colocar as imagens com o innerHTML
    botao2.innerHTML = `
    <img src="estrela-amarelo.png">`;//Aqui colocar as imagens com o innerHTML
    botao3.innerHTML = `
    <img src="estrela-preto.png">`;//Aqui colocar as imagens com o innerHTML
    botao4.innerHTML = `
    <img src="estrela-preto.png">`;//Aqui colocar as imagens com o innerHTML
    botao5.innerHTML = `
    <img src="estrela-preto.png">`;//Aqui colocar as imagens com o innerHTML
}
function botao3_ativado() {//Essa função é pra quando ele apertar no botão
    botao1.innerHTML = `
    <img src="estrela-amarelo.png">`;//Aqui colocar as imagens com o innerHTML
    botao2.innerHTML = `
    <img src="estrela-amarelo.png">`;//Aqui colocar as imagens com o innerHTML
    botao3.innerHTML = `
    <img src="estrela-amarelo.png">`;//Aqui colocar as imagens com o innerHTML
    botao4.innerHTML = `
    <img src="estrela-preto.png">`;//Aqui colocar as imagens com o innerHTML
    botao5.innerHTML = `
    <img src="estrela-preto.png">`;//Aqui colocar as imagens com o innerHTML
}
function botao4_ativado() {//Essa função é pra quando ele apertar no botão
    botao1.innerHTML = `
    <img src="estrela-amarelo.png">`;//Aqui colocar as imagens com o innerHTML
    botao2.innerHTML = `
    <img src="estrela-amarelo.png">`;//Aqui colocar as imagens com o innerHTML
    botao3.innerHTML = `
    <img src="estrela-amarelo.png">`;//Aqui colocar as imagens com o innerHTML
    botao4.innerHTML = `
    <img src="estrela-amarelo.png">`;//Aqui colocar as imagens com o innerHTML
    botao5.innerHTML = `
    <img src="estrela-preto.png">`;//Aqui colocar as imagens com o innerHTML
}
function botao5_ativado() {//Essa função é pra quando ele apertar no botão
    botao1.innerHTML = `
    <img src="estrela-amarelo.png">`;//Aqui colocar as imagens com o innerHTML
    botao2.innerHTML = `
    <img src="estrela-amarelo.png">`;//Aqui colocar as imagens com o innerHTML
    botao3.innerHTML = `
    <img src="estrela-amarelo.png">`;//Aqui colocar as imagens com o innerHTML
    botao4.innerHTML = `
    <img src="estrela-amarelo.png">`;//Aqui colocar as imagens com o innerHTML
    botao5.innerHTML = `
    <img src="estrela-amarelo.png">`;//Aqui colocar as imagens com o innerHTML
}