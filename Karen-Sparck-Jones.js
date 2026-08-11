const temaClaro = {
    '--fundo': '#a3b2a987',
    '--text': '#333',
    '--summary': '#939a9e82',
    '--menu': '#9983e325',
    '--section': '#9289483c',
    '--btn-dark-mode':'#8B000067',
    '--ref': '#fff',
    '--refh': '#333'
};

const temaEscuro = {
    '--fundo': '#1a1c1e',
    '--text': '#e8e8e8',
    '--summary': '#2e2e35',
    '--menu': '#3a3550',
    '--section': '#2b2b33',
    '--btn-dark-mode':'#DC143C67',
    '--ref': '#fff',
    '--refh': '#bbb'
};

const raiz = document.documentElement;
const botao = document.getElementById('btn-dark-mode');
const CHAVE_ARMAZENAMENTO = 'tema-preferido';

function aplicarTema(tema) {
    const paleta = tema === 'escuro' ? temaEscuro : temaClaro;
    Object.entries(paleta).forEach(([variavel, valor]) => {
        raiz.style.setProperty(variavel, valor);
    });
    document.body.classList.toggle('tema-escuro', tema === 'escuro');
    if (botao) {
        botao.textContent = tema === 'escuro' ? 'Modo Claro' : 'Modo Escuro';
    }
    localStorage.setItem(CHAVE_ARMAZENAMENTO, tema);
}

function alternarTema() {
    const temaAtual = localStorage.getItem(CHAVE_ARMAZENAMENTO) || 'claro';
    const novoTema = temaAtual === 'claro' ? 'escuro' : 'claro';
    aplicarTema(novoTema);
}

document.addEventListener('DOMContentLoaded', () => {
    const temaSalvo = localStorage.getItem(CHAVE_ARMAZENAMENTO) || 'claro';
    aplicarTema(temaSalvo);
});

if (botao) {
    botao.addEventListener('click', alternarTema);
}
