// Função do simulador que processa a lógica de impacto ambiental e de produção
function simular(tecnologia) {
    // Captura dos elementos do DOM que serão modificados
    const prodSpan = document.getElementById('val-produtividade');
    const aguaSpan = document.getElementById('val-agua');
    const impactoSpan = document.getElementById('val-impacto');
    const feedbackText = document.getElementById('mensagem-feedback');

    // Estrutura de decisão (Condicional) para avaliar a escolha do usuário
    if (tecnologia === 'tradicional') {
        prodSpan.innerText = "45%";
        aguaSpan.innerText = "100%";
        impactoSpan.innerText = "Alto";
        impactoSpan.style.color = "#d32f2f"; // Vermelho

        feedbackText.innerText = "Alerta: O uso de métodos tradicionais consome mais recursos hídricos e degrada o solo com mais rapidez, reduzindo o potencial sustentável a longo prazo.";
    
    } else if (tecnologia === 'drones') {
        prodSpan.innerText = "75%";
        aguaSpan.innerText = "60%";
        impactoSpan.innerText = "Baixo";
        impactoSpan.style.color = "#2e7d32"; // Verde

        feedbackText.innerText = "Excelente escolha! Drones identificam áreas exatas que precisam de água. Economia de 40% nos recursos hídricos e aumento significativo na saúde da plantação.";
    
    } else if (tecnologia === 'ia') {
        prodSpan.innerText = "95%";
        aguaSpan.innerText = "50%";
        impactoSpan.innerText = "Mínimo Sustentável";
        impactoSpan.style.color = "#1565c0"; // Azul

        feedbackText.innerText = "Sucesso Total! A Inteligência Artificial cruzou dados de clima e solo. O desperdício foi reduzido quase a zero e a fazenda alcançou o equilíbrio perfeito entre produção e meio ambiente!";
    }
}
