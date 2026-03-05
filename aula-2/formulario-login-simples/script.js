var bemVindo = document.getElementById('bemVindo');
var area = document.getElementById('area');
var popup = document.getElementById('popup');
var notasForm = document.getElementById('notas-form');
var resultadoMedia = document.getElementById('resultadoMedia');
var logged = false;
const loggedAreas = document.querySelectorAll('div.loggedArea');
const nonLoggedAreas = document.querySelectorAll('div.nonLoggedArea');

const submitButton = document.querySelector('button#submitBtn');
submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    entrar();
})

function entrar() {
    var nome = document.querySelector('input#nome').value;
    var curso = document.querySelector('input#curso').value;
    if (nome === '' || nome === null || curso === '' || curso === null) {
        alert("Ops, algo deu errado!");
        area.innerHTML = "Clique no botão para acessar...";
    } else {
        
        bemVindo.innerHTML = "Bem-vindo, " + nome + ", ao curso de " + curso;
        let botaoSair = document.createElement("button");
        botaoSair.innerText = "Sair da conta";
        botaoSair.onclick = sair;
        area.appendChild(botaoSair);
        logged = true;
    }
    verificarLogin();
}
function sair() {
    area.innerHTML = "Você saiu!";
    logged = false;
    mostrarPopup();
    verificarLogin();
}

function mediaTresNotas(nota1, nota2, nota3) {
    let media = (nota1 + nota2 + nota3) / 3;
    console.log(media);
    return media;
}

function verificarLogin() {
    if (logged === true) {
        [...loggedAreas].forEach(areaLog => {
            areaLog.style.display = 'block';
        });

        [...nonLoggedAreas].forEach(areaLog => {
            areaLog.style.display = 'none';
        });
    } else {
        [...loggedAreas].forEach(areaLog => {
            areaLog.style.display = 'none';
        });

        [...nonLoggedAreas].forEach(areaLog => {
            areaLog.style.display = 'block';
        });
    }
}
verificarLogin();

function mostrarPopup() {
    if (!popup) return;
    popup.classList.remove('hidden');
    setTimeout(() => {
        popup.classList.add('hidden');
    }, 3000);
}

if (notasForm) {
    notasForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const n1 = parseFloat(document.getElementById('nota1').value);
        const n2 = parseFloat(document.getElementById('nota2').value);
        const n3 = parseFloat(document.getElementById('nota3').value);

        if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
            resultadoMedia.textContent = 'Preencha todas as notas corretamente (0 a 10).';
            return;
        }

        const media = mediaTresNotas(n1, n2, n3);
        resultadoMedia.textContent = 'Média das notas: ' + media.toFixed(2);
    });
}