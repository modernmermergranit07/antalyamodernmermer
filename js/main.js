(function () {
  var nav = document.getElementById("site-nav");
  var toggle = document.querySelector(".nav-toggle");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.style.overflow = open ? "hidden" : "";
      var icon = toggle.querySelector(".material-symbols-outlined");
      if (icon) icon.textContent = open ? "close" : "menu";
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
        var icon = toggle.querySelector(".material-symbols-outlined");
        if (icon) icon.textContent = "menu";
      });
    });
  }

  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  document.querySelectorAll("[data-whatsapp-form]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var data = new FormData(form);
      var name = (data.get("ad") || "").toString().trim();
      var phone = (data.get("telefon") || "").toString().trim();
      var ilce = (data.get("ilce") || "").toString().trim();
      var hizmet = (data.get("hizmet") || "").toString().trim();
      var mesaj = (data.get("mesaj") || "").toString().trim();
      var text = [
        "Merhaba, Antalya Modern Mermer sitesinden yaziyorum.",
        "Ad: " + name,
        "Telefon: " + phone,
        ilce ? "Ilce: " + ilce : "",
        hizmet ? "Hizmet: " + hizmet : "",
        mesaj ? "Not: " + mesaj : ""
      ].filter(Boolean).join("\n");
      window.open("https://wa.me/905333171146?text=" + encodeURIComponent(text), "_blank", "noopener");
    });
  });
})();
