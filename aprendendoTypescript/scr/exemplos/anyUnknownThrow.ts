let anyEstaDeVolta: any;
anyEstaDeVolta = 3;
anyEstaDeVolta = "test"
anyEstaDeVolta = 5;

let stringTest: string = "verificar"
stringTest = anyEstaDeVolta;

let unknownValor: unknown;
unknownValor = 3;
unknownValor = "oii";
unknownValor = true;

let stringTest2: string = "oiiii";

 if (typeof unknownValor === "string") {
    stringTest2 = unknownValor;
 }

 function jogaErro (erro: string, codigo: number): never {
   throw {error: erro, code: codigo}
 }

 jogaErro("Deu erro", 500);