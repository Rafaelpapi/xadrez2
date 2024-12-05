class Tabuleiro {
    constructor() {
        this.nome = "Tabuleiro;"

        this.tabuleiro = [];
        for (let linha=0; linha < 8; linha++) {
            this.tabuleiro[linha] = [];
            for (let coluna = 0; coluna < 8; coluna++) {
                this.tabuleiro[linha][coluna] = new Casa(linha, coluna);
            }
        }
        console.log(this.tabuleiro);
    }

    colocarPeca(peca, linha, coluna) {
        const casa = this.tabuleiro[linha][coluna]
        casa.elementoHtml.innerHTML = peca.simbolo;
    }
}


class Casa {
    constructor(linha, coluna) {
        this.linha = linha;
        this.coluna = coluna;
        this.peca = null;

        this.elementoHtml = document.createElement('div');
        this.elementoHtml.classList.add('casa');

        if((linha + coluna) % 2 == 0) {
            this.elementoHtml.classList.add('clara')
        } else {
            this.elementoHtml.classList.add('escura')
        }
        document.getElementById('tabuleiro').appendChild(this.elementoHtml);
        console.log("foi");
    }
}

class Peca {
    constructor(cor, linha, coluna) {
        this.cor = cor;
        this.linha = linha;
        this.coluna = coluna;
        this.simbolo = "";
    }

    movimentosPossiveis() {
        return [];
    }

    moverPara(novaLinha, novaColuna) {
        this.linha = novaLinha;
        this.coluna = novaColuna;
    }
}


class Peao extends Peca {
    constructor(cor, linha, coluna) {
        super(cor, linha,coluna);
        this.simbolo = cor === 'preto' ? '&#9823;' : '&#9823';
        this.simbolo = cor === 'preto' ? '&#9823;' : '&#9823';
    }
}
const tabuleiro = new Tabuleiro();

peao = new Peao('preto', 1, 1);

tabuleiro.colocarPeca(peao,1,1)

peao = new Peao('preto', 1,0);

tabuleiro.colocarPeca(peao,1,0)


alert(tabuleiro.nome);

peao = new Peao('preto', 1,2);

tabuleiro.colocarPeca(peao,1,2)

peao = new Peao('preto', 1,3);

tabuleiro.colocarPeca(peao,1,3)

peao = new Peao('preto', 1,4);

tabuleiro.colocarPeca(peao,1,4)

peao = new Peao('preto', 1,5);

tabuleiro.colocarPeca(peao,1,5)

peao = new Peao('preto', 1,6);

tabuleiro.colocarPeca(peao,1,6)

peao = new Peao('preto', 1,7);

tabuleiro.colocarPeca(peao,1,7)

peao = new Peao('preto', 1,8);

tabuleiro.colocarPeca(peao,1,8)

peao = new Peao('preto', 1,9);

tabuleiro.colocarPeca(peao,1,9)


class Torre extends Peca {
    constructor(cor, linha, coluna) {
        super(cor, linha, coluna);
        this.simbolo = cor === 'preto' ? '&#9820;' : '&#9814;';
    }
}

class Cavalo extends Peca {
    constructor(cor, linha, coluna) {
        super(cor, linha, coluna);
        this.simbolo = cor === 'preto' ? '&#9822;' : '&#9816;';
    }
}

class Bispo extends Peca {
    constructor(cor, linha, coluna) {
        super(cor, linha, coluna);
        this.simbolo = cor === 'preto' ? '&#9821;' : '&#9815;';
    }
}

class Rainha extends Peca {
    constructor(cor, linha, coluna) {
        super(cor, linha, coluna);
        this.simbolo = cor === 'preto' ? '&#9819;' : '&#9813;';
    }
}

class Rei extends Peca {
    constructor(cor, linha, coluna) {
        super(cor, linha, coluna);
        this.simbolo = cor === 'preto' ? '&#9818;' : '&#9812;';
    }
}

// Função para configurar as peças iniciais no tabuleiro
function configurarTabuleiro(tabuleiro) {
    // Adicionar peões
    for (let coluna = 0; coluna < 8; coluna++) {
        tabuleiro.colocarPeca(new Peao('preto', 1, coluna), 1, coluna);
        tabuleiro.colocarPeca(new Peao('branco', 6, coluna), 6, coluna);
    }

    // Adicionar torres
    tabuleiro.colocarPeca(new Torre('preto', 0, 0), 0, 0);
    tabuleiro.colocarPeca(new Torre('preto', 0, 7), 0, 7);
    tabuleiro.colocarPeca(new Torre('branco', 7, 0), 7, 0);
    tabuleiro.colocarPeca(new Torre('branco', 7, 7), 7, 7);

    // Adicionar cavalos
    tabuleiro.colocarPeca(new Cavalo('preto', 0, 1), 0, 1);
    tabuleiro.colocarPeca(new Cavalo('preto', 0, 6), 0, 6);
    tabuleiro.colocarPeca(new Cavalo('branco', 7, 1), 7, 1);
    tabuleiro.colocarPeca(new Cavalo('branco', 7, 6), 7, 6);

    // Adicionar bispos
    tabuleiro.colocarPeca(new Bispo('preto', 0, 2), 0, 2);
    tabuleiro.colocarPeca(new Bispo('preto', 0, 5), 0, 5);
    tabuleiro.colocarPeca(new Bispo('branco', 7, 2), 7, 2);
    tabuleiro.colocarPeca(new Bispo('branco', 7, 5), 7, 5);

    // Adicionar rainhas
    tabuleiro.colocarPeca(new Rainha('preto', 0, 3), 0, 3);
    tabuleiro.colocarPeca(new Rainha('branco', 7, 3), 7, 3);

    // Adicionar reis
    tabuleiro.colocarPeca(new Rei('preto', 0, 4), 0, 4);
    tabuleiro.colocarPeca(new Rei('branco', 7, 4), 7, 4);
}

// Criar o tabuleiro e configurar as peças
const tabuleiro = new Tabuleiro();
configurarTabuleiro(tabuleiro);
