const botaoEnviar = document.getElementById('enviar');
const mensagem = document.getElementById('texto');
const chat = document.getElementById('mensagens');

const socket = io();

botaoEnviar.addEventListener('click', () => {
    if (mensagem !== ''){
        socket.emit('nova mensagem', mensagem.value);
        mensagem.value = '';
    }
})

socket.addEventListener('nova mensagem' , (msg) => {
    const novaMensagem = document.createElement('p');
    novaMensagem.textContent = msg;
    novaMensagem.classList.add('mensagem');
    chat.appendChild(novaMensagem);
})