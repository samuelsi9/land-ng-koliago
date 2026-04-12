// console.log("Hello word");
// const myName="Deogracias wampoyi oleko";
// const h1=document.querySelector(".heading-primary");
// console.log(myName);
// console.log(h1);

//  h1.textContent=myName;
//  h1.style.backgroundColor="red";
// h1.style.padding= "5rem";


// Make year updating each year (footer may omit .year)
const yearEL = document.querySelector(".year");
if (yearEL) {
  yearEL.textContent = new Date().getFullYear();
}

// Make mobile navigation work
const btnNav = document.querySelector(".btn-mobile-nav");
const headerEL = document.querySelector(".header");
if (btnNav && headerEL) {
  btnNav.addEventListener("click", function () {
    headerEL.classList.toggle("nav-open");
  });
}
// Android APK download modal (Google Play badges)
const androidModal = document.querySelector(".android-modal");

function openAndroidModal() {
  if (!androidModal) return;
  androidModal.classList.add("android-modal--open");
  androidModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeAndroidModal() {
  if (!androidModal) return;
  androidModal.classList.remove("android-modal--open");
  androidModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.querySelectorAll(".js-android-modal-close").forEach(function (el) {
  el.addEventListener("click", function () {
    closeAndroidModal();
  });
});

document.addEventListener("keydown", function (e) {
  if (
    e.key === "Escape" &&
    androidModal &&
    androidModal.classList.contains("android-modal--open")
  ) {
    closeAndroidModal();
  }
});

// smooth scrolling animation
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    const href = link.getAttribute("href");
    if (href && (href.startsWith("http://") || href.startsWith("https://"))) {
      return;
    }
    if (link.classList.contains("js-android-download-zip")) {
      return;
    }
    if (link.classList.contains("js-android-download-modal")) {
      e.preventDefault();
      openAndroidModal();
      if (headerEL) headerEL.classList.remove("nav-open");
      return;
    }
    e.preventDefault();
    // scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    // scroll to others link
    if (href && href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      if (sectionEl) sectionEl.scrollIntoView({ behavior: "smooth" });
    }
    //close mobile naviigation
    if (link.classList.contains("main-nav-link"))
      headerEL.classList.toggle("nav-open");
  });
});
// sticky navigation
const setctionHeroEL = document.querySelector(".section-hero");
if (setctionHeroEL) {
  const obs = new IntersectionObserver(
    function (entries) {
      const ent = entries[0];
      if (ent.isIntersecting === false) document.body.classList.add("sticky");
      if (ent.isIntersecting === true) document.body.classList.remove("sticky");
    },
    {
      root: null,
      threshold: 0,
      rootMargin: "-80px",
    }
  );
  obs.observe(setctionHeroEL);
}

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
