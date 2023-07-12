
class ValidaCPF{
    constructor(cpfEnviado){
    Object.defineProperty(this,'cpfLimpo', {
      value: cpfEnviado.replace(/\D+/g,''),
      configurable:true,
      enumerable:true,
      writable:true,
    });
    }
   
    isSequential(){
      return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo
    }
   
   validaCPF(){
    if(!this.cpfLimpo) return false;
    if(this.cpfLimpo.length !== 11);
    if(this.isSequential()) return false;
    
  
     return ('cheguei até aqui!')
   }
};

const cpfValido = new ValidaCPF('063.912.989-71');


console.log(cpfValido.validaCPF());
