//botao fechar do aviso
const btn = document.querySelector('#bf1');
if (btn != null) {
    btn.addEventListener('click', function () {
        const aviso = document.querySelector('.aviso-promo');
        if (aviso.style.display != "none") {
            aviso.style.display = "none";
        }
    })
}
//tamanho
const btnTamanho = document.querySelectorAll('.b-tamanho');
btnTamanho.forEach(e => {
    con = 0;
    e.addEventListener('click', function () {
        if (e.style.backgroundColor != "black" && con == 0) {
            e.style.backgroundColor = "black";
            e.style.color = "white";
            con++;
        } else if (e.style.backgroundColor != "black" && con > 0) {
            btnTamanho.forEach(e2 => {
                e2.style.backgroundColor = "white";
                e2.style.color = "black";
            })
            con = 1;
            e.style.backgroundColor = "black";
            e.style.color = "white";
        }
        // else if (e.style.backgroundColor == "black") {
        //     e.style.backgroundColor = "white";
        //     e.style.color = "black";
        //     con = 0;
        // } //desselecionar

    })
});
//cor
const cor = document.querySelectorAll('.caixa-cor');
cor.forEach(e => {
    con = 0;
    e.addEventListener('click', function () {
        if (e.style.borderColor != "black" && con == 0) {
            e.style.borderColor = "black";
            con++;
        } else if (e.style.borderColor != "black" && con > 0) {
            cor.forEach(e2 => {
                e2.style.borderColor = "#edf2f4";
            })
            con = 1;
            e.style.borderColor = "black";
        }
        // else if (e.style.borderColor == "black") {
        //     e.style.borderColor = "#edf2f4";
        //     con = 0;
        // } //desselecionar
    })
});

//botao fechar da caixa do cep
const btnCep = document.querySelector('#bf2');
const caixaCep = document.querySelector('.caixa-cep');
if (btnCep != null) {
    btnCep.addEventListener('click', function () {
        if (caixaCep.style.display != "none") {
            caixaCep.style.display = "none";
        }
    })
}

//abrindo caixa do cep
const cep = document.querySelector('.cep');
if (cep != null) {
    cep.addEventListener('click', function () {
        document.querySelector('.caixa-cep').style.display = "flex";

    })
}
//abrindo caixa do cep2
const cep2 = document.querySelector('.b-cep');
if (cep2 != null) {
    cep2.addEventListener('click', function (e) {
        document.querySelector('.caixa-cep').style.display = "flex";
    })
}
// colocando cep
const okCep = document.querySelector('#ok-cep');
const inputCep = document.querySelector('#input-cep');
const cepTopo = document.querySelector('#cep-topo');
if (okCep != null) {
    okCep.addEventListener('click', function () {
        if (inputCep.value.length == 8) { //8 é o numero de digitos do cep
            n = inputCep.value.substring(0, 5) + "-" + inputCep.value.substring(5, 8)
            cepTopo.textContent = n;
            cepTopo.style.fontSize = "1.1em";
            cepTopo.style.color = "black"
            caixaCep.style.display = "none";
        }
    })
    inputCep.addEventListener('keypress', function (e) {
        if (inputCep.value.length == 8 && e.keyCode == 13) { //8 é o numero de digitos do cep
            n = inputCep.value.substring(0, 5) + "-" + inputCep.value.substring(5, 8)
            cepTopo.textContent = n;
            cepTopo.style.fontSize = "1.1em";
            cepTopo.style.color = "black"
            caixaCep.style.display = "none";
        }
    })
}

//clique coracao produto 
const coracao = document.querySelector(".b-salvar");
const coracaoV = document.querySelector("#coracao-vazio");
const coracaoC = document.querySelector("#coracao-cheio");
if (coracao != null) {
    coracao.addEventListener('click', function () {
        if (coracaoC.style.display != "block") {
            coracaoC.style.display = "block";
            coracaoV.style.display = "none";
        } else {
            coracaoC.style.display = "none";
            coracaoV.style.display = "block";
        }

    })
}
