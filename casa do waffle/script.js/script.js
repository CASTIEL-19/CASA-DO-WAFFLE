// BOTÕES DE COMPRA FUNCIONAIS
document.querySelectorAll('.btn-comprar').forEach(btn => {
    btn.addEventListener('click', function() {
        const item = this.getAttribute('data-item');
        const price = this.parentElement.querySelector('.price').textContent;
        
        // Feedback visual
        this.innerHTML = '<i class="fas fa-check"></i> Adicionado!';
        this.classList.add('btn-success');
        
        // Aqui você pode adicionar a lógica do carrinho
        console.log(`Item: ${item} | Preço: ${price}`);
        
        // Reset após 2 segundos
        setTimeout(() => {
            this.innerHTML = 'Comprar';
            this.classList.remove('btn-success');
        }, 2000);
    });
});