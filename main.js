const buttons = document.querySelectorAll("button");
const div = document.querySelector("div");
// Precisamos de um objeto chamado utterance
const utterance = new SpeechSynthesisUtterance();
utterance.lang = "pt-BR";
utterance.rate = 2;

function speak() {
    // Objeto Global e o método "speak" irá falar alguma coisa
    /* Ferramenta recente experimental que não está disponível em todos os browsers,
    então podemos ver sua compatibilidade uilizando o "can i use" */
    speechSynthesis.speak(utterance);
}
function stopSpeak() {
    speechSynthesis.cancel();
}

function setText(event) {
    utterance.text = event.target.innerText;
}

buttons.forEach(button => {
    if(button.textContent === "Falar") {
        button.addEventListener('click', speak);
    }
    else {
        button.addEventListener('click', stopSpeak);
    }
});

div.addEventListener('input', setText);
