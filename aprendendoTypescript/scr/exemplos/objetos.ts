const pessoa = {
    nome: "Sanny",
    idade: 27,
    profissao: "desenvolvedora"
}

const isac:  {nome: string, idade: number, profissao:string} = {
    nome: "Isac",
    idade: 30,
    profissao: "coordenador"
}

/*enum da para colocar muitas variaveis*/
enum Profissao {
    Professora,
    Atriz2,
    Desenvolvedora,
    JogadoraDeFutebol,
    Bordadeira
}

interface Pessoa{
    nome: string,
    idade: number,
    profissao2?: Profissao
}

interface Estudante extends Pessoa{
    materia: string[]
}

const celma: Pessoa = {
    nome: "Celma",
    idade: 50,
    profissao: Profissao.Bordadeira
}

const clara: Estudante = {
    nome:"Clara",
    idade: 12,
    materia: ["Matemática", "Português"]
}
const josefa: Estudante = {
    nome:"Joséfa",
    idade: 12,
    profissao: Profissao.Atriz,
    materia: ["Matemática", "Português"]
}

function listar(lista: string[]) {
    for(const item of lista){
        console.log(" ", item);
    }
}

listar(clara.materia);
