<div align="center">

<image src="resources/icon.png" height="48"/>

# dsz-exam-composer
# DSZ考试看板

![WelcomePage](ScreenShots/WelcomePage.png)
![ExamPage](ScreenShots/ExamPage.png)

[![stars](https://img.shields.io/github/stars/hello8693DSZ/dsz-exam-showboard?label=Stars)](https://github.com/hello8693DSZ/dsz-exam-showboard)
[![forks](https://img.shields.io/github/forks/hello8693DSZ/dsz-exam-showboard?label=Forks)](https://github.com/hello8693DSZ/dsz-exam-showboard)
[![Watchers](https://img.shields.io/github/watchers/hello8693DSZ/dsz-exam-showboard?style=social)](https://github.com/hello8693DSZ/dsz-exam-showboard/watchers)
[![Downloads](https://img.shields.io/github/downloads/hello8693DSZ/dsz-exam-showboard/total?style=social&label=Downloads&logo=github)](https://github.com/hello8693DSZ/dsz-exam-showboard/releases/latest)
[![GitHub Issues](https://img.shields.io/github/issues-search/hello8693DSZ/dsz-exam-showboard?query=is%3Aopen&style=social-square&logo=github&label=Issues&color=%233fb950)](https://github.com/hello8693DSZ/dsz-exam-showboard/issues)
[![Beta](https://img.shields.io/github/v/release/hello8693DSZ/dsz-exam-showboard?include_prereleases&style=social-square&label=测试版)](https://github.com/hello8693DSZ/dsz-exam-showboard/releases/)
[![Github Last Commit](https://img.shields.io/github/last-commit/hello8693DSZ/dsz-exam-showboard)](https://github.com/hello8693DSZ/dsz-exam-showboard/commits/master)
[![QQ群](https://img.shields.io/badge/-QQ%E7%BE%A4%EF%BD%9C901670561-blue?style=flat&logo=TencentQQ)](https://qm.qq.com/q/zDiEipHsaI)

An Electron application with Vue and TypeScript.

一款显示当前时间与考试详细信息的看板类软件。

下载 [Realeases](https://github.com/hello8693DSZ/dsz-exam-showboard/releases) | [Actions](https://github.com/hello8693DSZ/dsz-exam-showboard/actions)

</div>

> [!important]
> **此项目仍在早期开发中，使用过程中可能会遇到一些未知的问题！**

## 功能
- [X] 起始页展示`打开配置`、`直接进入看板`按钮
- [X] 上方展示`考试标题`
- [X] 左侧展示`当前时间`、`考试科目`、`开始/结束时间`、`考试状态`
- [X] 右侧展示考试科目列表，包括`科目`、`开始`、`结束`、`状态`
- [X] 考试结束前15分钟 <font color=yellow>黄字</font> 提醒
- [ ] 后续将支持集控

## 开始使用

### 新建格式为`json`的配置文件，模板如下
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

### 运行主程序，点击`打开配置`按钮，选择配置文件，下次可点击`直接进入看板`按钮进入考试看板，继续使用上次加载的配置。 

## 开发

### Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) + [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)

### 注意事项

必须使用Yarn包管理。Node版本要求为20。

### Project Setup

#### Install

```bash
$ yarn
```

#### Development

```bash
$ yarn dev
```

#### Build

```bash
# For windows
$ yarn build:win

# For macOS
$ yarn build:mac

# For Linux
$ yarn build:linux
```

### 说明

如果dev模式页面不显示或按钮点击无效等问题，请连续刷新至少3次后再进行操作。build后没有此问题。

## Stars 历史

[![Star 历史](https://starchart.cc/hello8693DSZ/dsz-exam-showboard.svg?variant=adaptive)](https://starchart.cc/hello8693DSZ/dsz-exam-showboard)

<div align="center">

如果这个项目对您有帮助，请点亮 Star ⭐

</div>
