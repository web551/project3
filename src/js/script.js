window.addEventListener("DOMContentLoaded", () => {
  let tabsBtn = document.querySelectorAll(".tabs__nav-btn");
  let tabsItems = document.querySelectorAll(".content");

  tabsBtn.forEach(onTabClick);

  function onTabClick(item) {
    item.addEventListener("click", function () {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute("data-tab");
      let currentTab = document.querySelector(tabId);

      if (!currentBtn.classList.contains("active")) {
        tabsBtn.forEach(function (item) {
          item.classList.remove("active");
        });

        tabsItems.forEach(function (item) {
          item.classList.remove("content-active");
        });

        currentBtn.classList.add("active");
        currentTab.classList.add("content-active");
      }
    });
  }

  /* ----------- Слайдер ---------- */

  let swiper = new Swiper(".swiper", {
    slidesPerView: "auto",
    spaceBetween: 26,
    loop: true,
    centeredSlides: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1100: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1220: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1320: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    },
  });

  const textForBigSliders = [
    {
      text: "Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>",
    },
  ];

  let bigImg = document.querySelector(".big-img");
  let sliderWrapper = document.querySelector(".swiper-wrapper");

  let currentId;

  sliderWrapper.addEventListener("click", function (e) {
    bigImg.classList.toggle("show");
    document.body.style = "overflow: hidden";
    if (e.srcElement.src === undefined) {
      document.querySelector(".big-img__src").src = e.target.previousElementSibling.attributes.src.value;
      currentId = JSON.parse(e.target.previousElementSibling.attributes[0].value);
    } else {
      currentId = JSON.parse(e.target.attributes[0].value);
      document.querySelector(".big-img__src").src = e.target.attributes?.src.value;
    }
    if (currentId === 2 || currentId === 3) {
      document.querySelector(".big-img__text").innerHTML = `${textForBigSliders[currentId - 1].text}`;
    }
  });

  document.querySelector(".arrow-right").addEventListener("click", function () {
    currentId = JSON.parse(currentId) + 1;
    if (currentId > 5) currentId = 1;

    let currentSrc = document.querySelector(`[data-id='${currentId}']`).attributes.src.value;
    document.querySelector(".big-img__src").src = currentSrc;
    if (currentId === 1 || currentId === 2) {
      document.querySelector(".big-img__text").classList.add("specialClass");
    } else {
      document.querySelector(".big-img__text").classList.remove("specialClass");
    }
    // document.querySelector(".big-img__text").innerHTML = `${textForBigSliders[currentId - 1].text}`;
  });

  document.querySelector(".arrow-left").addEventListener("click", function () {
    currentId = JSON.parse(currentId) - 1;
    if (currentId < 1) currentId = 5;

    let currentSrc = document.querySelector(`[data-id='${currentId}']`).attributes.src.value;
    document.querySelector(".big-img__src").src = currentSrc;

    if (currentId === 1 || currentId === 2) {
      document.querySelector(".big-img__text").classList.add("specialClass");
    } else {
      document.querySelector(".big-img__text").classList.remove("specialClass");
    }
    // document.querySelector(".big-img__text").innerHTML = `${textForBigSliders[currentId - 1].text}`;
  });

  document.querySelector(".close").addEventListener("click", function () {
    bigImg.classList.remove("show");
    document.body.style = "overflow:auto";
  });

  document.querySelector(".big-img__content").addEventListener("click", function (e) {
    if (
      e.target.classList[0] !== "big-img__text" &&
      e.target.classList[0] !== "big-img__src" &&
      e.target.classList[0] !== "arrow-right" &&
      e.target.classList[0] !== "arrow-left" &&
      e.target.classList[0] !== "big-img__arrow-wrapper"
    ) {
      bigImg.classList.remove("show");
      document.body.style = "overflow:auto";
    }
  });
});

/* ----------- Переключение табов ---------- */
