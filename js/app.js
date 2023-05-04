/* MENU NAVBAR */
let menus = document.querySelector(".navbar");
let menus_btn = document.querySelector(".menu-btn");
let close_btn = document.querySelector(".close-btn");

menus_btn.addEventListener("click", function() {
  menus.classList.add("active2");
});

close_btn.addEventListener("click", function() {
  menus.classList.remove("active2");
});




/* LEER MAS */
const readMoreLink = document.querySelector('.leer-mas')
const fullText = document.querySelector('.full-text')

readMoreLink.addEventListener('click', function() {
  if (fullText.classList.contains('hide')) {
    fullText.classList.remove('hide')
    readMoreLink.textContent = 'Ocultar'
  } else {
    fullText.classList.add('hide')
    readMoreLink.textContent = 'Leer más'
  }
})


const readMoreLink2 = document.querySelector('.leer-mas2')
const fullText2 = document.querySelector('.full-text2')

readMoreLink2.addEventListener('click', function() {
  if (fullText2.classList.contains('hide')) {
    fullText2.classList.remove('hide')
    readMoreLink2.textContent = 'Ocultar'
  } else {
    fullText2.classList.add('hide')
    readMoreLink2.textContent = 'Leer más'
  }
})

const readMoreLink1 = document.querySelector('.leer-mas1')
const fullText1 = document.querySelector('.full-text1')

readMoreLink1.addEventListener('click', function() {
  if (fullText1.classList.contains('hide')) {
    fullText1.classList.remove('hide')
    readMoreLink1.textContent = 'Ocultar'
  } else {
    fullText1.classList.add('hide')
    readMoreLink1.textContent = 'Leer más'
  }
})

const readMoreLink7 = document.querySelector('.leer-mas7')
const fullText7 = document.querySelector('.full-text7')

readMoreLink7.addEventListener('click', function() {
  if (fullText7.classList.contains('hide')) {
    fullText7.classList.remove('hide')
    readMoreLink7.textContent = 'Ocultar'
  } else {
    fullText7.classList.add('hide')
    readMoreLink7.textContent = 'Leer más'
  }
})

/* FORMULARIO CONTACTO */
function onSubmit() {
  let form = document.forms[0];
  google.script.run.submitForm(form);
  form.reset();
}