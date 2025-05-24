const { app, BrowserWindow } = require('electron');

function createwindow() {
    const window = new BrowserWindow({

        with: 800,

        height: 600,
    })

    window.loadFile('src/pages/index.html');

}

app.whenReady().then(() =>  {
    createwindow()
})

