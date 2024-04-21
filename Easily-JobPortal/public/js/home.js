const modalRegister = document.querySelector('.modal_register');
const modalLogin = document.querySelector('.modal_login');
const crossRegister = document.getElementById('cross_register');
const crossLogin = document.getElementById('cross_login');
const recuriterBtn = document.getElementById('recruiter_btn');
const loginUser = document.getElementById('login_user');
const loginNav = document.getElementById('login_nav');

loginUser.addEventListener('click', () => {
  modalRegister.style.transform = 'translate(-50%,-60%)';
  modalRegister.style.opacity = '0';
  modalLogin.style.transform = 'translate(-50%,-50%)';
  modalLogin.style.opacity = '1';
  modalLogin.style.visibility = 'visible';
  modalRegister.style.visibility = 'hidden';
});

recuriterBtn.addEventListener('click', () => {
  modalRegister.style.transform = 'translate(-50%,-50%)';
  modalRegister.style.opacity = '1';
  modalLogin.style.visibility = 'hidden';
  modalRegister.style.visibility = 'visible';
});

crossRegister.addEventListener('click', () => {
  modalRegister.style.transform = 'translate(-50%,-60%)';
  modalRegister.style.opacity = '0';
  modalLogin.style.visibility = 'hidden';
  modalRegister.style.visibility = 'hidden';
});
crossLogin.addEventListener('click', () => {
  modalLogin.style.transform = 'translate(-50%,-70%)';
  modalLogin.style.opacity = '0';
  modalLogin.style.visibility = 'hidden';
  modalRegister.style.visibility = 'hidden';
});
