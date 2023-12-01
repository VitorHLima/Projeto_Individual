DROP DATABASE bd_Disney;

CREATE DATABASE bd_Disney;

USE bd_Disney;

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
	idHistorias int auto_increment PRIMARY KEY,
    titulo varchar(100),
    descricao varchar(2500),
    classificacao int,
    fkUsuario int, 
    foreign key (fkUsuario) references Usuario(idUsuario)
);
CREATE TABLE Quiz (
	idQuiz int primary key auto_increment,
    qtdPontos int,
    fkUsuario int,
    foreign key (fkUsuario) references Usuario(idUsuario)
);
CREATE TABLE enquete (
	idEnquete int primary key auto_increment,
    opcaoEscolhida varchar(50),
    fkUsuario int, 
    foreign key (fkUsuario) references Usuario(idUsuario)
);
SELECT opcaoEscolhida, COUNT(opcaoEscolhida) FROM enquete
    GROUP BY opcaoEscolhida;


INSERT INTO enquete VALUES (null, 'urso', 3);
SELECT* FROM enquete; 
truncate table enquete;
truncate table historias;

SELECT * from Enquete JOIN Usuario ON fkUsuario = idUsuario; 

SELECT opcaoEscolhida, fkUsuario FROM Enquete; 

SELECT * FROM Usuario JOIN Historias ON idUsuario = fkUsuario where Usuario.nickname = 'vitorhugo';

DELETE FROM Usuario WHERE idUsuario = 6;

SELECT SUM(Quiz.qtdPontos), SUM(Quiz.qtdPontos) FROM Quiz;

SELECT * FROM Quiz;

INSERT INTO Quiz VALUES (NULL, 3, 1);

SELECT SUM(qtdPontos) as soma FROM Quiz JOIN Usuario ON idUsuario = idUsuario;

select * from Usuario JOIN Historias on idUsuario = fkUsuario 
JOIN Quiz ON idQuiz;

SELECT SUM(qtdPontos) FROM Quiz JOIN Usuario on idUsuario = fkUsuario where idQuiz = idUsuario;

SELECT SUM(qtdPontos) FROM Quiz JOIN Usuario ON idUsuario = fkUsuario;