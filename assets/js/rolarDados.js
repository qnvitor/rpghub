document.addEventListener("DOMContentLoaded", function() {
    // Esconder o menuDados inicialmente
    var menuDados = document.getElementById("menuDados");
    menuDados.classList.add("hidden");

    // Adicionar evento de clique ao link "Dados"
    var dadosLink = document.querySelector("#menu a[href='#menuDados']");
    dadosLink.addEventListener("click", function(event) {
        event.preventDefault();
        // Alternar visibilidade do menuDados
        menuDados.classList.toggle("hidden");
    });

    // Adicionar evento de clique aos links dentro do menuDados
    var linksDados = document.querySelectorAll("#menuDados a");
    linksDados.forEach(function(link) {
        link.addEventListener("click", function(event) {
            // Ocultar o menuDados após clicar em um link
            menuDados.classList.add("hidden");
        });
    });
});

function rolarDados(tipoDado) {
    const quantidade = prompt('Quantos dados você gostaria de rolar?');

    if (quantidade && parseInt(quantidade) > 0) {
        const resultados = [];
        for (let i = 0; i < parseInt(quantidade); i++) {
            resultados.push(Math.floor(Math.random() * tipoDado) + 1);
        }
        alert(`Resultado: ${resultados.join(', ')}`);
    } else {
        alert('Por favor, insira uma quantidade válida.');
    }
}

// Adiciona eventos de clique aos links para rolar dados
document.getElementById('d4Link').addEventListener('click', function(event) {
    event.preventDefault();
    rolarDados(4);
});

document.getElementById('d6Link').addEventListener('click', function(event) {
    event.preventDefault();
    rolarDados(6);
});

document.getElementById('d8Link').addEventListener('click', function(event) {
    event.preventDefault();
    rolarDados(8);
});

document.getElementById('d10Link').addEventListener('click', function(event) {
    event.preventDefault();
    rolarDados(10);
});

document.getElementById('d12Link').addEventListener('click', function(event) {
    event.preventDefault();
    rolarDados(12);
});

document.getElementById('d20Link').addEventListener('click', function(event) {
    event.preventDefault();
    rolarDados(20);
});

document.getElementById('d100Link').addEventListener('click', function(event) {
    event.preventDefault();
    rolarDados(100);
});