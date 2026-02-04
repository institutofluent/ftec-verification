// ==============================================
// ARQUIVO ÚNICO DE CONFIGURAÇÃO DE DADOS
// ==============================================

// CONFIGURAÇÃO DOS DADOS POR PÁGINA
// Formato: "nome-da-pagina.html": { dados }
const dadosPorPagina = {
    // ============ EXEMPLOS ============
    
    // Para página "joao-silva.html"
    "token870HhGzVwWnBh202hhH5.html": {
        cod: "FTEC2024001",
        data: "15/03/2024",
        aluno: "JOÃO DA SILVA SANTOS",
        cpf: "123.456.789-00",
        rg: "MG-12.345.678",
        nacionalidade: "BRASILEIRA",
        natural: "BELO HORIZONTE/MG",
        nascimento: "10/05/1995",
        filiacao: "ANTÔNIO SILVA E MARIA SANTOS",
        curso: "ANÁLISE E DESENVOLVIMENTO DE SISTEMAS",
        pdf: "joao-silva-diploma.pdf"  // Nome do PDF para download
    },
    }
    
    // ADICIONE MAIS PÁGINAS AQUI...
    // Formato:
    // "nome-da-pagina.html": {
    //     cod: "CODIGO",
    //     data: "DATA",
    //     aluno: "NOME",
    //     cpf: "CPF",
    //     rg: "RG",
    //     nacionalidade: "NACIONALIDADE",
    //     natural: "CIDADE/ESTADO",
    //     nascimento: "DATA",
    //     filiacao: "PAI E MÃE",
    //     curso: "CURSO",
    //     pdf: "nome-do-arquivo.pdf"
    // }
};

// ==============================================
// FUNÇÃO QUE PREENCHE OS DADOS AUTOMATICAMENTE
// ==============================================

function preencherDados() {
    // 1. Obtém o nome da página atual
    const paginaAtual = window.location.pathname.split('/').pop();
    
    // 2. Verifica se a página atual está configurada
    if (dadosPorPagina[paginaAtual]) {
        const dados = dadosPorPagina[paginaAtual];
        
        // 3. Preenche todos os campos
        document.getElementById('cod').textContent = dados.cod;
        document.getElementById('data').textContent = dados.data;
        document.getElementById('aluno').textContent = dados.aluno;
        document.getElementById('cpf').textContent = dados.cpf;
        document.getElementById('rg').textContent = dados.rg;
        document.getElementById('nacionalidade').textContent = dados.nacionalidade;
        document.getElementById('natural').textContent = dados.natural;
        document.getElementById('nascimento').textContent = dados.nascimento;
        document.getElementById('filiacao').textContent = dados.filiacao;
        document.getElementById('curso').textContent = dados.curso;
        
        // 4. Atualiza o botão de download do PDF
        const botaoPDF = document.querySelector('.download-btn');
        if (botaoPDF && dados.pdf) {
            botaoPDF.href = dados.pdf;
            botaoPDF.download = dados.pdf;
        }
        
        // 5. Atualiza o título da página
        document.title = `Documento - ${dados.aluno}`;
        
        console.log(`Dados preenchidos para: ${paginaAtual}`);
    } else {
        // Se a página não estiver configurada, mostra mensagem
        console.warn(`Página "${paginaAtual}" não encontrada no arquivo de dados.`);
        
        // Opcional: Mostrar mensagem para o usuário
        const aviso = document.createElement('div');
        aviso.style.cssText = `
            background: #fff3cd;
            border: 1px solid #ffeaa7;
            color: #856404;
            padding: 15px;
            margin: 20px;
            border-radius: 5px;
            text-align: center;
            font-size: 16px;
        `;
        aviso.innerHTML = `
            <strong>Aviso:</strong> Documento não configurado.<br>
            Entre em contato com a administração.
        `;
        
        const rotulos = document.querySelector('.rotulos');
        if (rotulos) {
            rotulos.parentNode.insertBefore(aviso, rotulos.nextSibling);
        }
    }
}

// ==============================================
// EXECUTA QUANDO A PÁGINA CARREGA
// ==============================================

// Espera o DOM carregar completamente
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', preencherDados);
} else {
    preencherDados();
}

// ==============================================
// FUNÇÃO PARA ADICIONAR NOVOS DADOS DINAMICAMENTE
// ==============================================

// Função útil se quiser adicionar mais dados via console
function adicionarDados(nomePagina, dados) {
    dadosPorPagina[nomePagina] = dados;
    console.log(`Dados para "${nomePagina}" adicionados com sucesso!`);
    return true;
}

// Exemplo de uso no console:
// adicionarDados("nova-pagina.html", {
//     cod: "FTEC2024006",
//     data: "10/04/2024",
//     aluno: "NOVO ALUNO",
//     cpf: "000.000.000-00",
//     rg: "XX-00.000.000",
//     nacionalidade: "BRASILEIRA",
//     natural: "CIDADE/UF",
//     nascimento: "01/01/2000",
//     filiacao: "PAI E MÃE",
//     curso: "CURSO",
//     pdf: "novo-documento.pdf"
// });
