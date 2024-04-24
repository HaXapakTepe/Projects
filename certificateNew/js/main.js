function addCertificate(indexCertificate) {
  const list = document.querySelector('.certificate__item-info')
  const templateCertificate = `
        <div class="certificate__item-container certificate__item-container--byself" data-index="${indexCertificate}">
            <div class="certificate__item-content">
                <div class="certificate__item-elem">
                    <div class="certificate__item-title">Номинал сертификата:</div>
                    <div class="certificate__item-priceBox" data-index="${indexCertificate}">
                        <label for="price_${indexCertificate}-1" class="label">
                            <input id="price_${indexCertificate}-1" class="label__input" type="radio" value="1000" name="form[${indexCertificate}][denomination]" checked />
                            <span class="label__inputCustom">1000 ₽</span>
                        </label>
                        <label for="price_${indexCertificate}-2" class="label">
                            <input id="price_${indexCertificate}-2" class="label__input" type="radio" value="2000" name="form[${indexCertificate}][denomination]"/>
                            <span class="label__inputCustom">2000 ₽</span>
                        </label>
                        <label for="price_${indexCertificate}-3" class="label">
                            <input id="price_${indexCertificate}-3" class="label__input" type="radio" value="5000" name="form[${indexCertificate}][denomination]"/>
                            <span class="label__inputCustom">5000 ₽</span>
                        </label>
                        <label for="price_${indexCertificate}-4" class="label">
                            <input id="price_${indexCertificate}-4" class="label__input" type="radio" value="10000" name="form[${indexCertificate}][denomination]"/>
                            <span class="label__inputCustom">10000 ₽</span>
                        </label>
                        <label for="price_${indexCertificate}-5" class="label">
                            <input id="price_${indexCertificate}-5" class="label__input" type="radio" value="15000" name="form[${indexCertificate}][denomination]"/>
                            <span class="label__inputCustom">15000 ₽</span>
                        </label>
                        <label for="price_${indexCertificate}-6" class="label">
                            <input id="price_${indexCertificate}-6" class="label__input" type="radio" value="20000" name="form[${indexCertificate}][denomination]"/>
                            <span class="label__inputCustom">20000 ₽</span>
                        </label>
                        <label for="price_${indexCertificate}-7" class="label">
                            <input id="price_${indexCertificate}-7" class="label__input" type="radio" value="30000" name="form[${indexCertificate}][denomination]"/>
                            <span class="label__inputCustom">30000 ₽</span>
                        </label>
                        <label for="price_${indexCertificate}-8" class="label">
                            <input id="price_${indexCertificate}-8" class="label__input" type="radio" value="Свой номинал" name="form[${indexCertificate}][denomination]"/>
                            <span class="label__inputCustom label__inputCustom--byself">Свой номинал</span>
                            <div class="label__modal label-modal">
                                <input type="number" class="label-modal__input" min="1000" max="999999" value="0" required>
                                <a href="" class="label-modal__close"></a>
                                <p class="label-modal__prompt">Введите сумму от 1000 до 999999 ₽</p>
                                <button type="button" class="label-modal__btn">Применить</button>
                            </div>
                        </label>
                    </div>
                </div>
                <div class="certificate__item-elem">
                    <div class="certificate__item-title">Количество:</div>
                    <div class="certificate__item-counter">
                        <button class="certificate__item-minus" type="button" data-type="minus" data-index="${indexCertificate}"></button>
                            <div class="certificate__item-amount">
                                <input class="certificate__item-num" data-index="${indexCertificate}" type="number" name="form[${indexCertificate}][count]" value="1" readonly/>сертификат
                            </div>
                        <button class="certificate__item-plus" type="button" data-type="plus" data-index="${indexCertificate}"></button>
                    </div>
                </div>
                <div class="certificate__item-elem">
                    <div class="certificate__item-title">Доставка:</div>
                    <div class="certificate__item-box certificate__item-box--mb">
                        <div class="certificate__item-where certificate__item-where--active" data-index="${indexCertificate}" data-type="email">На E-mail</div>
                        <div class="certificate__item-where" data-index="${indexCertificate}" data-type="address">На адрес</div>
                    </div>
                    <div class="certificate__item-boxInput">
                        <input
                            data-index="${indexCertificate}"
                            class="certificate__item-input certificate__item-input--where"
                            type="email"
                            name="form[${indexCertificate}][email]"
                            placeholder="E-mail получателя"
                        />
                        <input
                            data-index="${indexCertificate}"
                            class="certificate__item-input certificate__item-input--where certificate__item-input--none"
                            type="text"
                            name="form[${indexCertificate}][address]"
                            placeholder="Адрес получателя"
                        />
                    </div>
                </div>
                <div class="certificate__item-elem">
                    <div class="certificate__item-title">Отправитель:</div>
                    <input class="certificate__item-input" name="form[${indexCertificate}][from]" type="text" placeholder="Имя отправителя" required/>
                    <input class="certificate__item-input" name="form[${indexCertificate}][fromEmail]" type="text" placeholder="E-mail отправителя" required/>
                </div>
                <div class="certificate__item-elem">
                    <div class="certificate__item-title">Получатель:</div>
                    <input class="certificate__item-input" name="form[${indexCertificate}][to]" type="text" placeholder="Имя получателя" required/>
                    <input class="certificate__item-input" name="form[${indexCertificate}][phone]" type="text" placeholder="Телефон получателя" required/>
                    <textarea class="certificate__item-textarea" name="form[${indexCertificate}][message]" placeholder="Текст поздравления"></textarea>
                </div>
            </div>
            <div class="certificate__item-content">
                <div class="certificate__item-boxImage" data-index="${indexCertificate}">
                    <div class="close"></div>
                    <img class="certificate__item-image" src="../img/picture/10k.png" alt="" />
                    <div class="certificate__item-block">
                        <p class="certificate__item-titleImg">Подарочный сертификат</p>
                        <p class="certificate__item-textImg">1000</p>
                        <p class="certificate__item-titleImg">рублей</p>
                    </div>
                </div>
            </div>
        </div>
    `
  list.insertAdjacentHTML('beforeend', templateCertificate)
}

