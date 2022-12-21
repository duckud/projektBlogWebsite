// const form = document.getElementById('myform')
// form.addEventListener('submit', function (ev) {
//   ev.preventDefault()
//   try {
//     const Benutzername = document.getElementById('Username')
//     const passwort = document.getElementById('password')

//     if (Benutzername.value.length < 5) {
//       throw new Error('Username is to short')
//     }
//     if (Benutzername.value.length > 20) {
//       throw new Error('Username is to long')
//     }
//     if (passwort.value.length < 12) {
//       throw new Error('password is to short')
//     }
//   } catch (error) {
//     alert('Funktioniert nicht: ${error.message}')
//   }
// })
function checkform (ev) {
  const Benutzername = document.getElementById('Username')
  const passwort = document.getElementById('password')

  if (Benutzername.value.length < 5) {
    throw new Error('Username is to short')
  }
  if (Benutzername.value.length > 20) {
    throw new Error('Username is to long')
  }
  if (passwort.value.length < 8) {
    throw new Error('Password is to short')
  }
}
