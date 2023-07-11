
class ValidaFormulario {
   
   constructor(){
    this.formulario = document.querySelector('.formulario');

  this.eventos();
   }

  eventos(){
    this.formulario.addEventListener('submit', e => {
      this.handleSubmit(e);
    });
  }
 
  handleSubmit(e){
   e.preventDefault();
   
   const camposValidos = this.campoValidos();
  }
  
  campoValidos() {
   let valid = true;
    
   for(let errorText of this.formulario.querySelectorAll('.error-text')){
      errorText.remove()
   }

   for (let campo of this.formulario.querySelectorAll('.validar')){
     const label = campo.previousElementSibling.innerText;

      if(!campo.value) {
         this.criaErro(campo, `Campo ${label} não pode estar em branco.`)
         valid = false;
      }
   }
  }

  criaErro(campo,msg){
    const div = document.createElement('div');
    div.innerHTML = msg;
    div.classList.add('error-text');
    campo.insertAdjacentElement('afterend',div)
  }
}

const valida = new ValidaFormulario();








// // const ver = eSequencia('12345')

// // function eSequencia(numeros){
// //   let n = numeros
// //  if (n.charAt(0).repeat(5) === n){
// //     console.log('é sequencia')
// //     }else{console.log('Não é sequencia')}
// // }

// const formulario = document.querySelector('.formulario');
// const nome= document.querySelector('.nome');
// const sobrenome= document.querySelector('.sobrenome');
// const cpf= document.querySelector('.cpf')
// const senha = document.querySelector('.nome');
// const repetirSenha = document.querySelector('.repetirSenha');

// const nomeLabel = document.querySelector('#nome')


// formulario.addEventListener('submit',(e)=>{
//  e.preventDefault(); 

//  if (!nome.value){
//     console.log('Preencha seu nome');
//  };
 
//  if(!sobrenome.value){
   
//     return
//  };

//  formulario.submit();
// })
