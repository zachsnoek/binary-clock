const { app, BrowserWindow, screen } = require("electron");

const windowWidth = 200;
const windowHeight = 120;

function createWindow() {
    const display = screen.getPrimaryDisplay();
    const { width: displayWidth } = display.bounds;

    const window = new BrowserWindow({
        width: windowWidth,
        height: windowHeight,
        x: displayWidth - windowWidth,
        y: 0,
        frame: false,
        alwaysOnTop: true,
        isMovable: true,
    });

    window.loadFile(__dirname + "/src/index.html");
}

app.whenReady().then(() => {
    createWindow();

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});
