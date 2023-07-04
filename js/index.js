function isValidEmail(){
  const email = document.getElementById('email')
  const error = document.getElementById('error')

  const regexPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const testResult = regexPattern.test(email.value)
  
  if(testResult === false) {
    error.classList.remove('hidden')
    error.classList.add('block')

    email.classList.remove('border-[var(--Blue)]')
    email.classList.add('border-[var(--Light-Red)]')
    
  } else {
    error.classList.remove('block')
    error.classList.add('hidden')
    
    email.classList.remove('border-[var(--Light-Red)]')
    email.classList.add('border-[var(--Blue)]')
  }
}