document.addEventListener('DOMContentLoaded', () => {
  let indexCertificate = 1
  const btnAddCertificate = document.querySelector('#certificateAddBtn')
  const formBySelf = document.querySelector('#by-self')
  const btnBySelf = document.querySelector('.certificate__item-btn--byself')

  btnAddCertificate.addEventListener('click', function (event) {
    event.preventDefault()
    indexCertificate++
    addCertificate(indexCertificate)
  })

  btnBySelf.addEventListener('click', function (event) {
    const modals = document.querySelectorAll('.label-modal')
    modals.forEach((modal) => modal.remove())
  })

  formBySelf.addEventListener('click', function (event) {
    event.stopPropagation()

    // Изменение способа доставки
    if (event.target.classList.contains('certificate__item-where')) {
      const index = event.target.dataset.index
      const btns = document.querySelectorAll(`.certificate__item-where[data-index='${index}']`),
        inputAddress = document.querySelector(
          `.certificate__item-input--where[data-index='${index}'][type="text"]`
        ),
        inputEmail = document.querySelector(
          `.certificate__item-input--where[data-index='${index}'][type="email"]`
        )
      btns.forEach((element) => element.classList.remove('certificate__item-where--active'))
      if (event.target.dataset.type === 'address') {
        inputEmail.classList.add('certificate__item-input--none')
        inputAddress.classList.remove('certificate__item-input--none')
      } else {
        inputEmail.classList.remove('certificate__item-input--none')
        inputAddress.classList.add('certificate__item-input--none')
      }
      event.target.classList.add('certificate__item-where--active')
    }

    // Изменение значение номинала сертификата
    if (event.target.closest('.label__inputCustom')) {
      const label = event.target.parentElement
      const index = label.parentElement.dataset.index
      if (event.target.classList.contains('label__inputCustom--byself')) {
        event.preventDefault()
        const modal = label.querySelector('.label-modal')
        modal.classList.add('label-modal--active')
      } else {
        const bySelf = document.querySelector(`.label[for="price_${index}-8"] .label__inputCustom`)
        bySelf.innerHTML = 'Свой номинал'
        const certificateValue = label.querySelector('.label__input').value
        const certificateImage = document.querySelector(
            `.certificate__item-boxImage[data-index='${index}']`
          ),
          certificateImageValue = certificateImage.querySelector('.certificate__item-textImg')
        certificateImageValue.innerHTML = certificateValue
      }
    }

    // Применение своего номинала
    if (event.target.classList.contains('label-modal__btn')) {
      const modal = event.target.parentElement,
        modalInputValue = modal.querySelector('.label-modal__input').value,
        label = modal.parentElement,
        index = label.parentElement.dataset.index,
        labelInput = label.querySelector('.label__input'),
        labelSpan = label.querySelector('.label__inputCustom')
      labelInput.value = modalInputValue
      labelInput.checked = true
      labelSpan.innerHTML = `${modalInputValue} ₽`
      const certificateImage = document.querySelector(
          `.certificate__item-boxImage[data-index='${index}']`
        ),
        certificateImageValue = certificateImage.querySelector('.certificate__item-textImg')
      certificateImageValue.innerHTML = labelInput.value
      modal.classList.remove('label-modal--active')
    }

    // Закрытие модалки
    if (event.target.classList.contains('label-modal__close')) {
      event.preventDefault()
      const modal = event.target.parentElement
      modal.classList.remove('label-modal--active')
    }

    // Изменение количества сертификатов
    if (
      event.target.classList.contains('certificate__item-minus') ||
      event.target.classList.contains('certificate__item-plus')
    ) {
      event.preventDefault()
      const index = event.target.dataset.index,
        type = event.target.dataset.type

      const input = document.querySelector(`.certificate__item-num[data-index='${index}']`),
        inputValue = Number(input.value)
      switch (type) {
        case 'minus':
          if (inputValue === 1) return
          input.value = inputValue - 1
          break
        case 'plus':
          input.value = inputValue + 1
          break
      }
    }

    // Удаление сертификата
    if (event.target.classList.contains('close')) {
      const certficates = document.querySelectorAll('.certificate__item-container--byself')
      if (certficates.length > 1) {
        const index = event.target.parentElement.dataset.index,
          certificateElement = document.querySelector(
            `.certificate__item-container[data-index='${index}']`
          )
        certificateElement.remove()
      }
    }
  })

  const targetMap = document.querySelectorAll('[data-target]'),
    map = document.querySelectorAll('.certificate__item-inner')

  targetMap.forEach((elem) => {
    elem.addEventListener('click', function (e) {
      e.preventDefault()
      const target = this.getAttribute('data-target')
      map.forEach((elem) => {
        elem.classList.remove('certificate__item-inner--opacity', 'certificate__item-inner--active')
      })
      targetMap.forEach((elem) => {
        elem.classList.remove('certificate__item-name--active')
      })
      this.classList.add('certificate__item-name--active')
      const cat = document.querySelector('[data-info="' + target + '"]')
      cat.classList.add('certificate__item-inner--active')
      setTimeout(() => {
        cat.classList.add('certificate__item-inner--opacity')
      }, 400)
    })
  })

  addCertificate(indexCertificate)
})
