/* ========== DARKMODE ==========*/

let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('theme-switch');

const enableDarkmode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', null);
}

if(darkmode === "active") enableDarkmode()

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')
    if(darkmode !== "active"){
        enableDarkmode()
    }
    else{
        disableDarkmode()
    }
});

/* ========== MENU SANDUICHE ==========*/

const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.nav-menu'); // corrigido

navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
});

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbarToggle.classList.remove('active');
        navbarMenu.classList.remove('active');
    });
});

/* ========== CARROSSEL ==========*/

document.querySelectorAll('.slider-wrapper').forEach(wrapper => {
  const cardList = wrapper.querySelector('.card-list');
  const cards = wrapper.querySelectorAll('.card-item');
  const prevBtn = wrapper.querySelector('.prev');
  const nextBtn = wrapper.querySelector('.next');

  // Se só tiver 1 card, não duplicar e esconder botões
  if (cards.length <= 3) {
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'none';
    return; // pula o restante do código de infinite slide
  }

  let index = 0;
  const cardWidth = cards[0].offsetWidth + 20; // largura + margem
  const totalCards = cards.length;

  // Duplicar cards para efeito infinito
  cardList.innerHTML += cardList.innerHTML;

  function slideTo(newIndex) {
    index = newIndex;
    cardList.style.transition = "transform 0.4s ease-in-out";
    cardList.style.transform = `translateX(${-index * cardWidth}px)`;
  }

  // Resetar posição quando chega no fim
  cardList.addEventListener("transitionend", () => {
    if (index >= totalCards) {
      index = 0;
      cardList.style.transition = "none";
      cardList.style.transform = `translateX(0)`;
    }
    if (index < 0) {
      index = totalCards - 1;
      cardList.style.transition = "none";
      cardList.style.transform = `translateX(${-index * cardWidth}px)`;
    }
  });

  // Botões
  nextBtn.addEventListener("click", () => slideTo(index + 1));
  prevBtn.addEventListener("click", () => slideTo(index - 1));
});

/* ========== LINK CARDS =========== */

document.querySelectorAll(".message-button").forEach(button => {
  button.addEventListener("click", function() {
    window.open("https://wa.me/message/EY7UTCN7VDASD1", "_blank");
  });
});
