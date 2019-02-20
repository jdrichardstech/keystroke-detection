document.addEventListener('DOMContentLoaded', () => {
  keymapper();
});

function keymapper() {
  let buffer = [];
  let lastKeyTime = Date.now();
  document.addEventListener('keydown', event => {
    const charList = 'abcdefghijklmnopqrstuvwxyz0123456789';

    let currentKeyTime = Date.now();
    let key = event.key.toLowerCase();
    if (charList.indexOf(key) === -1) {
      buffer = [];
      return;
    }

    buffer.push(key);
    console.log(buffer);
  });
}
