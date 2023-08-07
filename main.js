console.log('Hello from Electron')

const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({ 
        width: 800,
        height: 600
    })

    win.loadFile('index.html')
}
//all closed
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})
app.whenReady().then(() => {
    createWindow()
})
//open if closed
app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length ===0) createWindow()
    })
})