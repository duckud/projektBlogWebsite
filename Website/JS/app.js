const form = document.getElementById('myform')
form.addEventListener('submit', function (ev) {
  ev.preventDefault()
  try {
    const Benutzername = document.getElementById('Benutzername')
    const passwort = document.getElementById('Passwort')

    if (Benutzername.value.length < 5) {
      throw new Error('Benutzername ist zu kurz')
    }
    if (Benutzername.value.length > 20) {
      throw new Error('Benutzername ist zu lang')
    }
    if (passwort.value.length < 12) {
      throw new Error('passwort ist zu kurz')
    }
  } catch (error) {
    alert('Funktioniert nicht: ${error.message}')
  }
})
