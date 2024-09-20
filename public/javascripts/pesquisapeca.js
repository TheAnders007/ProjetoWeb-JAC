async function search() {
    const searchTerm = document.getElementById('campo_pesquisa').value;
    if (!searchTerm) return;

    try {
        const response = await fetch(`/search?term=${searchTerm}`);
        
        const contentType = response.headers.get('content-type');
        console.log('Content-Type:', contentType);

        if (contentType && contentType.includes('application/json')) {
            const data = await response.json();
            
            const filteredData = data.filter(item => item.nome.includes(searchTerm));

            // Gera a tabela com os resultados
            let html = '<table><thead><tr><th>Nome da Peça</th><th>Ano</th><th>Página da Peça</th></tr></thead><tbody>';
            filteredData.forEach(item => {
                html += `
                    <tr>
                        <td>${item.nome}</td>
                        <td>${item.ano}</td>
                        <td><a href="${item.caminho}">Acesse aqui!</a></td>
                    </tr>
                `;
            });
            html += '</tbody></table>';

            document.getElementById('resultados').innerHTML = html;
        } else {
            console.error('Resposta não é JSON. Tipo de conteúdo:', contentType);
        }
    } catch (error) {
        console.error('Erro na pesquisa:', error);
    }
}