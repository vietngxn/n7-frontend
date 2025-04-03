document.addEventListener('DOMContentLoaded', function() {
    const customerId = localStorage.getItem('customerId');
    const registerBtn = document.getElementById('register-btn');
    const buyBtn = document.getElementById('buy-btn');
    const infoBtn = document.getElementById('info-btn');
    if (customerId) {
      registerBtn.href = 'frontend/pages/main.html';
      buyBtn.href = 'frontend/pages/main.html';

    } else {
      registerBtn.href = 'frontend/pages/register.html';
      buyBtn.href = 'frontend/pages/register.html';
    }
  });
