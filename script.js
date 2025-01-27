

// Map-area 
document.querySelectorAll('.region').forEach(button => {
    button.addEventListener('click', () => {
        const region = button.classList[1]; // Obtém a classe da região
        alert(`Você clicou na região: ${region}`);
        // Aqui você pode redirecionar ou realizar outras ações
    });
});