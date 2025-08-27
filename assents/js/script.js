// -------------------- SMOOTH SCROLLING -------------------- //
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// -------------------- NAVBAR SCROLL EFFECT -------------------- //
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    window.scrollY > 50 ?
    navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.98)' :
    navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
});

// -------------------- FORM -> WHATSAPP -------------------- //
const contactForm = document.getElementById("contact-form");

if(contactForm){
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();

        // Pega os valores
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Seu número de WhatsApp (formato internacional: 55 + DDD + número)
        const phoneNumber = "5511994957723"; 

        // Monta a mensagem
        const text = `Olá, meu nome é ${name}%0AEmail: ${email}%0AMensagem: ${message}`;

        // Gera o link do WhatsApp
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${text}`;

        // Abre no WhatsApp Web / Mobile
        window.open(whatsappURL, "_blank");
    });
}

// -------------------- MODAL CERTIFICADOS -------------------- //
const modal = document.getElementById("certificateModal");
const modalImg = document.getElementById("modalImg");
const captionText = document.getElementById("caption");
const closeBtn = document.querySelector(".modal .close");

// seleciona todas as imagens de certificados
const certImages = document.querySelectorAll(".certificates .card img");

certImages.forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = img.src;
        captionText.innerHTML = img.alt;
    });
});

// fecha modal ao clicar no X
if(closeBtn){
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });
}

// Fechar ao clicar fora da imagem
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// -------------------- EFEITO MÁQUINA DE ESCREVER -------------------- //
function typeWriterEffect(element, text, speed = 50, callback = null) {
  let i = 0;
  element.textContent = ""; // Limpa o conteúdo inicial
  element.classList.add("typewriter-cursor");

  function typing() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    } else {
      element.classList.remove("typewriter-cursor");
      if(callback) callback(); // chama quando terminar
    }
  }

  typing();
}

// Aplica em todos os elementos com data-typewriter
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll("[data-typewriter]");
  const contactButton = document.querySelector(".cta-button");

  if(contactButton) contactButton.style.display = "none"; // esconde o botão no início

  let delay = 0;
  elements.forEach((el, index) => {
    const text = el.textContent.trim();
    el.textContent = ""; // limpa antes de animar

    // Se for o último elemento, exibe o botão após o efeito
    const isLast = index === elements.length - 1;

    setTimeout(() => {
      typeWriterEffect(el, text, 50, () => {
        if(isLast && contactButton){
          setTimeout(() => {
            contactButton.style.display = "inline-block";
          }, 300); // delay leve antes de mostrar
        }
      });
    }, delay);

    delay += text.length * 50 + 500; // atraso entre blocos
  });
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
