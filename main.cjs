// Modules to control application life and create native browser window
const { app, BrowserWindow, dialog } = require('electron');
const path = require('path');
const serve = require('electron-serve');
const loadURL = serve({ directory: '.' });


let mainWindow;

const isdev = !app.isPackaged

function createWindow() {    
    // Create the browser window.
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            webSecurity: false,
        },
        icon: path.join(__dirname, 'static/favicon.png'),
        show: false
    });


    if (isdev) {
        mainWindow.loadURL('http://localhost:5173/');
    } else {
        loadURL(mainWindow);
    }
    //if(!isdev) mainWindow.removeMenu()

    mainWindow.on('closed', function () {
        mainWindow = null
    });

    mainWindow.once('ready-to-show', () => {
        mainWindow.show()
    });
}


app.on('ready', createWindow);
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
});
app.on('activate', function () {
    if (mainWindow === null) createWindow()
});
