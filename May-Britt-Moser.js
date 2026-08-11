const temaClaro = {
    '--fundo': '#FFDAB9',
    '--text': '#000000',
    '--titulo': '#722F37',
    '--section': '#FDF5E6',
    '--sectionf': '#722F37',
    '--sectiona': '#FFEFD5',
    '--button': '#722F37',
    '--shadowtiny': '#000000',
    '--recshadow': '#722F37',
    '--buttonhover': '#FF7F50'
};

const temaEscuro = {
    '--fundo': '#663399',
    '--text': '#000000', 
    '--titulo': '#191970',
    '--section': '#E6E6FA',
    '--sectionf': '#4B0082',
    '--sectiona': '#9370DB',
    '--button': '#191970',
    '--shadowtiny': '#000000',
    '--recshadow': '#191970'
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
