function loadScript(scriptPath) {
  const script = document.createElement('script')
  script.src = scriptPath
  document.body.appendChild(script)
}

function initializeApp() {
  console.log('App initialized')
}

function setupPageSpecificScripts() {
  const page = document.body.dataset.page

  switch(page) {
    case 'chatroom':
      loadScript('../client/js/chatroom.js')
      break
    case 'cli':
      loadScript('../client/js/cli.js')
      break
    case 'editor':
      loadScript('../client/js/editor.js')
      break
    case 'homepage':
      loadScript('../client/js/homepage.js')
      break
    case 'login':
      loadScript('../client/js/login.js')
      break
    case 'projects':
      loadScript('../client/js/my_projects.js')
      break
    case 'toolbar':
      loadScript('../client/js/toolbar.js')
      break
    default:
      console.log(`Where was ${page}'s script when the westfold fell?! No my lord DOM, we are alone.`)
  }
}

function setupEventListeners() {
  // Global event listeners
  console.log('Event listeners set up')
}

document.addEventListener('DOMContentLoaded', () => {
  initializeApp()
  setupEventListeners()
  setupPageSpecificScripts()
})
