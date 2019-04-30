// 30 de abril de 2019, Mateus Israel

// Elementos
var int1 = document.querySelector("#int1");
var int2 = document.querySelector("#int2");
var tela = document.querySelector("#tela");

int1.innerHTML = "<p>Clique-me</p>"
int2.innerHTML = "<p>Clique-me</p>"


// Variáveis
var cond1 = false;
var cond2 = false;


// Lógica   ======================================
int1.addEventListener('click', () => {
    if (cond1 == false) {
        cond1 = true;
        int1.innerHTML = "<p>On</p>"

    } else if (cond1 == true) {
        cond1 = false;
        int1.innerHTML = "<p>Off</p>"

    }

    checarAllEst();
});

int2.addEventListener('click', () => {
    if (cond2 == false) {
        cond2 = true;
        int2.innerHTML = "<p>On</p>"

    } else if (cond2 == true) {
        cond2 = false;
        int2.innerHTML = "<p>Off</p>"

    }

    checarAllEst();
});



function checarAllEst() {
    if (cond1 == true && cond2 == true) {
        mudarTela("#ffcc00");

    } else if (cond1 == false && cond2 == false) {
        mudarTela("#19192F");

    } else {
        mudarTela("#19192F");

    }

}



function mudarTela(estad) {
    tela.style = "background-color: " + estad + ";"
}
