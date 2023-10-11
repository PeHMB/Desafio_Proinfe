drop schema if exists proinfe_desafio;

create database proinfe_desafio;

use proinfe_desafio;

create table
    funcionario(
        id_func int primary key auto_increment not null,
        nome_fun varchar(300),
        dataNascimento_func date,
        cpf_func varchar(15),
        email_func varchar(300),
        telefone varchar(300)
    );

insert into funcionario
values (
        null,
        'Pedro',
        '2005-03-21',
        '390.260.918-42',
        'pedroautehntico@gmail.com',
        '69984424742'
    );

select * from funcionario;

delimiter $$
CREATE PROCEDURE CadastrarFuncionario(nome VARCHAR(300), dataNascimento DATE,cpf VARCHAR(15),email VARCHAR(300),telefone VARCHAR(300))
BEGIN
IF (nome IS not NULL or nome > 5) THEN #Validando o nome de acordo sendo ele não nulo e maior que 5 caracteres
    IF(cpf is null or dataNascimento is null or email is null or telefone is null) then
		select 'Insira todos os campos';
        ELSE
	        INSERT INTO funcionario values (nome, dataNascimento,cpf,email,telefone);
        END IF;
    ELSE
        SELECT 'Nome invalido';
END IF;
END;

delimiter $$;