document.getElementById('notaForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const nota = document.getElementById('notaLindas').value;
    
    try {
        const response = await fetch('/api/nota/lindasdemorrer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nota })
        });

        if (!response.ok) {
            throw new Error('Falha ao enviar a nota');
        }
        
        alert('Nota enviada com sucesso!');
        document.getElementById('notaLindas').value = ''; 
    } catch (error) {
        alert('Erro: ' + error.message);
    }
});

async function atualizarMedia() {
    try {
        const response = await fetch('/api/media/lindasdemorrer');

        if (!response.ok) {
            throw new Error('Falha ao buscar a média');
        }
        
        const data = await response.json();
        document.getElementById('resultadoMedia').textContent = `${data.media.toFixed(2)}`;
    } catch (error) {
        document.getElementById('resultadoMedia').textContent = 'Erro: ' + error.message;
    }
}
window.addEventListener('load', atualizarMedia);