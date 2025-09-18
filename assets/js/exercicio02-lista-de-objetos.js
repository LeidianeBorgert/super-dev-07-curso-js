/*Criar uma lista de 2 alunos com os seguintes atributos (id, nome, sobrenome, número matricula, turma, notas (lista com 3 notas))

Turmas Disponíveis: Sup 05, Sup 06 e Sup 07

a) Adicionar um aluno com id, nome, sobrenome, notas (lista vazia)
b) Adicionar um aluno com id, nome, sobrenome, número da matrícula, turma, notas
c) Adicionar um aluno com id, nome, sobrenome, número da matricula, notas
d) Adicionar um aluno preenchendo id, nome, sobrenome, notas
e) Criar uma lista com os ids dos alunos
f) Criar uma lista com os ids dos alunos filtrando pela turma Sup 07
g) Criar uma lista filtrando por alunos com nome menor que 10
h) Criar uma lista filtrando com os números das matrículas
i) Criar uma lista filtrando alunos sem número de matricula */

function listaAlunos() {
    let alunos = [];

    let aluno01 =
    {
        id: crypto.randomUUID(),
        nome: "Ana",
        sobrenome: "Caetano",
        numero_matricula:29856,
        turma: "Sup05",
        notas: {
            nota1: 10.00,
            nota02: 6.50,
            nota03: 8.00
        }
    }

    let aluno02 =
    {
        id: crypto.randomUUID(),
        nome: "Pedro Henrique",
        sobrenome: "Ribeiro",
        numero_matricula:25612,
        turma: "Sup06",
        notas: {
            nota1: 7.50,
            nota02: 9.00,
            nota03: 7.00
        }
    }

    alunos.push(aluno01, aluno02)


//  a) Adicionar um aluno com id, nome, sobrenome, notas (lista vazia)
    let aluno03 =
    {
        id: crypto.randomUUID(),
        nome: "Maria",
        sobrenome: "Silva",
        notas: []
    }
    alunos.push(aluno03)

//b) Adicionar um aluno com id, nome, sobrenome, número da matrícula, turma, notas
    let aluno04 = {
        id: crypto.randomUUID(),
        nome: "Paulo",
        sobrenome: "Costa",
        numero_matricula:89563,
        turma: "Sup07",
        notas: {
            nota1: 8.50,
            nota02: 4.00,
            nota03: 9.00
        }
    }
    alunos.push(aluno04)

//c) Adicionar um aluno com id, nome, sobrenome, número da matricula, notas

    let aluno05 = {
        id: crypto.randomUUID(),
        nome: "Taina",
        sobrenome: "Pereira",
        numero_matricula:63251,
        notas: {
            nota1: 5.00,
            nota02: 7.00,
            nota03: 8.50
        }
    }
    alunos.push(aluno05)

//d) Adicionar um aluno preenchendo id, nome, sobrenome, notas

    let aluno06 = {
        id: crypto.randomUUID(),
        nome: "Luis",
        sobrenome: "Farias",
        notas: {
            nota1: 9.50,
            nota02: 10.00,
            nota03: 10.00
        }
    }
    alunos.push(aluno06)

//e) Criar uma lista com os ids dos alunos
    const idsAlunos = alunos.map(aluno => aluno.id);
    //console.log(idsAlunos)

//f) Criar uma lista com os ids dos alunos filtrando pela turma Sup 07
    const idTurma07 = alunos.filter(aluno => aluno.turma == "Sup07")
        .map(idTurma07 => idTurma07.id + " " + idTurma07.turma);
    //console.log(idTurma07)

//g) Criar uma lista filtrando por alunos com nome menor que 10
    const nomeAluno = alunos.filter(aluno => aluno.nome.length < 10)
        .map(nomeAluno => nomeAluno.nome);

    //console.log(nomeAluno)

//h) Criar uma lista filtrando com os números das matrículas
    const matricula = alunos.filter(aluno => aluno.numero_matricula)
        .map(matricula => matricula.numero_matricula);
    //console.log(matricula)
 //i) Criar uma lista filtrando alunos sem número de matricula
    const semMatricula = alunos.filter(aluno => aluno.numero_matricula === undefined);
    //console.log(semMatricula)
}




