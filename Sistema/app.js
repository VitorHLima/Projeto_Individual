process.env.AMBIENTE_PROCESSO = "desenvolvimento";//Aqui estou definindo o processo do banco de dados como "desenvolvimento"
// process.env.AMBIENTE_PROCESSO = "producao";

var express = require("express");//Aqui estou pegando as bibliotecas
var cors = require("cors");//Aqui estou pegando as bibliotecas
var path = require("path");//Aqui estou pegando as bibliotecas
var PORTA = process.env.AMBIENTE_PROCESSO == "desenvolvimento" ? 3333 : 8080; //Aqui está definindo a porta do servidor

var app = express();//Aqui estou criando uma variavel para utilizar a biblioteca e função do express

var indexRouter = require("./src/routes/index");//Criando variavel com todas as rotas
var usuarioRouter = require("./src/routes/usuarios");//Criando variavel com todas as rotas
var avisosRouter = require("./src/routes/avisos");//Criando variavel com todas as rotas
var medidasRouter = require("./src/routes/medidas");//Criando variavel com todas as rotas
var aquariosRouter = require("./src/routes/aquarios");//Criando variavel com todas as rotas
var empresasRouter = require("./src/routes/empresas");//Criando variavel com todas as rotas
var globalRouter = require("./src/routes/global");//Criando variavel com todas as rotas

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "Cadastro")));//Aqui estou pegando os diretorios estaticos em minha maquina
app.use(express.static(path.join(__dirname, "login")));//Aqui estou pegando os diretorios estaticos em minha maquina
app.use(express.static(path.join(__dirname, "inicial")));//Aqui estou pegando os diretorios estaticos em minha maquina
app.use(express.static(path.join(__dirname, "imagem")));//Aqui estou pegando os diretorios estaticos em minha maquina
app.use(express.static(path.join(__dirname, "paginaSistema")));//Aqui estou pegando os diretorios estaticos em minha maquina

app.use(cors());

app.use("/", indexRouter);//Aqui estou usando aquelas rotas e definindo as funções dela pela /
app.use("/usuarios", usuarioRouter);//Aqui estou usando aquelas rotas e definindo as funções dela pela /
app.use("/avisos", avisosRouter);//Aqui estou usando aquelas rotas e definindo as funções dela pela /
app.use("/medidas", medidasRouter);//Aqui estou usando aquelas rotas e definindo as funções dela pela /
app.use("/aquarios", aquariosRouter);//Aqui estou usando aquelas rotas e definindo as funções dela pela /
app.use("/empresas", empresasRouter);//Aqui estou usando aquelas rotas e definindo as funções dela pela /
app.use("/global", globalRouter);//Aqui estou usando aquelas rotas e definindo as funções dela pela /

app.listen(PORTA, function () {//Aqui estou fazendo uma função para abrir o servidor
    console.log(`Servidor ativo na porta: ${PORTA}`);//Aqui a mensagem do servidor
});
