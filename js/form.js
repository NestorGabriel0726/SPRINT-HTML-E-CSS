
//class contato

class contato {
    constructor(nome, email, telefone, contato, mensagem) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.contato = contato;
        this.mensagem = mensagem;
    }
}

function Post(form) {

    event.preventDefault();

  let data = new contato(form.elements.namedItem("nome").value,
            form.elements.namedItem("email").value, 
            form.elements.namedItem("telefone").value, 
            form.elements.namedItem("contato").value, 
            form.elements.namedItem("mensagem").value);  

            console.log(data);

            form.reset();
}


function Enviar() {

    var nome = document.getElementById("nome");

    if (nome.value != "") {
        // Exibindo a caixa de mensagem
        var modal = document.getElementById("customAlert");
        var modalMessage = document.getElementById("modalMessage");

        modalMessage.innerHTML = 'Obrigado sr(a) <strong>' + nome.value + '</strong> os seus dados foram encaminhados com sucesso!'
        modal.style.display = "flex";
    }

}

function fecharModal() {
    document.getElementById("customAlert").style.display = "none";
}