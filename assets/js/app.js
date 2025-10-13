
const PROJECTS = {
  barn123: {
    title: "Барн 123 — детали проекта",
    image: "assets/img/projects/barn-123.jpg",
    html: `
      <div class="fact"><b>Стоимость</b>: от 4 670 000 ₽</div>
      <div class="fact"><b>Площадь</b>: 123 м²</div>
      <div class="fact"><b>Планировка</b>: 3 спальни, 2 санузла</div>
      <div class="fact"><b>Срок</b>: Средний срок сдачи 3 месяца</div>
      <p>Дом в стиле Барнхаус – тренд каркасного строительства. Проект сочетает стиль и удобство: 3 спальни, удобная кухня-гостиная с выходом на террасу, продуманные зоны хранения.</p>`
  },
  loft61: {
    title: "Лофт 61 — детали проекта",
    image: "assets/img/projects/loft-61.jpg",
    html: `
      <div class="fact"><b>Стоимость</b>: от 3 430 000 ₽</div>
      <div class="fact"><b>Площадь</b>: 61 м²</div>
      <div class="fact"><b>Планировка</b>: 2 спальни, 1 санузел</div>
      <div class="fact"><b>Срок</b>: Средний срок сдачи 2–3 месяца</div>
      <p>Компактный дом в стиле лофт — идеален как дача или первый дом. Теплый контур, энергоэффективные решения, максимум пользы на каждом метре.</p>`
  },
  barn145: {
    title: "Барн 145 — детали проекта",
    image: "assets/img/projects/barn-145.jpg",
    html: `
      <div class="fact"><b>Стоимость</b>: от 6 060 000 ₽</div>
      <div class="fact"><b>Площадь</b>: 145 м²</div>
      <div class="fact"><b>Планировка</b>: 4 спальни, 2 санузла</div>
      <div class="fact"><b>Срок</b>: Средний срок сдачи 3–4 месяца</div>
      <p>Просторный семейный дом: 4 спальни, большая кухня-гостиная, выход на террасу. Закладываем решения под хранение и инженерку заранее.</p>`
  },
  rait103: {
    title: "Райт 103 — детали проекта",
    image: "assets/img/projects/rait-103.jpg",
    html: `
      <div class="fact"><b>Стоимость</b>: от 4 740 000 ₽</div>
      <div class="fact"><b>Площадь</b>: 103 м²</div>
      <div class="fact"><b>Планировка</b>: 3 спальни, 1 санузел</div>
      <div class="fact"><b>Срок</b>: Средний срок сдачи 3 месяца</div>
      <p>Рациональная планировка, качественная теплоизоляция и проверенные узлы. Дом уютный и экономичный в эксплуатации.</p>`
  }
};

// Modal
const detailsBtns = document.querySelectorAll(".details-btn");
const modal = document.getElementById("detailsModal");
const modalBackdrop = document.getElementById("modalBackdrop");
const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const modalContent = document.getElementById("modalContent");
const modalClose = document.querySelector(".modal__close");

function openModal(key){
  const data = PROJECTS[key];
  if(!data) return;
  modalTitle.textContent = data.title;
  modalImage.src = data.image;
  modalContent.innerHTML = data.html;
  modal.hidden = false;
  modalBackdrop.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeModal(){
  modal.hidden = true;
  modalBackdrop.hidden = true;
  document.body.style.overflow = "";
}

detailsBtns.forEach(btn => btn.addEventListener("click", () => openModal(btn.dataset.key)));
modalBackdrop.addEventListener("click", closeModal);
modalClose.addEventListener("click", closeModal);
document.addEventListener("keydown", e => { if(e.key === "Escape") closeModal(); });

// Carousel
document.querySelectorAll("[data-carousel]").forEach(carousel => {
  const track = carousel.querySelector(".carousel__track");
  const btnPrev = carousel.querySelector(".prev");
  const btnNext = carousel.querySelector(".next");
  const step = 320;
  btnPrev.addEventListener("click", () => track.scrollBy({left:-step, behavior:"smooth"}));
  btnNext.addEventListener("click", () => track.scrollBy({left: step, behavior:"smooth"}));
});

// Form CTA routing
document.getElementById("leadForm").addEventListener("submit", function(e){
  e.preventDefault();
  const form = e.currentTarget;
  const name = form.name.value.trim() || "Клиент";
  const way = form.contact_way.value;
  const text = encodeURIComponent(`Здравствуйте! Меня зовут ${name}. Хочу получить сметы на каркасный дом.`);

  if(way === "call"){
    window.location.href = `tel:+79334191597`;
  } else if(way === "tg"){
    window.open(`https://t.me/brigadress`, "_blank");
  } else if(way === "wa"){
    window.open(`https://wa.me/79334191597?text=${text}`, "_blank");
  }
  alert("Спасибо! Мы свяжемся с вами в ближайшее время.");
});
