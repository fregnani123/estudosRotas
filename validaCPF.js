
class ValidaCPF{
    constructor(cpfEnviado){
    Object.defineProperty(this,'cpfLimpo', {
      value: cpfEnviado.replace(/\D+/g,''),
      configurable:true,
      enumerable:true,
      writable:true,
    });
    }

    geraNovoCPF(){
        const cpfSemDigitos = this.cpfLimpo.slice(0,-2);
        const digito1 = this.geraDigito(cpfSemDigitos);
    }

    geraDigito(cpfSemDigitos){
        
    }
   
    isSequential(){
      return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo
    }
   
   validaCPF(){
    if(!this.cpfLimpo) return false;
    if(this.cpfLimpo === 'string')
    if(this.cpfLimpo.length !== 11);
    if(this.isSequential()) return false;
    
  
     return ('cheguei até aqui!')
   }
};

const cpfValido = new ValidaCPF('063.912.989-71');


console.log(cpfValido.validaCPF());
