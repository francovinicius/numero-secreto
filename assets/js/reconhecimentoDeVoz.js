/* API de Reconhecimento de voz
        https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API
*/

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
/* Obs necessário permitir o microfone no navegador */ 
recognition.start();

recognition.addEventListener('result', onSpeak);

/* Exibir tudo que eu falo no console*/
function onSpeak (e) {
    console.log(e);
}