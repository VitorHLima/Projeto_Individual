CREATE DATABASE bd_Disney;

USE bd_Disney;

DROP DATABASE bd_Disney;

CREATE TABLE Usuario (
	idUsuario int primary key auto_increment,
    nickname varchar(50),
    email varchar(50) UNIQUE,
    senha varchar(50)
);

select * from Usuario;
select * from Historias;

truncate Historias;

CREATE TABLE Historias (
	idHistorias int auto_increment,
    titulo varchar(100),
    descricao varchar(2000),
    classificacao int,
    fkUsuario int, 
    PRIMARY KEY (idHistorias, fkUsuario),
    foreign key (fkUsuario) references Usuario(idUsuario)
);
INSERT INTO Historias VALUES (NULL, 'teste', 'teste', 1, 1);
INSERT INTO Historias VALUES (NULL, 'Cinderela', 'A cinderela tem um pé tão pequeno', 5, 2);
INSERT INTO Historias VALUES (NULL, 'Rei leao', 'O rei leao tem uma familia, sla', 4, 3);

select * from Usuario JOIN Historias on idUsuario = fkUsuario;