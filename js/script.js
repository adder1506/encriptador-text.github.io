'use strict';

const encryptarBtn = document.querySelector('#encryptar');
const desencryptarBtn = document.querySelector('#desencryptar');
const copytBtn = document.querySelector('#copy');
const inputText = document.querySelector('.input-container textarea');
const outputText = document.querySelector('.output-container textarea');

function changeUI() {
  Array.from(outputText.closest('div').children).forEach(el => el.classList.add('hidden'));

  outputText.classList.remove('hidden');
  copytBtn.classList.remove('hidden');
  outputText.scrollIntoView();
}

function copyText() {
  this.select();
  this.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(this.value);
}

function encryptar() {
  const text = this.value.trim().toLowerCase();

  if (!text) return;

  changeUI();

  const encryptarText = text
    .split('')
    .map(cha => {
      if (cha === 'a') return 'ai';
      if (cha === 'e') return 'enter';
      if (cha === 'i') return 'imes';
      if (cha === 'o') return 'ober';
      if (cha === 'u') return 'ufat';
      return cha;
    })
    .join('');

  outputText.value = encryptarText;
}

function desencryptar() {

  const text = this.value.trim().toLowerCase();


  if (!text) return;

  changeUI();

  const desencryptarText = text
    .replaceAll('ai', 'a')
    .replaceAll('enter', 'e')
    .replaceAll('imes', 'i')
    .replaceAll('ober', 'o')
    .replaceAll('ufat', 'u');

  outputText.value = desencryptarText;
}


encryptarBtn.addEventListener('click', encryptar.bind(inputText));
desencryptarBtn.addEventListener('click', desencryptar.bind(inputText));
copytBtn.addEventListener('click', copyText.bind(outputText));
