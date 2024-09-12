document.addEventListener('DOMContentLoaded', async () => { 
    try {
        const response = await fetch('/user');
        if (response.ok) {
            const { username } = await response.json();
            const greetingElement = document.getElementById('boas-vindas');
            if (greetingElement) {
                greetingElement.textContent = `Olá, ${username}! Venha saber mais sobre as peças clicando no menu da esquerda!`;
            }
        } else {
            console.error('Não foi possível obter o nome do usuário');
        }
    } catch (error) {
        console.error('Erro ao obter o nome do usuário:', error);
    }
});
