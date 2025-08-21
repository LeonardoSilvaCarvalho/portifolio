document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a");
    const sections = document.querySelectorAll("section");
    const downloadBtn = document.getElementById("download-cv");

    // Navegação entre seções
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetSection = document.querySelector(this.getAttribute("href"));
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: "smooth"
            });

            navLinks.forEach(nav => nav.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // Função de download de currículo
    downloadBtn.addEventListener("click", function () {
        const link = document.createElement("a");
        link.href = "assents/curriculo/Curriculo_novo.docx";  // Substitua pelo caminho correto do seu arquivo de currículo
        link.download = "Curriculo_leonardo.docx";
        link.click();
    });
});

//menu responsivo
document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('nav').classList.toggle('active');
});

// Função para abrir a imagem em um modal
document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const captionText = document.getElementById("caption");
    const closeModal = document.getElementsByClassName("close")[0];

    document.querySelectorAll('.education-card img').forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        });
    });

    closeModal.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

// Função para rolar a página até o topo
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
// Mostrar ou ocultar o botão conforme o scroll
window.onscroll = function () {
    var backToTopButton = document.getElementById('back-to-top');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};