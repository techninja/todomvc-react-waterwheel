const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')

let mainWindow

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 740, height: 500})

  // and load the index.html of the app.
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'build', 'index.html'),
    protocol: 'file:',
    slashes: true
  }))
}

app.on('ready', createWindow)

