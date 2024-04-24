const certificateItemInnerClone = document.querySelectorAll(".certificate__item-container--clone")
const certificateItemAdd = document.querySelector("#certificateAddBtn")

certificateItemAdd.addEventListener("click", () => {
  const certificateItemInnerClone = document.querySelectorAll(".certificate__item-container--clone")
  const lastClone = certificateItemInnerClone[certificateItemInnerClone.length - 1];
  const clonedCertificateItem = lastClone.cloneNode(true);

  lastClone.insertAdjacentHTML("afterend", '')
  const clones = document.querySelector('.certificate__item-inner');
  clones.appendChild(clonedCertificateItem);
  addFunction();
})

function addFunction() {

  const certificates = document.querySelectorAll('.certificate__item-container');
  certificates.forEach((certificate, index) => {
    if (!certificate.classList.contains('certificate__item-container--hidden')) {
      function countFunc(count) {
        var btnPlus = count.querySelector('.certificate__item-plus');
        var btnMinus = count.querySelector('.certificate__item-minus');
        var field = count.querySelector('.certificate__item-num');
        var fieldValue = parseFloat(field.value, 10);

        btnMinus.addEventListener('click', function () {
          if (fieldValue > 1) {
            fieldValue--;
            field.value = fieldValue;
          } else {
            return 1;
          }
        });
        btnPlus.addEventListener('click', function () {
          fieldValue++;
          field.value = fieldValue;
        });
      }

      var counts = document.querySelectorAll('.certificate__item-counter');
      counts.forEach(countFunc);


      var targetPrice = certificate.querySelectorAll('[data-price]'),
        boxImage = certificate.querySelectorAll('.certificate__item-boxImage');

      targetPrice.forEach(elem => {
        elem.addEventListener('click', function (e) {
          // e.preventDefault();
          var target = this.getAttribute('data-price');
          boxImage.forEach(elem => {
            elem.classList.remove('certificate__item-boxImage--opacity', 'certificate__item-boxImage--active');
          });
          targetPrice.forEach(elem => {
            elem.classList.remove('label__inputCustom--active');
          });
          this.classList.add('label__inputCustom--active');
          var cat = certificate.querySelector('[data-img="' + target + '"]');
          cat.classList.add('certificate__item-boxImage--active');
          setTimeout(() => {
            cat.classList.add('certificate__item-boxImage--opacity');
          }, 400);
        });
      });


      var targetWhere = certificate.querySelectorAll('[data-where]'),
        itemInput = certificate.querySelectorAll('.certificate__item-input');

      targetWhere.forEach(elem => {
        elem.addEventListener('click', function (e) {
          e.preventDefault();
          var target = this.getAttribute('data-where');
          itemInput.forEach(elem => {
            elem.classList.remove('certificate__item-input--opacity', 'certificate__item-input--active');
          });
          targetWhere.forEach(elem => {
            elem.classList.remove('certificate__item-where--active');
          });
          this.classList.add('certificate__item-where--active');
          var cat = certificate.querySelector('[data-input="' + target + '"]');
          cat.classList.add('certificate__item-input--active');
          setTimeout(() => {
            cat.classList.add('certificate__item-input--opacity');
          }, 400);
        });
      });

      if (index !== 0) {
        const close = certificate.querySelector(".close")

        close.addEventListener("click", () => {
          certificate.remove();
        })
      }
    }
  })
}

addFunction()

var targetMap = document.querySelectorAll('[data-target]'),
  map = document.querySelectorAll('.certificate__item-inner');

targetMap.forEach(elem => {
  elem.addEventListener('click', function (e) {
    e.preventDefault();
    var target = this.getAttribute('data-target');
    map.forEach(elem => {
      elem.classList.remove('certificate__item-inner--opacity', 'certificate__item-inner--active');
    });
    targetMap.forEach(elem => {
      elem.classList.remove('certificate__item-name--active');
    });
    this.classList.add('certificate__item-name--active');
    var cat = document.querySelector('[data-info="' + target + '"]');
    cat.classList.add('certificate__item-inner--active');
    setTimeout(() => {
      cat.classList.add('certificate__item-inner--opacity');
    }, 400);
  });
});