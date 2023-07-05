class CriaPessoa{
    constructor(nome,sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
        // Object.freeze(this)
       
    }
    
    falaNome(){
        console.log(`Seu nome é ${this.nome} ${this.sobrenome},idade:${this.idade} seja bem vindo!`)
    }
 
}

const args = process.argv.slice(2); 
const nome = process.argv[2];
const sobrenome = process.argv[3];
const idade = process.argv[4];


const novaPessoa = new CriaPessoa(nome, sobrenome);

novaPessoa.idade = idade

novaPessoa.falaNome();
console.log(novaPessoa)


