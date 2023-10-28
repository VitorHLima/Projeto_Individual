CREATE DATABASE bd_Disney;

USE bd_Disney;

CREATE TABLE Usuario (
	idUsuario int primary key,
    nickname varchar(50),
    email varchar(50),
    senha varchar(50)
);
CREATE TABLE Historias (
	idHistorias int primary key,
    titulo varchar(100),
    descricao varchar(2000),
    classificação varchar(5),
    fkUsuario int, foreign key (fkUsuario) references Usuario(idUsuario)
);