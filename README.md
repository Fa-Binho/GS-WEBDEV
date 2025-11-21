📘 IMMERSE FutureSkills – Registro de Interesse
Global Solution – Web Development
🧠 Sobre o Projeto

O IMMERSE FutureSkills é um formulário inteligente de registro de interesse desenvolvido como parte da Global Solution da disciplina Web Development.
O projeto integra tecnologias fundamentais da web — HTML5, CSS3 e JavaScript (vanilla) — aplicadas dentro do contexto da solução interdisciplinar Plataforma IMMERSE, um ecossistema de requalificação profissional baseado em IA, VR e experiências imersivas.

Este formulário simula a primeira etapa do onboarding real da plataforma: a coleta de informações essenciais do usuário para que a IA possa montar trilhas personalizadas de aprendizado.

🚀 Objetivo do Projeto

Atender aos requisitos da Global Solution WebDev, criando:

Um formulário funcional
Com validação completa em JavaScript
Utilizando vetores (arrays) para armazenar habilidades
Manipulação de string
Manipulação do DOM
Feedback visual de erros e sucesso
Estrutura HTML semântica
JavaScript modular (funções separadas)

Ao mesmo tempo, tudo integrado ao universo narrativo da solução IMMERSE.

🧩 Funcionalidades Implementadas
🔹 1. Formulário semântico

Com campos para:

Nome completo
CPF
Email
Tipo de interesse
Seleção de habilidades
Lista dinâmica de habilidades
Botão de submissão

🔹 2. Manipulação completa do DOM
Uso de:
document.getElementById()
.innerHTML
.value

🔹 3. Validações com funções específicas
checarEmail(): Normaliza o email e confere estrutura básica.
checarCPF(): Remove caracteres especiais e valida tamanho.
validarFormulario(): Reúne todos os erros em um vetor, só exibe sucesso se tudo estiver correto.
adicionarHabilidade(): Adiciona habilidades a um vetor global e atualiza a UI.
exibirFeedback(): Mostra mensagens formatadas no DOM para erros e sucesso.

🔹 4. Uso de vetores (arrays)

Exigência do enunciado:
habilidades[]
erros[]

🔹 5. Feedback de sucesso

Exibe:
Nome normalizado
Email validado
CPF tratado
Tipo de interesse
Todas as habilidades cadastradas

E mensagem final:
“Em breve, a IA da plataforma IMMERSE irá sugerir uma trilha personalizada para você.”
🧬 Conexão com o Tema “Futuro do Trabalho”

A plataforma IMMERSE foi criada para treinar profissionais para carreiras emergentes usando:
Inteligência Artificial
Realidade Virtual
Ambientes imersivos
Gamificação
Acompanhamento emocional

O formulário desenvolvido aqui representa o primeiro passo real que um usuário daria ao entrar na plataforma — garantindo ligação direta com o storytelling final da Global Solution Interdisciplinar.

🗂 Estrutura de Pastas
/gs-webdev-immerse
│── index.html
│── style.css
│── script.js
│── README.md

👨‍💻 Tecnologias Utilizadas

HTML5
CSS3
JavaScript Puro
Flexbox
Funções JavaScript
Vetores
Manipulação do DOM
Manipulação de strings

👥 Integrantes
Nome	RM
Fábio Alexandre Barbosa Filho	567419
Igor Davi Avelar Rosa Cesário	568163

📄 Como Rodar o Projeto

Baixe o repositório
Abra o arquivo index.html em qualquer navegador
Interaja com o formulário
Confira o feedback em tempo real
Nenhuma instalação adicional é necessária.
