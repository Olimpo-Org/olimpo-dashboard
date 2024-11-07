const entrar = document.getElementById("btnEntrar");

function addError (mensagem){
    const error = document.getElementById("error")
    if(error) {
        error.remove()
    }
    const form = document.getElementById("formulario")
    const mensagemError = document.createElement("p")
    mensagemError.id = "error"
    mensagemError.classList.add("error")
    mensagemError.innerText = mensagem
    form.appendChild(mensagemError)
}

entrar.addEventListener("click", (event) => {
    event.preventDefault();
    const email = document.getElementById("nome");
    const senha = document.getElementById("senha");
    const user = {
        "username": nome.value,
        "password": senha.value
    }
    
    console.log(user)

    
    fetch("https://olimpoapi.onrender.com/v1/admin/verify", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(user),
    }).then((result) => {
        if(result.status == 200){
            window.location.href = ("../areaRestrita/index.html")
        } else {
            if(result.status == 404) {
                addError("Usuário não encontrado!")
            } else if(result.status == 400) {
                nome.classList.add("bordasVermelhas")  
                senha.classList.add("bordasVermelhas")
                addError("Usuário ou senha incorretos")
            }
        }
    })
})

document.getElementById('nome').addEventListener('input', function(event) {
    // Expressão regular para permitir apenas letras, números e espaços
    const regex = /^[a-zA-Z0-9\s]*$/;

    // Verifica se o valor do campo "nome" contém caracteres especiais
    if (!regex.test(event.target.value)) {
        // Remove o último caractere digitado, que é inválido
        event.target.value = event.target.value.slice(0, -1);

        // Adiciona uma borda vermelha ao campo "nome"
        event.target.classList.add('bordasVermelhas');

        // Adiciona a mensagem de erro ao campo "nome"
        addError("O nome deve conter apenas letras, números e espaços.");
    }
});