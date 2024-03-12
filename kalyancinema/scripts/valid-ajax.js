window.addEventListener('DOMContentLoaded', () => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

  const formEl = document.querySelector('#form')
  const formNameInputEl = formEl?.querySelector('#form-name-input')
  const formEmailInputEl = formEl?.querySelector('#form-email-input')
  const formEmailTextareaEl = formEl?.querySelector('#form-textarea-input')
  const formButton = formEl?.querySelector('#form-button')

  const checkInputValidity = (input) => input.value

  const submitForm = async (e) => {
    e.preventDefault()
    ;[formNameInputEl, formEmailInputEl].forEach((input) => {
      if (!checkInputValidity(input)) {
        input.classList.add('input--invalid')
        return
      } else {
        input.classList.remove('input--invalid')
      }
    })

    if (formNameInputEl.value.length < 2 || formNameInputEl.value.length > 30) {
      formNameInputEl.classList.add('input--invalid')
      return
    } else {
      formNameInputEl.classList.remove('input--invalid')
    }

    if (!emailRegex.test(formEmailInputEl.value)) {
      formEmailInputEl.classList.add('input--invalid')
      return
    } else {
      formEmailInputEl.classList.remove('input--invalid')
    }

    if (formButton.classList.contains('btn--disabled')) {
      return
    } else {
      let message = `<b>Заявка с сайта:</b>\n`
      message += `<b>Имя:</b> ${e.target.name.value}\n`
      message += `<b>Email:</b> ${e.target.email.value}\n`
      message += `<b>Текст сообщения:</b> ${e.target.text.value}\n`

      $.ajax({
        url: '/send.php',
        type: 'POST',
        data: {
          name: formNameInputEl.value,
          email: formEmailInputEl.value,
          text: formEmailTextareaEl.value,
        },
        cache: false,
        dataType: 'html',
        success: function (data) {
          alert('Форма отправлена')

          formNameInputEl.value = ''
          formEmailInputEl.value = ''
          formEmailTextareaEl.value = ''
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

  formEl?.addEventListener('submit', submitForm)
})
