class CriaPessoa{
    constructor(nome,sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    };

    falaNome(){
        console.log(`Seu nome é ${this.nome} ${this.sobrenome}, seja bem vindo!`)
    }
}

const args = process.argv.slice(2); 
const nome = process.argv[2];
const sobrenome = process.argv[3];

const novaPessoa = new CriaPessoa(nome, sobrenome);
novaPessoa.falaNome();