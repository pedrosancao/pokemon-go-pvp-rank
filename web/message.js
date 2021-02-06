const message = document.createElement('div');
message.classList.add('message', 'error');
const textContainer = message.appendChild(document.createElement('span'));
const close = message.appendChild(document.createElement('button'));
close.setAttribute('type', 'button');
close.innerHTML = '&times;';
document.body.insertBefore(message, document.body.firstElementChild);

export function showMessage(text) {
  textContainer.textContent = text;
  message.classList.remove('hidden');
}

export function hideMessage() {
  message.classList.add('hidden');
}

close.addEventListener('click', hideMessage);
hideMessage();
