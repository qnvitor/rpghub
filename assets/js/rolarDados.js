function rolarDados(tipoDado) {
    const quantidade = prompt('Quantos dados você gostaria de rolar?'); // Pede ao usuário a quantidade de dados
    const resultados = [];

    // Verifica se a quantidade é válida e maior que 0
    if (quantidade && parseInt(quantidade) > 0) {
        // Rola os dados e armazena os resultados
        for (let i = 0; i < parseInt(quantidade); i++) {
            resultados.push(Math.floor(Math.random() * tipoDado) + 1);
        }

        // Exibe os resultados
        alert(`Resultado: ${resultados.join(', ')}`);
    } else {
        alert('Por favor, insira uma quantidade válida.');
    }
}

// Adicione um evento de clique para o link "Rolar Dx"
document.getElementById('d4Link').addEventListener('click', function(event) {
    event.preventDefault();
    rolarDados(4); // Chama a função para rolar dados de d4
});

document.getElementById('d6Link').addEventListener('click', function(event) {
    event.preventDefault();
    rolarDados(6); // Chama a função para rolar dados de d6
});

document.getElementById('d8Link').addEventListener('click', function(event) {
    event.preventDefault();
    rolarDados(8); // Chama a função para rolar dados de d8
});

document.getElementById('d10Link').addEventListener('click', function(event) {
    event.preventDefault();
    rolarDados(10); // Chama a função para rolar dados de d10
});

document.getElementById('d12Link').addEventListener('click', function(event) {
    event.preventDefault();
    rolarDados(12); // Chama a função para rolar dados de d12
});

document.getElementById('d20Link').addEventListener('click', function(event) {
    event.preventDefault();
    rolarDados(20); // Chama a função para rolar dados de d20
});

document.getElementById('d100Link').addEventListener('click', function(event) {
    event.preventDefault();
    rolarDados(100); // Chama a função para rolar dados de d100
});