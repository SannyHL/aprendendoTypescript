"use strict";
const pessoa = {
    nome: "Sanny",
    idade: 27,
    profissao: "desenvolvedora"
};
const isac = {
    nome: "Isac",
    idade: 30,
    profissao: "coordenador"
};
/*enum da para colocar muitas variaveis*/
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["JogadoraDeFutebol"] = 3] = "JogadoraDeFutebol";
    Profissao[Profissao["Bordadeira"] = 4] = "Bordadeira";
})(Profissao || (Profissao = {}));
const celma = {
    nome: "Celma",
    idade: 50,
    profissao: Profissao.Bordadeira
};
const clara = {
    nome: "Clara",
    idade: 12,
    materia: ["Matemática", "Português"]
};
const josefa = {
    nome: "Joséfa",
    idade: 12,
    profissao: Profissao.Atriz,
    materia: ["Matemática", "Português"]
};
function listar(lista) {
    for (const item of lista) {
        console.log(" ", item);
    }
}
listar(clara.materia);
