document.addEventListener('DOMContentLoaded', () => {
  
  const heroCreateReplBtn = document.getElementById('hero-create-repl')
  const createReplBtn = document.getElementById('create-repl')
  const createHtmlCssJsBtn = document.getElementById('h-css-js')
  const createPythonBtn = document.getElementById('create-python')
  const viewAllFilesBtn = document.getElementById('all-files')

  const fileSearchField = document.getElementById('file-search')

  // dynamic renderings
  const filesContainer = document.querySelector('.files-container')
  const recentlyOpenedContainer = document.querySelector('.recently-opened-container')
  const recentProjectContainer = document.querySelector('.recent-project')

  const languageDropdown = document.querySelector('#language-dropdown')

  //------- EDITOR ENVIRONMENT SETUPS ------------------
  function routeToEditor() {
    
  }

  function initialiseStarterFiles() {
    
  }

  function initialisePythonEnv() {
    
  }

  function initialiseRubyEnv() {
    
  }

  function initialiseCEnv() {
    
  }

  function initialiseCppEnv() {
    
  }

  function handleLanguageSelection(language) {

    switch (language) {
      case 'html/css/javascript':
        initialiseStarterFiles()
        break
      case 'python':
        initialisePythonEnv()
        break
      case 'ruby':
        initialiseRubyEnv()
        break
      case 'C':
        initialiseCEnv()
        break
      case 'C++':
        initialiseCppEnv()
        break
      default:
        console.log('Unknown language selected')
    }
    routeToEditor()
  }

  function setupLanguageDropdown() {
    languageDropdown.addEventListener('change', (event) => {
      const selectedLanguage = event.target.value
      handleLanguageSelection(selectedLanguage)
    })
  }

  if (languageDropdown) {
    setupLanguageDropdown()
  }

  heroCreateReplBtn.addEventListener('click', () => {
    // languageDropdown.style.display = 'block' 
  })

  createReplBtn.addEventListener('click', () => {
    createRepl(language)
  })
  
  createHtmlCssJsBtn.addEventListener('click', () => {
    initialiseStarterFiles()
    routeToEditor()

  })
  
  createPythonBtn.addEventListener('click', () => {
    initialisePythonEnv()
    routeToEditor()
  })
  
  viewAllFilesBtn.addEventListener('click', () => {

  })
  
  fileSearchField.addEventListener('input', () => {

  })

})
