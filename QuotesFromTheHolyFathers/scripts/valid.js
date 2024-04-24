window.addEventListener('DOMContentLoaded', () => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

  const quotesRandomFormEl = document.querySelector('#form-quotesRandom')
  const quotesRandomEmailInputEl = quotesRandomFormEl?.querySelector('#quotesRandom-email-input')

  const checkInputValidity = (input) => input.value

  const submitRegistrationForm = (e) => {
    e.preventDefault()
    ;[quotesRandomEmailInputEl].forEach((input) => {
      if (!checkInputValidity(input)) {
        input.classList.add('input--invalid')
        quotesRandomEmailInputEl?.classList.add('form__error--invalid')
        return
      } else {
        input.classList.remove('input--invalid')
        quotesRandomEmailInputEl?.classList.remove('form__error--invalid')
      }
    })

    if (!emailRegex.test(quotesRandomEmailInputEl.value)) {
      quotesRandomEmailInputEl.classList.add('input--invalid')
      return
    } else {
      quotesRandomEmailInputEl.classList.remove('input--invalid')
    }

    quotesRandomFormEl.submit()
  }

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

  quotesRandomFormEl?.addEventListener('submit', submitRegistrationForm)
})
