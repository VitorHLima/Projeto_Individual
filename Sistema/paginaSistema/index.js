var botao1 = document.getElementById("input_classificacao1");//Aqui estou pegando os id dos botoes de classificação
var botao2 = document.getElementById("input_classificacao2");//Aqui estou pegando os id dos botoes de classificação
var botao3 = document.getElementById("input_classificacao3");//Aqui estou pegando os id dos botoes de classificação
var botao4 = document.getElementById("input_classificacao4");//Aqui estou pegando os id dos botoes de classificação
var botao5 = document.getElementById("input_classificacao5");//Aqui estou pegando os id dos botoes de classificação

var mulan = document.getElementById("button_mulan");//Aqui estou pegando os id dos botoes de classificação
var leao = document.getElementById("button_leao");//Aqui estou pegando os id dos botoes de classificação
var urso = document.getElementById("button_urso");//Aqui estou pegando os id dos botoes de classificação
var fera = document.getElementById("button_fera");//Aqui estou pegando os id dos botoes de classificação

var respostaCinderela = document.getElementById("resposta1")
var respostaPinoquio = document.getElementById("resposta2")
var respostaNeve = document.getElementById("resposta3")
var respostaLeao = document.getElementById("resposta4")
var respostaCertaQ2 = document.getElementById("resposta1Q2")
var respostaErradaQ2_20 = document.getElementById("resposta2Q2")
var respostaErradaQ2_18 = document.getElementById("resposta3Q2")
var respostaErradaQ2_21 = document.getElementById("resposta4Q2")
var respostaErradaQ3_Raquel = document.getElementById("resposta1Q3")
var respostaCerta_Bonnie = document.getElementById("resposta2Q3")
var respostaErradaQ3_Maria = document.getElementById("resposta3Q3")
var respostaErradaQ3_Cris = document.getElementById("resposta4Q3")
var questao1 = document.getElementById("questao1")
var questao2 = document.getElementById("questao2")
var questao3 = document.getElementById("questao3")
var MostrarTotalPontos = document.getElementById("mostrar_pontos")

var idUsuario = sessionStorage.ID_USUARIO;//Aqui é o id do usuario, onde a função nativa sessionStorage pega o ID

var contador = 0

