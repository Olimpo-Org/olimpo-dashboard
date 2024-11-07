// Ao carregar a página, verifica se o modo escuro está ativo no localStorage
window.addEventListener("DOMContentLoaded", function() {
    const logo = document.getElementById("logo");
    const modo = document.getElementById("modoEscuro");

    if (localStorage.getItem("dark-mode") === "true") {
        // Se o modo escuro está ativo no localStorage, adiciona o CSS do modo escuro
        const link = document.createElement("link");
        link.id = "dark-mode-stylesheet";
        link.rel = "stylesheet";
        link.href = "https://olimpo-dashboard.onrender.com/SiteOlimpo/areaRestrita/dark-mode.css";
        document.head.appendChild(link);

        // Altera a logo para a versão do modo escuro
        logo.src = "https://olimpo-dashboard.onrender.com/SiteOlimpo/imagens/LogoFundoAzul.png";
        
        // Altera o modo para o botao do modo para o solzinho
        modo.src = "https://olimpo-dashboard.onrender.com/SiteOlimpo/imagens/light_mode.png";
        
    }
});

// Alterna o modo escuro ao clicar no botão
document.getElementById("modoEscuro").addEventListener("click", function() {
    const darkModeStylesheet = document.getElementById("dark-mode-stylesheet");
    const logo = document.getElementById("logo");
    const modo = document.getElementById("modoEscuro");

    if (darkModeStylesheet) {
        // Se o modo escuro já está ativado, remove o CSS do modo escuro
        darkModeStylesheet.remove();
        localStorage.removeItem("dark-mode");

        // Altera a logo para a versão do modo claro
        logo.src = "https://olimpo-dashboard.onrender.com/SiteOlimpo/imagens/LogoFundoBranco.png";

        // Altera o modo para o botao do modo para a luazinha
        modo.src = "https://olimpo-dashboard.onrender.com/SiteOlimpo/imagens/dark_mode.png";
    } else {
        // Caso contrário, cria e adiciona o CSS do modo escuro
        const link = document.createElement("link");
        link.id = "dark-mode-stylesheet";
        link.rel = "stylesheet";
        link.href = "dark-mode.css";
        document.head.appendChild(link);

        // Altera a logo para a versão do modo escuro
        logo.src = "https://olimpo-dashboard.onrender.com/SiteOlimpo/imagens/LogoFundoAzul.png";

        // Altera o modo para o botao do modo para o solzinho
        modo.src = "https://olimpo-dashboard.onrender.com/SiteOlimpo/imagens/light_mode.png";

        // Armazena a preferência do modo escuro no localStorage
        localStorage.setItem("dark-mode", "true");
    }
});
