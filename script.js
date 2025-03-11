// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', () => {
    // Animation d'apparition des éléments
    const elements = document.querySelectorAll('.intro, .about, .gallery, form');
    elements.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(20px)';
        setTimeout(() => {
            el.style.transition = 'opacity 1s, transform 1s';
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
        }, 300);
    });

    // Création du modal
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
        <div class="modal-content">
            <img src="" alt="" id="modal-img">
            <div class="modal-description">
                <span class="close">&times;</span>
                <h2 id="modal-title"></h2>
                <p id="modal-text"></p>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalText = document.getElementById('modal-text');
    const closeModal = document.querySelector('.close');

    // Liste des descriptions basées sur les classes CSS
        const descriptions = {
            "make-nat-face-1n": "Un maquillage naturel mettant en valeur la lumière du visage.",

            "make-nat-right-1n": "Un maquillage artistique inspiré des couleurs vives et des textures audacieuses.",
            
            "make-art-face-1r": "Un maquillage de soirée glamour avec des touches scintillantes et un rouge à lèvres intense.",
            
            "make-art-right-1r": "Un maquillage de soirée glamour avec des touches scintillantes et un rouge à lèvres intense.",
            
            "make-art-left-1r": "Un maquillage de soirée glamour avec des touches scintillantes et un rouge à lèvres intense.",
            
            "make-soireeR-face-1": "Un maquillage de soirée glamour avec des touches scintillantes et un rouge à lèvres intense.",
            
            "make-soireeR-left-1": "Un maquillage de soirée glamour avec des touches scintillantes et un rouge à lèvres intense.",
            
            "make-nat-face-2b": "Un maquillage de soirée glamour avec des touches scintillantes et un rouge à lèvres intense.",
            
            "make-nat-right-2b": "Un maquillage de soirée glamour avec des touches scintillantes et un rouge à lèvres intense.",
            
            "make-art-face-2n": "Un maquillage de soirée glamour avec des touches scintillantes et un rouge à lèvres intense.",
            
            "make-art-right-2n": "Un maquillage de soirée glamour avec des touches scintillantes et un rouge à lèvres intense.",
            
            "make-art-left-2n": "Un maquillage de soirée glamour avec des touches scintillantes et un rouge à lèvres intense.",
            
            "make-nat-face-3b": "Un maquillage de soirée glamour avec des touches scintillantes et un rouge à lèvres intense.",
            
            "make-nat-right-3b": "Un maquillage de soirée glamour avec des touches scintillantes et un rouge à lèvres intense.",
            
            "make-nat-left-3b": "Un maquillage de soirée glamour avec des touches scintillantes et un rouge à lèvres intense.",
            
            "make-art-face-3brose": "Un maquillage de soirée glamour avec des touches scintillantes et un rouge à lèvres intense.",

            "make-art-profil-3brose": "Un maquillage de soirée glamour avec des touches scintillantes et un rouge à lèvres intense.",

            "make-art-left-3brose": "Un maquillage de soirée glamour avec des touches scintillantes et un rouge à lèvres intense.",

            "make-nat-face-4c": "Un maquillage de soirée glamour avec des touches scintillantes et un rouge à lèvres intense.",

            "make-nat-right-4c": "Un maquillage de soirée glamour avec des touches scintillantes et un rouge à lèvres intense.",

            "make-nat-left-4c": "Un maquillage de soirée glamour avec des touches scintillantes et un rouge à lèvres intense.",

            "make-nat-profil-4c": "Un maquillage de soirée glamour avec des touches scintillantes et un rouge à lèvres intense.",

            "make-art-face-4brouge": "Un maquillage de soirée glamour avec des touches scintillantes et un rouge à lèvres intense.",

            "make-art-profil-4brouge": "Un maquillage de soirée glamour avec des touches scintillantes et un rouge à lèvres intense.",

            "make-art-left-4brouge": "Un maquillage de soirée glamour avec des touches scintillantes et un rouge à lèvres intense.",

        };
    

    // Ajout du double-clic pour agrandir l'image avec description
    document.querySelectorAll('.gallery .item').forEach(item => {
        item.addEventListener('dblclick', function () {
            const img = this.querySelector('img');  // Récupère l'image
            const caption = this.querySelector('figcaption'); // Récupère la description

            if (img && caption) {
                modalImg.src = img.src;
                modalTitle.textContent = img.alt;
                 // Récupérer la première classe unique (hors classes générales comme "item" ou "naturel")
                const classList = this.classList;
                let uniqueClass = "";
                classList.forEach(cls => {
                if (!["item", "naturel", "artistique", "soirée"].includes(cls)) {
                    uniqueClass = cls;
                }
             });

                // Ajouter la description en fonction de la classe unique
                modalText.textContent = descriptions[uniqueClass] || "Aucune description disponible.";
                modal.style.display = 'flex'; 
                modalImg.classList.remove('zoomed'); 
            }
        });
    });

    // Fermer le modal en cliquant sur le bouton X
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Fermer le modal en cliquant en dehors de l'image
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
    // Zoom avec un double-clic sur l'image en grand
    modalImg.addEventListener('dblclick', () => {
        modalImg.classList.toggle('zoomed'); // Active ou désactive le zoom
    });
});

// Fonction pour filtrer la galerie
function filterGallery(category) {
    const items = document.querySelectorAll('.gallery .item');
    items.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'block';
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'scale(1)';
            }, 10);
        } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.8)';
            setTimeout(() => {
                item.style.display = 'none';
            }, 300);
        }
    });
}
