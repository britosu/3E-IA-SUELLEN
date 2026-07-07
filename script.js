const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Nos anos 1950, o Rock 'n' Roll nasceu fundindo o blues e o country, quebrando barreiras raciais e sociais sob o comando de ícones como Chuck Berry, Little Richard e Elvis Presley. Se você pudesse voltar no tempo para testemunhar o estopim de uma revolução, onde desembarcaria?",
        alternativas: [
            {
                texto: "No estúdio da Sun Records em Memphis, vendo o momento exato em que a juventude descobriu aquele som rebelde e elétrico.",
                afirmacao: "Inspirado pelo espírito transgressor e pela energia crua dos pioneiros do rock,"
            },
            {
                texto: "No festival de Woodstock em 1969, vivenciando o ápice do movimento riponga, da psicodelia e dos protestos pacíficos.",
                afirmacao: "Conectado à utopia libertária e ao idealismo pacifista dos grandes festivais dos anos sessenta,"
            }
        ]
    },
    {
        enunciado: "Os anos 1970 elevaram o rock ao status de mito. Bandas como Led Zeppelin, Pink Floyd e Queen criaram álbuns conceituais complexos e lotaram estádios com solos monumentais. Qual aspecto dessa era de ouro mais define o seu gosto?",
        alternativas: [
            {
                texto: "Os solos virtuosos de guitarra, os vocais agudos e a teatralidade imponente dos shows de arena.",
                afirmacao: "você demonstra profunda admiração pela grandiosidade técnica e pelos espetáculos teatrais do classic rock,"
            },
            {
                texto: "As letras profundas, as experimentações em estúdio e as jornadas conceituais que faziam o álbum ser ouvido do início ao fim.",
                afirmacao: "você valoriza a complexidade artística e a imersão intelectual dos álbuns conceituais,"
            }
        ]
    },
    {
        enunciado: "Em meados dos anos 70, o Punk Rock (com Ramones e Sex Pistols) surgiu cuspindo na técnica do rock de arena, provando que três acordes e muita raiva eram suficientes para mudar o mundo. Se o rock precisa se renovar, qual o melhor caminho?",
        alternativas: [
            {
                texto: "Manter a atitude \"faça você mesmo\" (DIY), priorizando a mensagem política, a simplicidade e o impacto social nas ruas.",
                afirmacao: "ao mesmo tempo em que defende o instinto visceral da filosofia punk e a contestação social,"
            },
            {
                texto: "Abraçar a evolução das subvertentes pesadas, como o Heavy Metal e o Thrash Metal, focando na velocidade, peso e técnica instrumental.",
                afirmacao: "ao mesmo tempo em que apoia o peso avassalador e a devoção técnica das vertentes do metal,"
            }
        ]
    },
    {
        enunciado: "No início dos anos 1990, Seattle se tornou o epicentro do mundo com o Grunge. Bandas como Nirvana, Pearl Jam e Soundgarden trouxeram de volta a melancolia, as camisas de flanela e a repulsa pelo estrelismo comercial que dominava a MTV. O que o Grunge deixou de mais valioso?",
        alternativas: [
            {
                texto: "A honestidade brutal de expor dores e vulnerabilidades psicológicas em composições viscerais.",
                afirmacao: "revelando uma forte identificação com a sensibilidade emotiva e a crueza poética que o grunge resgatou,"
            },
            {
                texto: "O hino de uma geração que se recusava a se vender para o sistema corporativo da indústria musical.",
                afirmacao: "revelando um alinhamento claro com o espírito de inconformismo e o desdém pelo comercialismo industrial,"
            }
        ]
    },
    {
        enunciado: "Hoje, muitos dizem que \"o rock morreu\" porque ele perdeu o topo das paradas pop para o hip-hop, o pop e o streaming. No entanto, bandas modernas como Måneskin viralizam globalmente, Ghost cria espetáculos conceituais, e festivais como o Rock in Rio atraem multidões. Como você enxerga a saúde atual do rock?",
        alternativas: [
            {
                texto: "O rock continua vivíssimo e se modernizando ao flertar com o pop, as redes sociais e novas estéticas visuais para atrair os jovens.",
                afirmacao: "o que te consagra como um entusiasta da evolução do gênero, pronto para ver as guitarras conquistarem novas gerações no ecossistema digital."
            },
            {
                texto: "O verdadeiro rock resiste no underground, longe dos holofotes pop, mantendo a tradição clássica viva para os fãs puristas.",
                afirmacao: "o que te define como um guardião fiel das traditions analógicas, que protege a mística intocável do bom e velho rock 'n' roll contra as modas passageiras."
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
