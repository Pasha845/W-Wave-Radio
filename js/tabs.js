document.addEventListener('DOMContentLoaded', function () {
  $( ".guests__accordeon" ).accordion({
      collapsible: true,
      active: 0,
      icons: false,
      heightStyle: 'content'
  });
  document.querySelectorAll(".guests__item").forEach(function(t) {
      t.addEventListener("click",function(t) {
          const e=t.currentTarget.dataset.path;
          
          document.querySelectorAll(".guests__content").forEach(function(t) {
              t.classList.remove("guests__content-active")}),
          
          document.querySelector(`[data-target="${e}"]`).classList.add("guests__content-active")
      })
  })
})
