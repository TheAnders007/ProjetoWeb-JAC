document.getElementById('notaForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const nota = document.getElementById('notaAmorteSalva').value;
    
    try {
        const response = await fetch('/api/nota/amortesalva', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nota })
        });

        if (!response.ok) {
            throw new Error('Falha ao enviar a nota! Verifique se está logado.');
        }
        
        alert('Nota enviada com sucesso!');
        document.getElementById('notaAmorteSalva').value = ''; 
    } catch (error) {
        alert('Erro: ' + error.message);
    }
});

async function atualizarMedia() {
    try {
        const response = await fetch('/api/media/amortesalva');

        if (!response.ok) {
            throw new Error('Falha ao buscar a média');
        }
        
        const data = await response.json();
        document.getElementById('resultadoMedia').textContent = `${data.media.toFixed(2)}`;
    } catch (error) {
        document.getElementById('resultadoMedia').textContent = 'Erro: ' + error.message;
    }
}

// Atualiza a média quando a página é carregada
window.addEventListener('load', atualizarMedia);