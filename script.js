document.addEventListener('DOMContentLoaded', function () {
  var button = document.getElementById('get-started');
  var messageContainer = document.getElementById('message');
  var fadeTimeout = null;

  if (!button || !messageContainer) return;

  function showSuccessMessage() {
    if (fadeTimeout) {
      clearTimeout(fadeTimeout);
      fadeTimeout = null;
    }

    messageContainer.textContent = "Success! You’re ready to explore AI-powered productivity.";
    messageContainer.className = 'success-message';

    fadeTimeout = setTimeout(function () {
      messageContainer.classList.add('hidden');
    }, 3000);
  }

  messageContainer.addEventListener('transitionend', function (event) {
    if (event.propertyName === 'opacity' && messageContainer.classList.contains('hidden')) {
      messageContainer.textContent = '';
      messageContainer.className = '';
    }
  });

  button.addEventListener('click', showSuccessMessage);
});
