import { BrowserWindow, BrowserWindowConstructorOptions, shell } from 'electron';
import path from 'path';
import WindowName from '../types/WindowName';
import icon from '/resources/icon.png?asset';
import { join } from 'path';
import { is } from '@electron-toolkit/utils';

class WindowManager {
  // 这些都设置成 private 了，要用这些窗口的时候用下面那些 create 的方法，会返回需要的窗口，这样保证它们都是存在的
  private MainWindow?: BrowserWindow;

  private createWindow(
    route: string,
    options: Partial<BrowserWindowConstructorOptions> = {},
    onReadyToShow?: () => any
  ) {
    const win = new BrowserWindow({
      show: false,
      autoHideMenuBar: true,
      ...(process.platform === 'linux' ? { icon } : {}),
      webPreferences: {
        preload: join(__dirname, '../preload/index.js'),
        sandbox: false
      },
      ...options
    });

    win.once('ready-to-show', () => {
      onReadyToShow && onReadyToShow();
      win.show();
    });

    if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
      // 🚧 Use ['ENV_NAME'] avoid vite:define plugin
      const url = process.env['ELECTRON_RENDERER_URL'];

      win.loadURL(`${url}#/${route}`);
    } else {
      win.loadFile(path.resolve(__dirname, '../renderer/index.html'), { hash: route });
    }

    // Make all links open with the browser, not with the application
    win.webContents.setWindowOpenHandler(({ url }) => {
      if (url.startsWith('https:')) shell.openExternal(url);
      return { action: 'deny' };
    });

    return win;
  }

  public createMainWindow() {
    if (this.MainWindow && !this.MainWindow.isDestroyed()) {
      this.MainWindow.show();
      return this.MainWindow;
    }
    this.MainWindow = this.createWindow('mainWindow', {
      title: 'ExamShowboard 考试看板',
      fullscreen: true
    });
    this.MainWindow.on('close', () => {
      this.MainWindow = undefined;
    });
    return this.MainWindow;
  }

  public destroyAllWindows() {
    if (this.MainWindow) {
      this.MainWindow.destroy();
    }
  }

  public createByName(name: WindowName) {
    switch (name) {
      case 'mainWindow':
        return this.createMainWindow();
    }
  }
}

export default new WindowManager();
