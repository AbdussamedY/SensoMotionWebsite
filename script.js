document.addEventListener("DOMContentLoaded", () => {
    const btnMembres = document.getElementById("show-membres");
    const btnPublications = document.getElementById("show-publications");
    const sectionMembres = document.getElementById("section-membres");
    const sectionPublications = document.getElementById("section-publications");

    btnMembres.addEventListener("click", () => {
        sectionMembres.style.display = "block"; // Afficher les membres
        sectionPublications.style.display = "none"; // Masquer les publications
    });

    btnPublications.addEventListener("click", () => {
        sectionMembres.style.display = "none"; // Masquer les membres
        sectionPublications.style.display = "block"; // Afficher les publications
    });

    const membres = document.querySelectorAll(".membre");

    membres.forEach((membre) => {
        const tooltip = document.createElement("div");
        tooltip.classList.add("tooltip");
        tooltip.style.display = "none";
        tooltip.style.position = "fixed";
        tooltip.style.backgroundColor = "#333";
        tooltip.style.color = "#fff";
        tooltip.style.padding = "5px";
        tooltip.style.borderRadius = "5px";
        tooltip.style.zIndex = "1000";

        document.body.appendChild(tooltip); // Attacher l'infobulle au body

        membre.addEventListener("mouseenter", () => {
            const info = membre.getAttribute("member-info");

            if (info) { // Vérifiez si 'info' n'est pas nul
                // Vérifiez si 'info' commence et se termine par le signe '$'
                if (info.startsWith('$') && info.endsWith('$')) {
                    tooltip.innerHTML = info; // Contenu LaTex
                    MathJax.typesetPromise([tooltip]); // Rendu LaTex
                } else {
                    tooltip.innerHTML = info; // Contenu normal
                }

                tooltip.style.display = "block"; // Afficher l'infobulle
            }
        });

        membre.addEventListener("mousemove", (event) => {
            const offset = 10;
            tooltip.style.top = `${event.clientY + offset}px`;
            tooltip.style.left = `${event.clientX + offset}px`;
        });

        membre.addEventListener("mouseleave", () => {
            tooltip.style.display = "none";
        });
    });
});
