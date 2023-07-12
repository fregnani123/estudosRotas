
class ValidaCPF{
    constructor(cpfEnviado){
    this.cpfEnviado = cpfEnviado;
    Object.defineProperty(this,'validaCPF')
    }
};

const cpfValido = new ValidaCPF('063.912.989-71');

console.log(cpfValido)