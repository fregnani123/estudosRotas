

// const ver = eSequencia('12345')

// function eSequencia(numeros){
//   let n = numeros
//  if (n.charAt(0).repeat(5) === n){
//     console.log('é sequencia')
//     }else{console.log('Não é sequencia')}
// }

const formulario = document.querySelector('.formulario');
const nome= document.querySelector('.nome');
const sobrenome= document.querySelector('.sobrenome');
const cpf= document.querySelector('.cpf')
const senha = document.querySelector('.nome');
const repetirSenha = document.querySelector('.repetirSenha');


formulario.addEventListener('submit',(e)=>{ if(e.type === 'submit') e.preventDefault();
if (!nome.value){
    console.log('nome vazio');
}

});