function Resposta_Certa() {
    contador = contador + 1
    respostaLeao.style.backgroundColor = '#e63a3a'
    respostaLeao.style.color = 'white'

    respostaCinderela.style.backgroundColor = '#e63a3a'
    respostaCinderela.style.color = 'white'

    respostaPinoquio.style.backgroundColor = '#e63a3a'
    respostaPinoquio.style.color = 'white'

    respostaNeve.style.backgroundColor = 'green'
    respostaNeve.style.color = 'white'
    setTimeout(() => {
        questao1.style.display = 'none'
        questao2.style.display = 'flex'
    }, 2000)
}
function Resposta_ErradaLeao() {
    respostaLeao.style.backgroundColor = '#e63a3a'
    respostaLeao.style.color = 'white'
    setTimeout(() => {
        questao1.style.display = 'none'
        questao2.style.display = 'flex'
    }, 2000)
}
function Resposta_ErradaPinoquio() {
    respostaPinoquio.style.backgroundColor = '#e63a3a'
    respostaPinoquio.style.color = 'white'
    setTimeout(() => {
        questao1.style.display = 'none'
        questao2.style.display = 'flex'
    }, 2000)
}
function Resposta_ErradaCinderela() {
    respostaCinderela.style.backgroundColor = '#e63a3a'
    respostaCinderela.style.color = 'white'
    setTimeout(() => {
        questao1.style.display = 'none'
        questao2.style.display = 'flex'
    }, 2000)
}
function Resposta_CertaQ2() {
    contador = contador + 1
    respostaErradaQ2_21.style.backgroundColor = '#e63a3a'
    respostaErradaQ2_21.style.color = 'white'

    respostaErradaQ2_18.style.backgroundColor = '#e63a3a'
    respostaErradaQ2_18.style.color = 'white'

    respostaErradaQ2_20.style.backgroundColor = '#e63a3a'
    respostaErradaQ2_20.style.color = 'white'

    respostaCertaQ2.style.backgroundColor = 'green'
    respostaCertaQ2.style.color = 'white'
    setTimeout(() => {
        questao2.style.display = 'none'
        questao3.style.display = 'flex'
    }, 2000)
}
function Resposta_ErradaQ2_18() {
    respostaErradaQ2_18.style.backgroundColor = '#e63a3a'
    respostaErradaQ2_18.style.color = 'white'
    setTimeout(() => {
        questao2.style.display = 'none'
        questao3.style.display = 'flex'
    }, 2000)
}
function Resposta_ErradaQ2_20() {
    respostaErradaQ2_20.style.backgroundColor = '#e63a3a'
    respostaErradaQ2_20.style.color = 'white'
    setTimeout(() => {
        questao2.style.display = 'none'
        questao3.style.display = 'flex'
    }, 2000)
}
function Resposta_ErradaQ2_21() {
    respostaErradaQ2_21.style.backgroundColor = '#e63a3a'
    respostaErradaQ2_21.style.color = 'white'
    setTimeout(() => {
        questao2.style.display = 'none'
        questao3.style.display = 'flex'
    }, 2000)
}
function Resposta_CertaQ3() {
    contador = contador + 1
    respostaErradaQ3_Raquel.style.backgroundColor = '#e63a3a'
    respostaErradaQ3_Raquel.style.color = 'white'

    respostaErradaQ3_Maria.style.backgroundColor = '#e63a3a'
    respostaErradaQ3_Maria.style.color = 'white'

    respostaErradaQ3_Cris.style.backgroundColor = '#e63a3a'
    respostaErradaQ3_Cris.style.color = 'white'

    respostaCerta_Bonnie.style.backgroundColor = 'green'
    respostaCerta_Bonnie.style.color = 'white'

    fetch(`/quiz/publicar/${idUsuario}`, { //Aqui é a requisição feita para cadastrar a historia, de acordo com o id do usuario, para identifica-lo
        method: "POST", //Aqui é o tipo da requisição, se é POST OU GET, POST é para enviar dados
        headers: {
            "Content-Type": "application/json",// Aqui informa ao servidor como será enviado, será em JSON
        },
        body: JSON.stringify({
            contador: contador
        }), //Aqui é o tipo dos dados que vão mandar, transformou o objeto corpo lá em cima, por um JSON, que vai ser recebido com o body na pagina controller
    })
        .then(function (resposta) {// Aqui é ele vai tentar mandar os dados pegos lá em cima, com o parametro de resposta para pegar se é uma resposta postiviva ou negativa vindo do servidor
            console.log("resposta: ", resposta);//Aqui ele vai exibir a resposta do servidor

            if (resposta.ok) { //Se a resposta for ok, ele vai cadastrar a historia com sucesso
                alert(`${contador} Pontos cadastrados`)
                document.location.href = 'sistema.html'
            } else if (resposta.status == 404) {//Se a resposta for o erro 404, que pode ser que o servidor caiu ou não funcionou a requisição
                window.alert("Deu 404!");//Aqui ele está exibindo um alerta na pagina, deu 404!
            } else {//Senão for o erro 404
                throw ( //Aqui ele está lançando uma mensagem caso não seja o erro acima
                    "Houve um erro ao tentar realizar a postagem! Código da resposta: " +//Aqui é respota que vai ser lançada
                    resposta.status// Aqui é a resposta e os status daquela resposta
                );
            }
        })
        .catch(function (resposta) { // Aqui ele vai pegar o erro, e com o paramentro seria a informação daquele erro
            console.log(`#ERRO: ${resposta}`);//Está exibindo o erro
        });
}
function Resposta_ErradaRaquel() {
    respostaErradaQ3_Raquel.style.backgroundColor = '#e63a3a'
    respostaErradaQ3_Raquel.style.color = 'white'

    fetch(`/quiz/publicar/${idUsuario}`, { //Aqui é a requisição feita para cadastrar a historia, de acordo com o id do usuario, para identifica-lo
        method: "POST", //Aqui é o tipo da requisição, se é POST OU GET, POST é para enviar dados
        headers: {
            "Content-Type": "application/json",// Aqui informa ao servidor como será enviado, será em JSON
        },
        body: JSON.stringify({
            contador: contador
        }), //Aqui é o tipo dos dados que vão mandar, transformou o objeto corpo lá em cima, por um JSON, que vai ser recebido com o body na pagina controller
    })
        .then(function (resposta) {// Aqui é ele vai tentar mandar os dados pegos lá em cima, com o parametro de resposta para pegar se é uma resposta postiviva ou negativa vindo do servidor
            console.log("resposta: ", resposta);//Aqui ele vai exibir a resposta do servidor

            if (resposta.ok) { //Se a resposta for ok, ele vai cadastrar a historia com sucesso
                alert(`${contador} Pontos adquiridos`)
                document.location.href = 'sistema.html'
            } else if (resposta.status == 404) {//Se a resposta for o erro 404, que pode ser que o servidor caiu ou não funcionou a requisição
                window.alert("Deu 404!");//Aqui ele está exibindo um alerta na pagina, deu 404!
            } else {//Senão for o erro 404
                throw ( //Aqui ele está lançando uma mensagem caso não seja o erro acima
                    "Houve um erro ao tentar realizar a postagem! Código da resposta: " +//Aqui é respota que vai ser lançada
                    resposta.status// Aqui é a resposta e os status daquela resposta
                );
            }
        })
        .catch(function (resposta) { // Aqui ele vai pegar o erro, e com o paramentro seria a informação daquele erro
            console.log(`#ERRO: ${resposta}`);//Está exibindo o erro
        });
}
function Resposta_ErradaCris() {
    respostaErradaQ3_Cris.style.backgroundColor = '#e63a3a'
    respostaErradaQ3_Cris.style.color = 'white'

    fetch(`/quiz/publicar/${idUsuario}`, { //Aqui é a requisição feita para cadastrar a historia, de acordo com o id do usuario, para identifica-lo
        method: "POST", //Aqui é o tipo da requisição, se é POST OU GET, POST é para enviar dados
        headers: {
            "Content-Type": "application/json",// Aqui informa ao servidor como será enviado, será em JSON
        },
        body: JSON.stringify({
            contador: contador
        }), //Aqui é o tipo dos dados que vão mandar, transformou o objeto corpo lá em cima, por um JSON, que vai ser recebido com o body na pagina controller
    })
        .then(function (resposta) {// Aqui é ele vai tentar mandar os dados pegos lá em cima, com o parametro de resposta para pegar se é uma resposta postiviva ou negativa vindo do servidor
            console.log("resposta: ", resposta);//Aqui ele vai exibir a resposta do servidor

            if (resposta.ok) { //Se a resposta for ok, ele vai cadastrar a historia com sucesso
                alert(`${contador} Pontos adquiridos`)
                document.location.href = 'sistema.html'
            } else if (resposta.status == 404) {//Se a resposta for o erro 404, que pode ser que o servidor caiu ou não funcionou a requisição
                window.alert("Deu 404!");//Aqui ele está exibindo um alerta na pagina, deu 404!
            } else {//Senão for o erro 404
                throw ( //Aqui ele está lançando uma mensagem caso não seja o erro acima
                    "Houve um erro ao tentar realizar a postagem! Código da resposta: " +//Aqui é respota que vai ser lançada
                    resposta.status// Aqui é a resposta e os status daquela resposta
                );
            }
        })
        .catch(function (resposta) { // Aqui ele vai pegar o erro, e com o paramentro seria a informação daquele erro
            console.log(`#ERRO: ${resposta}`);//Está exibindo o erro
        });
}
function Resposta_ErradaMaria() {
    respostaErradaQ3_Maria.style.backgroundColor = '#e63a3a'
    respostaErradaQ3_Maria.style.color = 'white'

    fetch(`/quiz/publicar/${idUsuario}`, { //Aqui é a requisição feita para cadastrar a historia, de acordo com o id do usuario, para identifica-lo
        method: "POST", //Aqui é o tipo da requisição, se é POST OU GET, POST é para enviar dados
        headers: {
            "Content-Type": "application/json",// Aqui informa ao servidor como será enviado, será em JSON
        },
        body: JSON.stringify({
            contador: contador
        }), //Aqui é o tipo dos dados que vão mandar, transformou o objeto corpo lá em cima, por um JSON, que vai ser recebido com o body na pagina controller
    })
        .then(function (resposta) {// Aqui é ele vai tentar mandar os dados pegos lá em cima, com o parametro de resposta para pegar se é uma resposta postiviva ou negativa vindo do servidor
            console.log("resposta: ", resposta);//Aqui ele vai exibir a resposta do servidor

            if (resposta.ok) { //Se a resposta for ok, ele vai cadastrar a historia com sucesso
                alert(`${contador} Pontos adquiridos`)
                document.location.href = 'sistema.html'
            } else if (resposta.status == 404) {//Se a resposta for o erro 404, que pode ser que o servidor caiu ou não funcionou a requisição
                window.alert("Deu 404!");//Aqui ele está exibindo um alerta na pagina, deu 404!
            } else {//Senão for o erro 404
                throw ( //Aqui ele está lançando uma mensagem caso não seja o erro acima
                    "Houve um erro ao tentar realizar a postagem! Código da resposta: " +//Aqui é respota que vai ser lançada
                    resposta.status// Aqui é a resposta e os status daquela resposta
                );
            }
        })
        .catch(function (resposta) { // Aqui ele vai pegar o erro, e com o paramentro seria a informação daquele erro
            console.log(`#ERRO: ${resposta}`);//Está exibindo o erro
        });
}


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
