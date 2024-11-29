document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function() {
        alert(`Você clicou no link para: ${this.textContent}`);
    });
});
