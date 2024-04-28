// function copyToClipboard(text, tooltipId) {
//     navigator.clipboard.writeText(text).then(function() {
//         const tooltip = document.getElementById(tooltipId); // Obtenir la référence par ID
//         tooltip.classList.add("visible"); // Rendre la bulle visible

//         // Masquer la bulle après 2 secondes
//         setTimeout(() => {
//             tooltip.classList.remove("visible");
//         }, 2000);
//     }, function(err) {
//         console.error("Erreur lors de la copie au presse-papiers : ", err);
//     });
// }
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