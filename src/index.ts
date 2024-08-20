// Função para exibir mensagens de erro
function showError(message: string): void {
  const errorContainer = document.querySelector('.error-message') as HTMLElement;
  if (errorContainer) {
      errorContainer.textContent = message;
      errorContainer.classList.add('visible');
  }
}

// Função para ocultar mensagens de erro
function hideError(): void {
  const errorContainer = document.querySelector('.error-message') as HTMLElement;
  if (errorContainer) {
      errorContainer.textContent = '';
      errorContainer.classList.remove('visible');
  }
}

// Função para validar os dados do formulário
function validateForm(name: string, email: string, date: string, time: string, service: string): boolean {
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
  const form = document.getElementById('appointment-form') as HTMLFormElement;

  if (form) {
      form.addEventListener('submit', (event: Event) => {
          event.preventDefault(); // Impede o envio padrão do formulário

          // Obtém os valores dos campos do formulário
          const name = (document.getElementById('name') as HTMLInputElement).value;
          const email = (document.getElementById('email') as HTMLInputElement).value;
          const date = (document.getElementById('date') as HTMLInputElement).value;
          const time = (document.getElementById('time') as HTMLInputElement).value;
          const service = (document.getElementById('service') as HTMLSelectElement).value;
          const notes = (document.getElementById('notes') as HTMLTextAreaElement).value;

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
