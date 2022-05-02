//HIDE MENU WHEN SCROLLING DOWN
let previousScrollPosition = window.pageYOffset;

window.onscroll = function () {
  var currentScrollPosition = window.pageYOffset;
  if (previousScrollPosition > currentScrollPosition) {
    document.querySelector(
      '.navbar'
    ).style.top = '0';
  } else {
    document.querySelector(
      '.navbar'
    ).style.top = '-100px';
  }
  previousScrollPosition = currentScrollPosition;
};

//BTN O NAMA

const btnOnama = document.querySelector('.btn.w-50');
let oNamaVise = document.querySelector('.onama-vise');
let oNamaP = document.querySelector('.onama-p');

btnOnama.addEventListener('click', function () {
  console.log('clicked');
  if (oNamaVise.classList.contains('hidden')) {
    oNamaVise.classList.remove('hidden');
    oNamaP.classList.add('hidden');
    if ((btnOnama.textContent = 'Više o nama')) {
      btnOnama.textContent = 'Manje';
    }
  } else {
    oNamaVise.classList.add('hidden');
    oNamaP.classList.remove('hidden');
    if ((btnOnama.textContent = 'Manje')) {
      btnOnama.textContent = 'Više o nama';
    }
  }
});

//FORM

const btnSubmit = document.querySelector('.submit-button');
let email = document.querySelector('#mail');

btnSubmit.addEventListener('click', () => {
  if(email != NULL)
    alert("Poruka poslana");
})
