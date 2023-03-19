function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light-mode')
  const imageProfile = document.querySelector('#profile img')
  if (html.classList.contains('light-mode')) {
    imageProfile.setAttribute('src', './assets/avatar-light-mode.png')
  } else {
    imageProfile.setAttribute('src', './assets/avatar-dark-mode.png')
  }
}
