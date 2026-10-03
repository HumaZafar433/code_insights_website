// Show / hide password
document.querySelectorAll('.toggle-pass').forEach(function (btn) {
  btn.addEventListener('click', function () {
    const input = btn.parentElement.querySelector('input');
    const icon = btn.querySelector('i');

    if (input.type === 'password') {
      input.type = 'text';
      icon.className = 'bi bi-eye-slash';
    } else {
      input.type = 'password';
      icon.className = 'bi bi-eye';
    }
  });
});

const pass1 = document.getElementById('pass1');
const pass2 = document.getElementById('pass2');

function checkPasswordMatch() {
  if (pass2.value === pass1.value) {
    pass2.setCustomValidity('');
  } else {
    pass2.setCustomValidity('Passwords do not match');
  }
}

pass2.addEventListener('input', checkPasswordMatch);
pass1.addEventListener('input', checkPasswordMatch);

// Bootstrap validation + redirect
document.querySelectorAll('.needs-validation').forEach(function (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (form.id === 'signupForm') {
      checkPasswordMatch();
    }

    if (form.checkValidity()) {
      window.location.href = 'dashboard.html';
    } else {
      form.classList.add('was-validated');
    }
  });
});
