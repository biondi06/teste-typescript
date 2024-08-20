"use strict";
// Função para exibir mensagens de erro
function showError(message) {
    const errorContainer = document.querySelector('.error-message');
    if (errorContainer) {
        errorContainer.textContent = message;
        errorContainer.classList.add('visible');
    }
}
// Função para ocultar mensagens de erro
function hideError() {
    const errorContainer = document.querySelector('.error-message');
    if (errorContainer) {
        errorContainer.textContent = '';
        errorContainer.classList.remove('visible');
    }
}
// Função para validar os dados do formulário
function validateForm(name, email, date, time, service) {
    if (!name || !email || !date || !time || !service) {
        showError('Todos os campos são obrigatórios.');
        return false;
    }
    // Regex para validar o formato do e-mail
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        showError('Por favor, insira um e-mail válido.');
        return false;
    }
    // Regex para validar a data
    const today = new Date().toISOString().split('T')[0];
    if (date < today) {
        showError('A data não pode ser no passado.');
        return false;
    }
    return true;
}
// Adiciona um ouvinte de evento ao formulário
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('appointment-form');
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault(); // Impede o envio padrão do formulário
            // Obtém os valores dos campos do formulário
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;
            const service = document.getElementById('service').value;
            const notes = document.getElementById('notes').value;
            // Valida o formulário
            hideError();
            if (validateForm(name, email, date, time, service)) {
                // Simula um envio bem-sucedido
                // Redireciona para a página de agradecimento
                window.location.href = 'thank-you.html';
            }
        });
    }
});
