
class ValidaCPF{
    constructor(cpfEnviado){
    Object.defineProperty(this,'cpfLimpo', {
      value: cpfEnviado.replace(/\D+/g,''),
      configurable:true,
      enumerable:true,
      writable:true,
    })
    }
   validaCPF(){
    if(this.cpfLimpo.length !== 11) return false
     return ('cheguei')
   }
};

const cpfValido = new ValidaCPF('063.912.989-71');


console.log(cpfValido.validaCPF());
