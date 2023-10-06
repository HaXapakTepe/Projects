window.addEventListener('DOMContentLoaded', () => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

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
  const applicationNameInputEl = applicationEl?.querySelector('#application-name-input')
  const applicationEmailInputEl = applicationEl?.querySelector('#application-email-input')
  const applicationTelInputEl = applicationEl?.querySelector('#application-tel-input')
  const outsourcingNameInputEl = outsourcingFormEl?.querySelector('#outsourcing-name-input')
  const outsourcingNameCompanyInputEl = outsourcingFormEl?.querySelector('#outsourcing-nameCompany-input')
  const outsourcingEmailInputEl = outsourcingFormEl?.querySelector('#outsourcing-email-input')
  const outsourcingTelInputEl = outsourcingFormEl?.querySelector('#outsourcing-tel-input')

  const checkInputValidity = (input) => input.value

  const submitOutsourcingForm = (e) => {
    e.preventDefault()
    ;[outsourcingNameInputEl, outsourcingNameCompanyInputEl, outsourcingEmailInputEl, outsourcingTelInputEl].forEach(
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

    if (outsourcingNameCompanyInputEl.value.length < 2 || outsourcingNameCompanyInputEl.value.length > 30) {
      outsourcingNameCompanyInputEl.classList.add('input--invalid')
      return
    } else {
      outsourcingNameCompanyInputEl.classList.remove('input--invalid')
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

    outsourcingFormEl.submit()
  }

  const submitForm = (e) => {
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

    if (formButton.classList.contains('btn--disabled')) {
      return
    } else {
      formEl.submit()
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

    footerFormEl.submit()
  }

  const submitApplicationForm = (e) => {
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

    applicationEl.submit()
  }

  const submitBriefForm = (e) => {
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

    briefEl.submit()
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

  formCheckboxInputEl.addEventListener('change', function () {
    if (formCheckboxInputEl.checked) {
      formButton.classList.remove('btn--disabled')
    } else {
      formButton.classList.add('btn--disabled')
    }
  })

  outsourcingFormEl?.addEventListener('submit', submitOutsourcingForm)

  formEl?.addEventListener('submit', submitForm)

  footerFormEl?.addEventListener('submit', submitFooterForm)

  briefEl?.addEventListener('submit', submitBriefForm)

  applicationEl?.addEventListener('submit', submitApplicationForm)
})
