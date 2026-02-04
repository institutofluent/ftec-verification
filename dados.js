// DADOS DO ALUNO - EDITE AQUI
const dadosAluno = {
    codigo: "FTEC2024001",
    dataEmissao: "15/03/2024",
    nome: "JOÃO DA SILVA",
    cpf: "123.456.789-00",
    rg: "MG-12.345.678",
    nacionalidade: "BRASILEIRA",
    naturalidade: "BELO HORIZONTE/MG",
    nascimento: "10/05/1995",
    filiacao: "ANTÔNIO SILVA E MARIA SANTOS",
    curso: "ANÁLISE E DESENVOLVIMENTO DE SISTEMAS"
};

// FUNÇÃO QUE PREENCHE OS DADOS
function preencherDados() {
    document.getElementById("cod").textContent = dadosAluno.codigo;
    document.getElementById("data").textContent = dadosAluno.dataEmissao;
    document.getElementById("aluno").textContent = dadosAluno.nome;
    document.getElementById("cpf").textContent = dadosAluno.cpf;
    document.getElementById("rg").textContent = dadosAluno.rg;
    document.getElementById("nacionalidade").textContent = dadosAluno.nacionalidade;
    document.getElementById("natural").textContent = dadosAluno.naturalidade;
    document.getElementById("nascimento").textContent = dadosAluno.nascimento;
    document.getElementById("filiacao").textContent = dadosAluno.filiacao;
    document.getElementById("curso").textContent = dadosAluno.curso;
}

// EXECUTA QUANDO A PÁGINA CARREGA
document.addEventListener("DOMContentLoaded", preencherDados);
