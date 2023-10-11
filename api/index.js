const express = require('express');
const app = express();
const pool = require('./connection');
const connection = require('./connection');
const validacao = require('./validacoes');
//listagem dos funcionario
app.get('/', (req, res) => {
    connection.query(`SELECT * FROM funcionario where id_func = 1`, (error, results) => {
        if (error) {
            throw error;
        }
        res.send(results);
    });
});

app.post('/funcionario', (req, res) => {
    const { nome, dataNascimento, cpf, email, telefone } = req.body;
    connection.query(
        'call CadastrarFuncionario(nome, dataNascimento, cpf, email, telefone',[nome, dataNascimento, cpf, email, telefone],
        (error, results) => {
            if (error) {
                throw error;
            }
            res.send(`Funcionário adicionado com ID: ${results.insertId}`);
        }
    );
});

app.put('/funcionario/:id', (req, res) => {
    const id = req.params.id;
    const { nome, dataNascimento, cpf, email, telefone } = req.body;
    connection.query(
        'UPDATE funcionario SET nome_func = ?, data_nascimento_func = ?, cpf_func = ?, email_func = ?, telefone_func = ? WHERE id_func = ?',
        [nome, dataNascimento, cpf, email, telefone, id],
        (error, results) => {
            if (error) {
                throw error;
            }
            res.send(`Funcionário atualizado com ID: ${id}`);
        }
    );
});

app.delete('/funcionario/:id', (req, res) => {
    const id = req.params.id;
    connection.query(
        'DELETE FROM funcionario WHERE id_func = ?',
        [id],
        (error, results) => {
            if (error) {
                throw error;
            }
            res.send(`Funcionário deletado com ID: ${id}`);
        }
    );
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});


