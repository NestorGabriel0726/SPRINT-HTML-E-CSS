
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
            

            // Ele sóp faz o envio para o console, caso todos os campos do formulário tenham sido preenchidos.
            
            if (formulario.checkValidity()){
                console.log(data);
            }


            form.reset();
            button_Send.disabled = true;
}

let formulario = document.querySelector('form');
let button_Send = document.getElementById("buttonSend");
var check = document.getElementById("aceite_termos");

check.addEventListener('change', () => button_Send.disabled = !check.checked);


function Enviar() {

    let formulario = document.querySelector('form'); // Criei uma variável para armazenar todos os dados do formulário.

    var nome = document.getElementById("nome");

    // A validação para verificar se todos os campos do formulário foram preenchidos.
    if (formulario.checkValidity()) {
        // Exibindo a caixa de mensagem
        var modal = document.getElementById("customAlert");
        var modalMessage = document.getElementById("modalMessage");

        modalMessage.innerHTML = 'Obrigado sr(a) <strong>' + nome.value + '</strong> os seus dados foram encaminhados com sucesso!'
        modal.style.display = "flex";

        // Se todos os campos não tiverem sido preenchidos, ele executa o bloco de código abaixo.

    } else {
        let modal_erro = document.getElementById("customAlert");
        let modal_ErroMensagem = document.getElementById("modalMessage");

        modal_ErroMensagem.innerHTML = 'Por gentileza, para fazer o envio de seus dados, além de aceitar os Termos e Condições é necessário preencher todos os campos obrigatórios!'
        modal_erro.style.display = "flex";


    }

}

function fecharModal() {
    document.getElementById("customAlert").style.display = "none";
}