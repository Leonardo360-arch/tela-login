const senha = document.querySelector('input[type="password"]');
const olho = document.querySelector('.bxs-lock-alt');

olho.addEventListener('click', () => {

    if (senha.type === 'password') {
        senha.type = 'text';
        olho.classList.replace('bxs-lock-alt', 'bxs-lock-open-alt');
    } else {
        senha.type = 'password';
        olho.classList.replace('bxs-lock-open-alt', 'bxs-lock-alt');
    }

});