// ==============================
// MENU MOBILE
// ==============================

function toggleMenu() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
}

document.querySelectorAll("#nav a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("nav").classList.remove("active");
  });
});


// ==============================
// FORMULÁRIO DE ORÇAMENTO
// ENVIA DIRETAMENTE PARA O WHATSAPP
// ==============================

function sendBudget(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const business = document.getElementById("business").value;
  const phone = document.getElementById("phone").value;
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value;

  // Seu WhatsApp com código do Brasil +55
  const whatsappNumber = "5543984467448";

  const whatsappMessage =
`Olá, Maisa! 👋

Encontrei seu portfólio e gostaria de solicitar um orçamento para criação de um site.

*Nome:* ${name}
*Empresa/Negócio:* ${business || "Não informado"}
*Meu WhatsApp:* ${phone}
*Serviço:* ${service}

*Sobre o projeto:*
${message || "Gostaria de conversar sobre o projeto."}

Aguardo seu retorno!`;

  const whatsappURL =
    "https://wa.me/" +
    whatsappNumber +
    "?text=" +
    encodeURIComponent(whatsappMessage);

  document.getElementById("form-message").innerHTML =
    "Abrindo uma conversa com Maisa pelo WhatsApp...";

  window.open(whatsappURL, "_blank");
}


// ==============================
// BOTÃO FLUTUANTE
// ==============================

function goToContact() {
  document.getElementById("orcamento").scrollIntoView({
    behavior: "smooth"
  });
}


// ==============================
// CABEÇALHO AO ROLAR
// ==============================

window.addEventListener("scroll", () => {
  const header = document.getElementById("header");

  if (window.scrollY > 80) {
    header.style.position = "fixed";
    header.style.background = "rgba(17, 17, 17, 0.96)";
    header.style.backdropFilter = "blur(12px)";
    header.style.boxShadow =
      "0 5px 25px rgba(0, 0, 0, 0.15)";
  } else {
    header.style.position = "absolute";
    header.style.background = "transparent";
    header.style.backdropFilter = "none";
    header.style.boxShadow = "none";
  }
});


// ==============================
// ANIMAÇÕES AO ROLAR
// ==============================

const animatedElements = document.querySelectorAll(
  ".service-card, .project, .process-item"
);

animatedElements.forEach(element => {
  element.style.opacity = "0";
  element.style.transform = "translateY(30px)";
  element.style.transition =
    "opacity 0.7s ease, transform 0.7s ease";
});

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1
  }
);

animatedElements.forEach(element => {
  observer.observe(element);
});
