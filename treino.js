

const ver = eSequencia('12345')

function eSequencia(numeros){
  let n = numeros
 if (n.charAt(0).repeat(5) === n){
    console.log('é sequencia')
    }else{console.log('Não é sequencia')}
}