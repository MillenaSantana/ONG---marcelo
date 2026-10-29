// Interações compartilhadas pelas quatro páginas do protótipo Natalia.
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const mainNav = document.getElementById("main-nav");

  // Menu compacto para telas pequenas; funciona sem recarregar a página.
  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", function () {
      const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!isOpen));
      mainNav.classList.toggle("is-open");
      menuToggle.querySelector(".menu-icon").textContent = isOpen ? "☰" : "×";
      menuToggle.querySelector(".sr-only").textContent = isOpen ? "Abrir menu" : "Fechar menu";
    });
  }

  // Interação adicional obrigatória: revela ou oculta detalhes do apadrinhamento.
  const detailsToggle = document.getElementById("details-toggle");
  const projectDetails = document.getElementById("project-details");
  if (detailsToggle && projectDetails) {
    detailsToggle.addEventListener("click", function () {
      const isHidden = projectDetails.hasAttribute("hidden");
      if (isHidden) {
        projectDetails.removeAttribute("hidden");
        detailsToggle.setAttribute("aria-expanded", "true");
        detailsToggle.innerHTML = "Ocultar detalhes <span aria-hidden=\"true\">−</span>";
      } else {
        projectDetails.setAttribute("hidden", "");
        detailsToggle.setAttribute("aria-expanded", "false");
        detailsToggle.innerHTML = "Ver como funciona <span aria-hidden=\"true\">+</span>";
      }
    });
  }

  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    const confirmation = document.getElementById("form-confirmation");

    function showError(fieldId, message) {
      const field = document.getElementById(fieldId);
      const error = document.getElementById(fieldId + "-error");
      field.classList.add("has-error");
      field.setAttribute("aria-invalid", "true");
      error.textContent = message;
    }

    function clearError(fieldId) {
      const field = document.getElementById(fieldId);
      const error = document.getElementById(fieldId + "-error");
      field.classList.remove("has-error");
      field.removeAttribute("aria-invalid");
      error.textContent = "";
    }

    // O envio é simulado: nenhuma informação sai do navegador.
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      let hasErrors = false;
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const subject = document.getElementById("subject").value.trim();
      const message = document.getElementById("message").value.trim();
      const basicEmailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      clearError("name");
      clearError("email");
      clearError("subject");
      clearError("message");
      confirmation.hidden = true;

      if (name.length < 3) {
        showError("name", "Conte seu nome com pelo menos 3 caracteres.");
        hasErrors = true;
      }
      if (email.length === 0) {
        showError("email", "Digite seu e-mail para continuarmos.");
        hasErrors = true;
      } else if (!basicEmailPattern.test(email)) {
        showError("email", "Confira o formato do e-mail, por exemplo voce@email.com.");
        hasErrors = true;
      }
      if (subject.length === 0) {
        showError("subject", "Escolha um assunto para a sua mensagem.");
        hasErrors = true;
      }
      if (message.length < 10) {
        showError("message", "Escreva uma mensagem com pelo menos 10 caracteres.");
        hasErrors = true;
      }

      if (hasErrors) {
        const firstError = contactForm.querySelector(".has-error");
        if (firstError) {
          firstError.focus();
        }
      } else {
        confirmation.hidden = false;
        contactForm.reset();
        confirmation.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    });
  }
});
