module.exports.validarNome = function(nome){
    if(nome.lenght < 5){
        return "Nome Invalido"
    }
    else{
        return nome;
    }
}

module.exports.validarCpf = function(cpf){
    if(cpf.lenght > 14 || cpf.lenght < 11 ){
        return 'Cpf Invalido'
    }
    else if(cpf.lenght > 11 && cpf.lenght < 14){
        cpf = cpf.replace(".", "");
        return cpf;
    }
    else if(cpf == 11){
        return cpf;
    }
}