const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A inteligência artificial é treinada por meio de algoritmos de aprendizagem de máquina, que permitem que os sistemas analisem dados e identifiquem tendências e padrões. Com base nos exemplos fornecidos, a inteligência artificial ajusta seus modelos e melhora o desempenho ao longo do tempo.. Oque você acha disso?",
        alternativas: [
            {
                texto: "Isso é verdade!",
                afirmacao: "Eu sei informações sobre o IA"
            },
            {
                texto: "Isso é mentira!",
                afirmacao: "Eu não sei muito sobre o IA, mas acredito que isso seja falso"
            }
        ]
    },
    {
        enunciado: "À medida que a tecnologia avança, é provável que ocorram mudanças no mercado de trabalho, e alguns empregos iram acabar, mas também surgirão novas oportunidades de emprego relacionadas à IA.",
        alternativas: [
            {
                texto: "Isso é assustador",
                afirmacao: "Tenho medo da IA"
            },
            {
                texto: "Isso é fantástico",
                afirmacao: "Acredito que o IA é muito impressionante"
            }
        ]
    },
    {
        enunciado: "O IA talvez não seja seguro, á medida que o sistema se tornam mais autônomos, é obrigatório garantir que eles sejam seguros, abordando questões como privacidade, proteção contra ataques cibernéticos e que o sistema seja com éticas e justo.",
        alternativas: [
            {
                texto: "Tenho medo que a IA abranja o mundo, e de algum jeito afete o mundo e as pessoas. ",
                afirmacao: "Sou preocupada com isso"
            },
            {
                texto: "Acredito que a IA vai melhorar cada vez mais, e sendo assim melhorar nosso mundo.",
                afirmacao: "Sou confiante que a IA é muito boa para o mundo"
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
