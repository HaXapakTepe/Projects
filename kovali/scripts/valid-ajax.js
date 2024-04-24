window.addEventListener('DOMContentLoaded', () => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

  const getCPEl = document.querySelector('#getCP')
  const getCPNameInputEl = getCPEl?.querySelector('#getCP-name-input')
  const getCPEmailInputEl = getCPEl?.querySelector('#getCP-email-input')
  const getCPCheckboxInputEl = getCPEl?.querySelector('#getCP-checkbox-input')

  const callbackEl = document.querySelector('#callback')
  const callbackNameInputEl = callbackEl?.querySelector('#callback-name-input')
  const callbackPhoneInputEl = callbackEl?.querySelector('#callback-phone-input')
  const callbackCheckboxInputEl = callbackEl?.querySelector('#callback-checkbox-input')

  const consultationEl = document.querySelector('#consultation')
  const consultationNameInputEl = consultationEl?.querySelector('#consultation-name-input')
  const consultationPhoneInputEl = consultationEl?.querySelector('#consultation-phone-input')
  const consultationCheckboxInputEl = consultationEl?.querySelector('#consultation-checkbox-input')

  const checkInputValidity = (input) => input.value

  const submitgetCP = async (e) => {
    e.preventDefault()
    ;[getCPNameInputEl, getCPEmailInputEl].forEach((input) => {
      if (!checkInputValidity(input)) {
        input.classList.add('input--invalid')
        return
      } else {
        input.classList.remove('input--invalid')
      }
    })

    if (getCPNameInputEl.value.length < 2 || getCPNameInputEl.value.length > 30) {
      getCPNameInputEl.classList.add('input--invalid')
      return
    } else {
      getCPNameInputEl.classList.remove('input--invalid')
    }

    if (!emailRegex.test(getCPEmailInputEl.value)) {
      getCPEmailInputEl.classList.add('input--invalid')
      return
    } else {
      getCPEmailInputEl.classList.remove('input--invalid')
    }

    if (!getCPCheckboxInputEl.checked) {
      return
    } else {
      let message = `<b>Заявка с сайта:</b>\n`
      message += `<b>Имя:</b> ${e.target.name.value}\n`
      message += `<b>Почта:</b> ${e.target.email.value}\n`

      $.ajax({
        url: '/send.php',
        type: 'POST',
        data: {
          name: getCPNameInputEl.value,
          email: getCPEmailInputEl.value,
        },
        cache: false,
        dataType: 'html',
        success: function (data) {
          document.body.classList.remove('no-scroll')
          document.querySelector('.getCP').classList.remove('modal--active')
          window.location.href = '/pages/order/'
        },
      })
    }
  }

  const submitCallback = async (e) => {
    e.preventDefault()
    ;[callbackNameInputEl, callbackPhoneInputEl].forEach((input) => {
      if (!checkInputValidity(input)) {
        input.classList.add('input--invalid')
        return
      } else {
        input.classList.remove('input--invalid')
      }
    })

    if (callbackNameInputEl.value.length < 2 || callbackNameInputEl.value.length > 30) {
      callbackNameInputEl.classList.add('input--invalid')
      return
    } else {
      callbackNameInputEl.classList.remove('input--invalid')
    }

    if (callbackPhoneInputEl.value.length < 16) {
      callbackPhoneInputEl.classList.add('input--invalid')
      return
    } else {
      callbackPhoneInputEl.classList.remove('input--invalid')
    }

    if (!callbackCheckboxInputEl.checked) {
      return
    } else {
      let message = `<b>Заявка с сайта:</b>\n`
      message += `<b>Имя:</b> ${e.target.name.value}\n`
      message += `<b>Телефон:</b> ${e.target.phone.value}\n`

      $.ajax({
        url: '/send.php',
        type: 'POST',
        data: {
          name: callbackNameInputEl.value,
          phone: callbackPhoneInputEl.value,
        },
        cache: false,
        dataType: 'html',
        success: function (data) {
          document.body.classList.remove('no-scroll')
          document.querySelector('.callback').classList.remove('modal--active')
          window.location.href = '/pages/order/'
        },
      })
    }
  }

  const submitconsultation = async (e) => {
    e.preventDefault()
    ;[consultationNameInputEl, consultationPhoneInputEl].forEach((input) => {
      if (!checkInputValidity(input)) {
        input.classList.add('input--invalid')
        return
      } else {
        input.classList.remove('input--invalid')
      }
    })

    if (consultationNameInputEl.value.length < 2 || consultationNameInputEl.value.length > 30) {
      consultationNameInputEl.classList.add('input--invalid')
      return
    } else {
      consultationNameInputEl.classList.remove('input--invalid')
    }

    if (consultationPhoneInputEl.value.length < 16) {
      consultationPhoneInputEl.classList.add('input--invalid')
      return
    } else {
      consultationPhoneInputEl.classList.remove('input--invalid')
    }

    if (!consultationCheckboxInputEl.checked) {
      return
    } else {
      let message = `<b>Заявка с сайта:</b>\n`
      message += `<b>Имя:</b> ${e.target.name.value}\n`
      message += `<b>Телефон:</b> ${e.target.phone.value}\n`

      $.ajax({
        url: '/send.php',
        type: 'POST',
        data: {
          name: consultationNameInputEl.value,
          phone: consultationPhoneInputEl.value,
        },
        cache: false,
        dataType: 'html',
        success: function (data) {
          document.body.classList.remove('no-scroll')
          document.querySelector('.consultation').classList.remove('modal--active')
          window.location.href = '/pages/order/'
        },
      })
    }
  }

  document.querySelectorAll('.form-input-name').forEach((input) => {
    input.addEventListener('input', (event) => {
      const inputValue = event.target.value
      const regex = /^[a-zA-Zа-яА-Я]+$/

      if (!regex.test(inputValue)) {
        event.target.value = inputValue.replace(/[^a-zA-Zа-яА-Я]+/g, '')
      }
      if (event.target.value.length < 2 || event.target.value.length > 30) {
        input.classList.add('input--invalid')
      } else {
        input.classList.remove('input--invalid')
      }
    })
  })

  document.querySelectorAll('.form-input-email').forEach((input) => {
    input.addEventListener('input', (event) => {
      const inputValue = event.target.value
      if (!emailRegex.test(inputValue)) {
        input.classList.add('input--invalid')
      } else {
        input.classList.remove('input--invalid')
      }
    })
  })

  document.querySelectorAll('.form-input-phone').forEach((input) => {
    input.addEventListener('input', () => {
      if (input.value.length < 16) {
        input.classList.add('input--invalid')
      } else {
        input.classList.remove('input--invalid')
      }
    })
  })

  getCPEl?.addEventListener('submit', submitgetCP)
  callbackEl?.addEventListener('submit', submitCallback)
  consultationEl?.addEventListener('submit', submitconsultation)
})
