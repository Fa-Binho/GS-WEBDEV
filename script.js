let habilidades = [];

// Função: adicionarHabilidade()

function adicionarHabilidade() {
    const select = document.getElementById("habilidadeSelect");
    const valor = select.value;
    const listaDiv = document.getElementById("habilidadesLista");

    if (!valor) {
        listaDiv.innerHTML = "Selecione uma habilidade antes de adicionar.";
        return;
    }

    // Evitar habilidades repetidas
    if (habilidades.includes(valor)) {
        listaDiv.innerHTML = "Essa habilidade já foi adicionada.";
        return;
    }

    habilidades.push(valor);
    atualizarListaHabilidades();
}

// Atualiza visualmente a lista de habilidades na área de lista
function atualizarListaHabilidades() {
    const listaDiv = document.getElementById("habilidadesLista");

    if (habilidades.length === 0) {
        listaDiv.innerHTML = "Nenhuma habilidade adicionada ainda.";
        return;
    }

    let html = "<ul>";
    for (let i = 0; i < habilidades.length; i++) {
        html += "<li>" + habilidades[i] + "</li>";
    }
    html += "</ul>";

    listaDiv.innerHTML = html;
}

// Função: checarEmail(valor)

function checarEmail(valor) {
    // Normaliza: remove espaços e converte para minúsculo
    const email = valor.trim().toLowerCase();
    const resultado = {
        valido: true,
        mensagem: "",
        valorNormalizado: email
    };

    // Regras simples: tamanho mínimo, presença de @ e domínio
    if (email.length < 5 || !email.includes("@")) {
        resultado.valido = false;
        resultado.mensagem = "E-mail inválido: deve conter '@' e ter tamanho mínimo.";
        return resultado;
    }

    if (!email.includes(".")) {
        resultado.valido = false;
        resultado.mensagem = "E-mail inválido: deve conter um domínio válido (ex: .com).";
        return resultado;
    }

    return resultado;
}

// Função: checarCPF(valor)

function checarCPF(valor) {
    // Remove tudo que não for número (manipulação de string)
    const somenteNumeros = valor.replace(/\D/g, "");
    const resultado = {
        valido: true,
        mensagem: "",
        valorNormalizado: somenteNumeros
    };

    if (somenteNumeros.length !== 11) {
        resultado.valido = false;
        resultado.mensagem = "CPF inválido: deve conter 11 dígitos.";
        return resultado;
    }

    return resultado;
}

// Função: exibirFeedback(vetorErros)
function exibirFeedback(vetorErros, resumoDados) {
    const feedbackDiv = document.getElementById("feedback");

    if (vetorErros.length > 0) {
        // Exibe erros
        let html = "<h3>Corrija os seguintes campos:</h3><ul>";
        for (let i = 0; i < vetorErros.length; i++) {
            html += "<li>" + vetorErros[i] + "</li>";
        }
        html += "</ul>";

        feedbackDiv.className = "feedback erro";
        feedbackDiv.innerHTML = html;
    } else {
        // Exibe resumo de sucesso
        let html = "<h3>Inscrição realizada com sucesso!</h3>";
        html += "<p><strong>Nome:</strong> " + resumoDados.nome + "</p>";
        html += "<p><strong>CPF:</strong> " + resumoDados.cpf + "</p>";
        html += "<p><strong>E-mail:</strong> " + resumoDados.email + "</p>";
        html += "<p><strong>Tipo de Interesse:</strong> " + resumoDados.interesse + "</p>";
        html += "<p><strong>Habilidades informadas:</strong></p>";
        html += "<ul>";
        for (let i = 0; i < resumoDados.habilidades.length; i++) {
            html += "<li>" + resumoDados.habilidades[i] + "</li>";
        }
        html += "</ul>";
        html += "<p>Em breve, a IA da plataforma IMMERSE irá sugerir uma trilha personalizada de requalificação para você.</p>";

        feedbackDiv.className = "feedback sucesso";
        feedbackDiv.innerHTML = html;

        // NÃO é obrigatório, mas se quiser pode limpar o formulário:
        // document.getElementById("formImmerse").reset();
        // habilidades = [];
        // atualizarListaHabilidades();
    }
}

// --------------------------------
// Função principal: validarFormulario()
// --------------------------------
function validarFormulario() {
    const erros = []; // vetor de erros (como pedido no enunciado)

    // Leitura dos dados via DOM (getElementById)
    const nome = document.getElementById("nomeCompleto").value.trim();
    const cpfBruto = document.getElementById("cpf").value;
    const emailBruto = document.getElementById("email").value;
    const interesse = document.getElementById("interesseSelect").value;

    // Validação do nome
    if (nome.length < 3) {
        erros.push("O nome completo deve ter pelo menos 3 caracteres.");
    }

    // Validação do CPF usando função dedicada
    const resultadoCPF = checarCPF(cpfBruto);
    if (!resultadoCPF.valido) {
        erros.push(resultadoCPF.mensagem);
    }

    // Validação do e-mail usando função dedicada
    const resultadoEmail = checarEmail(emailBruto);
    if (!resultadoEmail.valido) {
        erros.push(resultadoEmail.mensagem);
    }

    // Validação do tipo de interesse
    if (!interesse) {
        erros.push("Selecione um tipo de interesse.");
    }

    // Verifica se existem pelo menos 3 habilidades no vetor
    if (habilidades.length < 3) {
        erros.push("Adicione pelo menos 3 habilidades à lista antes de enviar.");
    }

    // Monta objeto de resumo (só será usado em caso de sucesso)
    const resumo = {
        nome: nome,
        cpf: resultadoCPF.valorNormalizado || cpfBruto,
        email: resultadoEmail.valorNormalizado || emailBruto,
        interesse: interesse,
        habilidades: habilidades
    };

    // Exibe feedback na tela
    exibirFeedback(erros, resumo);
}
