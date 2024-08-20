const greet = (name: string): string => {
    return `Olá, ${name}!`;
  };
  
  const element = document.querySelector('h1');
  if (element) {
    element.textContent = greet('Mundo');
  }
  