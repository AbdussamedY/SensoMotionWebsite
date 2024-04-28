function copyText(element) {
    navigator.clipboard.writeText(element.innerText)
        .then(() => {
            const tooltip = element.querySelector('.infobulle');
            tooltip.style.display = 'block';  // Afficher l'infobulle
            setTimeout(() => {
                tooltip.style.display = 'none';  // Masquer après 2 secondes
            }, 2000);
        })
        .catch(err => {
            console.error("Erreur lors de la copie :", err);
        });
}