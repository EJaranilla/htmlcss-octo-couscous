const name = document.getElementById('name')
const password = document.getElementById('password')

form.addEventListener('submit', (e) => {
    let messages = []
    if (name.value === '' || name.value == null) {
      messages.push('Name is required')
    }