

const turma = [

    {
    id: 1,
    aluno:'Fabiano',
    idade: 36},

    {
    id: 2,
    aluno:'Fernando',
    idade: 33},

   {
    id: 3,
    aluno: 'Alline',
    idade: 29},

];

const nomesIdadesAlunos = turma.map(aluno => {
    return {
      nome: aluno.aluno,
      idade: aluno.idade,
      categoria: aluno.idade >= 30 ? 'Adulto' : 'Jovem'
    };
  });
  
  console.log(nomesIdadesAlunos);

// const idadeTotal = turma.reduce((a,b) => a = a+b.idade,0)

// const idadeMaiorDe30 = turma.filter(a => a.idade > 30);





// for (const nomes of turma){
//     console.log(nomes.aluno)
// }

