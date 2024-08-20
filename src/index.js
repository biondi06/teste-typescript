"use strict";
// Obtém o formulário de contato pelo ID
const form = document.getElementById('contact-form');
if (form) {
    // Adiciona um ouvinte de evento para o envio do formulário
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o envio padrão do formulário
        // Redireciona para a página de agradecimento
        window.location.href = 'thank-you.html';
    });
}
