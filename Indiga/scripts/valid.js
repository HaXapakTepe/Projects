window.addEventListener('DOMContentLoaded', () => {
  const token = '5647846048:AAEtCT5PVBEiUJ1J4ychhmHW77aopDENhho'
  const chatId = '-1001909504521'
  const urlApi = `https://api.telegram.org/bot${token}/sendMessage`

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

  const success = document.querySelector('.success')

  const footerFormEl = document.querySelector('#footer-form')
  const formEl = document.querySelector('#form')
  const briefEl = document.querySelector('#brief-form')
  const applicationEl = document.querySelector('#application-form')
  const outsourcingFormEl = document.querySelector('#outsourcing-form')
  const formNameInputEl = formEl?.querySelector('#form-name-input')
  const formEmailInputEl = formEl?.querySelector('#form-email-input')
  const formTelInputEl = formEl?.querySelector('#form-tel-input')
  const formCheckboxInputEl = formEl?.querySelector('#form-input-checkbox')
  const formButton = formEl?.querySelector('#form-button')
  const briefNameInputEl = briefEl?.querySelector('#brief-name-input')
  const briefEmailInputEl = briefEl?.querySelector('#brief-email-input')
  const briefTelInputEl = briefEl?.querySelector('#brief-tel-input')
  const briefCheckboxEl = briefEl?.querySelector('#brief-input-checkbox')
  const briefButton = briefEl?.querySelector('#brief-button')
  const applicationNameInputEl = applicationEl?.querySelector('#application-name-input')
  const applicationEmailInputEl = applicationEl?.querySelector('#application-email-input')
  const applicationTelInputEl = applicationEl?.querySelector('#application-tel-input')
  const applicationCheckboxEl = applicationEl?.querySelector('#application-input-checkbox')
  const applicationButton = applicationEl?.querySelector('#application-button')
  const outsourcingNameInputEl = outsourcingFormEl?.querySelector('#outsourcing-name-input')
  const outsourcingCompanyInputEl = outsourcingFormEl?.querySelector('#outsourcing-company-input')
  const outsourcingEmailInputEl = outsourcingFormEl?.querySelector('#outsourcing-email-input')
  const outsourcingTelInputEl = outsourcingFormEl?.querySelector('#outsourcing-tel-input')

  const checkInputValidity = (input) => input.value

  const submitOutsourcingForm = async (e) => {
    e.preventDefault()
    ;[outsourcingNameInputEl, outsourcingCompanyInputEl, outsourcingEmailInputEl, outsourcingTelInputEl].forEach(
      (input) => {
        if (!checkInputValidity(input)) {
          input.classList.add('input--invalid')
          return
        } else {
          input.classList.remove('input--invalid')
        }
      }
    )

    if (outsourcingNameInputEl.value.length < 2 || outsourcingNameInputEl.value.length > 30) {
      outsourcingNameInputEl.classList.add('input--invalid')
      return
    } else {
      outsourcingNameInputEl.classList.remove('input--invalid')
    }

    if (outsourcingCompanyInputEl.value.length < 2 || outsourcingCompanyInputEl.value.length > 30) {
      outsourcingCompanyInputEl.classList.add('input--invalid')
      return
    } else {
      outsourcingCompanyInputEl.classList.remove('input--invalid')
    }

    if (!emailRegex.test(outsourcingEmailInputEl.value)) {
      outsourcingEmailInputEl.classList.add('input--invalid')
      return
    } else {
      outsourcingEmailInputEl.classList.remove('input--invalid')
    }

    if (outsourcingTelInputEl.value.length < 16) {
      outsourcingTelInputEl.classList.add('input--invalid')
      return
    } else {
      outsourcingTelInputEl.classList.remove('input--invalid')
    }

    let message = `<b>Заявка с сайта:</b>\n`
    message += `<b>Имя:</b> ${e.target.name.value}\n`
    message += `<b>Название компании:</b> ${e.target.company.value}\n`
    message += `<b>Телефон:</b> ${e.target.phone.value}\n`
    message += `<b>Email:</b> ${e.target.email.value}\n`

    const resp = await axios.post(urlApi, {
      chat_id: chatId,
      parse_mode: 'html',
      text: message,
    })

    if (resp.data.ok) {
      $.ajax({
        url: '/send.php',
        type: 'post',
        data: {
          name: outsourcingNameInputEl.value,
          company: outsourcingCompanyInputEl.value,
          phone: outsourcingTelInputEl.value,
          email: outsourcingEmailInputEl.value,
        },
        cache: false,
        dataType: 'html',
        success: function (data) {
          success.classList.add('success--visible')
          if (success.classList.contains('success--visible')) {
            setTimeout(() => {
              success.classList.remove('success--visible')
            }, 1500)
          }
        },
      })

      outsourcingNameInputEl.value = ''
      outsourcingCompanyInputEl.value = ''
      outsourcingTelInputEl.value = ''
      outsourcingEmailInputEl.value = ''
    }
  }

  const submitForm = async (e) => {
    e.preventDefault()
    ;[formNameInputEl, formEmailInputEl, formTelInputEl].forEach((input) => {
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

    if (formTelInputEl.value.length < 18) {
      formTelInputEl.classList.add('input--invalid')
      return
    } else {
      formTelInputEl.classList.remove('input--invalid')
    }

    if (!formCheckboxInputEl.checked) {
      formButton.classList.add('btn--disabled')
      return
    } else {
      formButton.classList.remove('btn--disabled')
    }

    if (formButton.classList.contains('btn--disabled')) {
      return
    } else {
      let message = `<b>Заявка с сайта:</b>\n`
      message += `<b>Имя:</b> ${e.target.name.value}\n`
      message += `<b>Телефон:</b> ${e.target.phone.value}\n`
      message += `<b>Email:</b> ${e.target.email.value}\n`

      const resp = await axios.post(urlApi, {
        chat_id: chatId,
        parse_mode: 'html',
        text: message,
      })
      if (resp.data.ok) {
        $.ajax({
          url: '/send.php',
          type: 'post',
          data: {
            name: formNameInputEl.value,
            email: formEmailInputEl.value,
            phone: formTelInputEl.value,
          },
          cache: false,
          dataType: 'html',
          success: function (data) {
            success.classList.add('success--visible')
            if (success.classList.contains('success--visible')) {
              setTimeout(() => {
                success.classList.remove('success--visible')
              }, 1500)
            }
          },
        })

        formNameInputEl.value = ''
        formEmailInputEl.value = ''
        formTelInputEl.value = ''
      }
    }
  }

  const submitFooterForm = (e) => {
    e.preventDefault()

    const emailInput = e.target.footer_form_email

    if (!checkInputValidity(emailInput)) {
      emailInput.classList.add('input--invalid')
      return
    } else {
      emailInput.classList.remove('input--invalid')
    }

    if (!emailRegex.test(emailInput.value)) {
      emailInput.classList.add('input--invalid')
      return
    } else {
      emailInput.classList.remove('input--invalid')
    }

    $.ajax({
      url: '/send.php',
      type: 'post',
      data: {
        email: emailInput.value,
      },
      cache: false,
      dataType: 'html',
      success: function (data) {
        success.classList.add('success--visible')
        if (success.classList.contains('success--visible')) {
          setTimeout(() => {
            success.classList.remove('success--visible')
          }, 1500)
        }
      },
    })

    emailInput.value = ''
  }

  const submitApplicationForm = async (e) => {
    e.preventDefault()
    ;[applicationNameInputEl, applicationEmailInputEl, applicationTelInputEl].forEach((input) => {
      if (!checkInputValidity(input)) {
        input.classList.add('input--invalid')
        return
      } else {
        input.classList.remove('input--invalid')
      }
    })

    if (applicationNameInputEl.value.length < 2 || applicationNameInputEl.value.length > 30) {
      applicationNameInputEl.classList.add('input--invalid')
      return
    } else {
      applicationNameInputEl.classList.remove('input--invalid')
    }

    if (!emailRegex.test(applicationEmailInputEl.value)) {
      applicationEmailInputEl.classList.add('input--invalid')
      return
    } else {
      applicationEmailInputEl.classList.remove('input--invalid')
    }

    if (applicationTelInputEl.value.length < 18) {
      applicationTelInputEl.classList.add('input--invalid')
      return
    } else {
      applicationTelInputEl.classList.remove('input--invalid')
    }

    if (!applicationCheckboxEl.checked) {
      applicationButton.classList.add('btn--disabled')
      return
    } else {
      applicationButton.classList.remove('btn--disabled')
    }

    let message = `<b>Заявка с сайта:</b>\n`
    message += `<b>Имя:</b> ${e.target.name.value}\n`
    message += `<b>Телефон:</b> ${e.target.phone.value}\n`
    message += `<b>Email:</b> ${e.target.email.value}\n`

    const resp = await axios.post(urlApi, {
      chat_id: chatId,
      parse_mode: 'html',
      text: message,
    })

    if (resp.data.ok) {
      $.ajax({
        url: '/send.php',
        type: 'post',
        data: {
          name: applicationNameInputEl.value,
          email: applicationEmailInputEl.value,
          phone: applicationTelInputEl.value,
        },
        cache: false,
        dataType: 'html',
        success: function (data) {
          success.classList.add('success--visible')
          if (success.classList.contains('success--visible')) {
            setTimeout(() => {
              success.classList.remove('success--visible')
            }, 1500)
          }
        },
      })

      applicationNameInputEl.value = ''
      applicationEmailInputEl.value = ''
      applicationTelInputEl.value = ''

      Fancybox.close()
    }
  }

  const submitBriefForm = async (e) => {
    e.preventDefault()
    ;[briefNameInputEl, briefEmailInputEl, briefTelInputEl].forEach((input) => {
      if (!checkInputValidity(input)) {
        input.classList.add('input--invalid')
        return
      } else {
        input.classList.remove('input--invalid')
      }
    })

    if (briefNameInputEl.value.length < 2 || briefNameInputEl.value.length > 30) {
      briefNameInputEl.classList.add('input--invalid')
      return
    } else {
      briefNameInputEl.classList.remove('input--invalid')
    }

    if (!emailRegex.test(briefEmailInputEl.value)) {
      briefEmailInputEl.classList.add('input--invalid')
      return
    } else {
      briefEmailInputEl.classList.remove('input--invalid')
    }

    if (briefTelInputEl.value.length < 18) {
      briefTelInputEl.classList.add('input--invalid')
      return
    } else {
      briefTelInputEl.classList.remove('input--invalid')
    }

    if (!briefCheckboxEl.checked) {
      briefButton.classList.add('btn--disabled')
      return
    } else {
      briefButton.classList.remove('btn--disabled')
    }

    let message = `<b>Заявка с сайта:</b>\n`
    message += `<b>Имя:</b> ${e.target.name.value}\n`
    message += `<b>Телефон:</b> ${e.target.phone.value}\n`
    message += `<b>Email:</b> ${e.target.email.value}\n`

    const resp = await axios.post(urlApi, {
      chat_id: chatId,
      parse_mode: 'html',
      text: message,
    })

    if (resp.data.ok) {
      $.ajax({
        url: '/send.php',
        type: 'post',
        data: {
          name: briefNameInputEl.value,
          email: briefEmailInputEl.value,
          phone: briefTelInputEl.value,
        },
        cache: false,
        dataType: 'html',
        success: function (data) {
          success.classList.add('success--visible')
          if (success.classList.contains('success--visible')) {
            setTimeout(() => {
              success.classList.remove('success--visible')
            }, 1500)
          }
        },
      })

      briefNameInputEl.value = ''
      briefEmailInputEl.value = ''
      briefTelInputEl.value = ''

      Fancybox.close()
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

  document.querySelectorAll('.form-input-tel').forEach((input) => {
    input.addEventListener('input', () => {
      if (input.value.length < 18) {
        input.classList.add('input--invalid')
      } else {
        input.classList.remove('input--invalid')
      }
    })
  })

  outsourcingFormEl?.addEventListener('submit', submitOutsourcingForm)

  formEl?.addEventListener('submit', submitForm)

  footerFormEl?.addEventListener('submit', submitFooterForm)

  briefEl?.addEventListener('submit', submitBriefForm)

  applicationEl?.addEventListener('submit', submitApplicationForm)
})
