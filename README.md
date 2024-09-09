<div align="center">

<image src="/resources/icon.png" height="48"/>

# dsz-exam-composer

An Electron application with Vue and TypeScript

![WelcomePage](Screenshots//WelcomePage.png)
![ExamPage](Screenshots//ExamPage.png)

[![stars](https://img.shields.io/github/stars/hello8693DSZ/dsz-exam-showboard?label=Stars)](https://github.com/hello8693DSZ/dsz-exam-showboard)
[![forks](https://img.shields.io/github/forks/hello8693DSZ/dsz-exam-showboard?label=Forks)](https://github.com/hello8693DSZ/dsz-exam-showboard)
[![Watchers](https://img.shields.io/github/watchers/hello8693DSZ/dsz-exam-showboard?style=social)](https://github.com/hello8693DSZ/dsz-exam-showboard/watchers)
[![Downloads](https://img.shields.io/github/downloads/hello8693DSZ/dsz-exam-showboard/total?style=social&label=Downloads&logo=github)](https://github.com/hello8693DSZ/dsz-exam-showboard/releases/latest)
[![Beta](https://img.shields.io/github/v/release/hello8693DSZ/dsz-exam-showboard?include_prereleases&style=social-square&label=测试版)](https://github.com/hello8693DSZ/dsz-exam-showboard/releases/)
[![Github Last Commit](https://img.shields.io/github/last-commit/hello8693DSZ/dsz-exam-showboard)](https://github.com/hello8693DSZ/dsz-exam-showboard/commits/master)
[![QQ群](https://img.shields.io/badge/-QQ%E7%BE%A4%EF%BD%9C901670561-blue?style=flat&logo=TencentQQ)](https://qm.qq.com/q/zDiEipHsaI)

一款显示当前时间与考试详细信息的看板类软件，支持展示考试列表及快速信息，考试结束前15分钟预警，后续将支持集控。

[下载体验](https://github.com/hello8693DSZ/dsz-exam-showboard/actions/runs/10609580611/artifacts/1868329780)

</div>

## 配置模板
```json
{
    "examName": "",
    "message": "",
    "examInfos": [
        {
            "name": "",
            "start": "20XX-XX-XXTXX:XX:XX",
            "end": "20XX-XX-XXTXX:XX:XX"
        }
    ]
}
```

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) + [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)

## 注意事项

必须使用Yarn包管理。Node版本要求为20。

## Project Setup

### Install

```bash
$ yarn
```

### Development

```bash
$ yarn dev
```

### Build

```bash
# For windows
$ yarn build:win

# For macOS
$ yarn build:mac

# For Linux
$ yarn build:linux
```

## 说明

如果dev模式页面不显示或按钮点击无效等问题，请连续刷新至少3次后再进行操作。build后没有此问题。
