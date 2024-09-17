<div align="center">

<image src="resources/icon.png" height="64"/>

# dsz-exam-composer
# DSZ考试看板

![WelcomePage](Screenshots/WelcomePage.png)
![ExamPage](Screenshots/ExamPage.png)

[![stars](https://img.shields.io/github/stars/hello8693DSZ/dsz-exam-showboard?label=Stars)](https://github.com/hello8693DSZ/dsz-exam-showboard)
[![forks](https://img.shields.io/github/forks/hello8693DSZ/dsz-exam-showboard?label=Forks)](https://github.com/hello8693DSZ/dsz-exam-showboard)
[![Watchers](https://img.shields.io/github/watchers/hello8693DSZ/dsz-exam-showboard?style=social)](https://github.com/hello8693DSZ/dsz-exam-showboard/watchers)
[![Downloads](https://img.shields.io/github/downloads/hello8693DSZ/dsz-exam-showboard/total?style=social&label=Downloads&logo=github)](https://github.com/hello8693DSZ/dsz-exam-showboard/releases/latest)
[![GitHub Issues](https://img.shields.io/github/issues-search/hello8693DSZ/dsz-exam-showboard?query=is%3Aopen&style=social-square&logo=github&label=Issues&color=%233fb950)](https://github.com/hello8693DSZ/dsz-exam-showboard/issues)
[![Beta](https://img.shields.io/github/v/release/hello8693DSZ/dsz-exam-showboard?include_prereleases&style=social-square&label=测试版)](https://github.com/hello8693DSZ/dsz-exam-showboard/releases/)
[![Github Last Commit](https://img.shields.io/github/last-commit/hello8693DSZ/dsz-exam-showboard)](https://github.com/hello8693DSZ/dsz-exam-showboard/commits/master)
[![LICENSE](https://img.shields.io/badge/License-GPL--3.0-red.svg "LICENSE")](LICENSE)
[![QQ群](https://img.shields.io/badge/-QQ%E7%BE%A4%EF%BD%9C901670561-blue?style=flat&logo=TencentQQ)](https://qm.qq.com/q/zDiEipHsaI)

一款显示当前时间与考试详细信息的看板类软件。

本软件使用Vue + TypeScript + JavaScript制作，使用Node.js+Electron完善系统级功能并打包。

下载 [Realeases](https://github.com/hello8693DSZ/dsz-exam-showboard/releases) | [Actions](https://github.com/hello8693DSZ/dsz-exam-showboard/actions)

</div>

> [!warning]
> **此项目仍在早期开发中，暂未提供正式发行版。**
> 
> **使用过程中可能会遇到一些未知的问题！**

## 功能
- [X] 起始页展示`打开配置`、`直接进入看板`按钮
- [X] 上方展示`考试标题`
- [X] 左侧展示`当前时间`、`考试科目`、`开始/结束时间`、`考试状态`
- [X] 右侧展示考试科目列表，包括`科目`、`开始`、`结束`、`状态`
- [X] 考试结束前15分钟黄字提醒
- [ ] 后续将支持集控

## 开始使用

### 下载安装程序并运行（默认安装在`AppData\Local\Programs\dsz-exam-showboard`），安装完成后先写好配置文件，再运行桌面快捷方式

### 配置文件格式为`json`，模板如下
```json
{
    "examName": "考试名称",
    "message": "副标题",
    "examInfos": [
        {
            "name": "科目",
            "start": "2024-09-01T07:00:00",
            "end": "2024-09-01T08:00:00"
        },
        {
            "name": "科目",
            "start": "2024-09-01T09:00:00",
            "end": "2024-09-01T10:00:00"
        }
    ]
}
```

### 进入起始页面后，点击`打开配置`按钮，选择配置文件，下次可点击`直接进入看板`按钮进入考试看板，继续使用上次加载的配置。 

## 提出问题&交流讨论

💡如果您遇到一个`Bug`，或者需要提出一项新的`功能`，请提交[`Issue`](https://github.com/hello8693DSZ/dsz-exam-showboard/issues)。

👥您也可以加入[`QQ群|901670561`](https://qm.qq.com/q/zDiEipHsaI)获取帮助或交流讨论。

🛠️欢迎为本软件进行改进或编写新功能的同学提交[`Pull Request`](https://github.com/hello8693DSZ/dsz-exam-showboard/pulls)

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

> [!important]
> **该项目被以下项目推荐**
> 
> [https://github.com/Jursin/Awesome-Class-Softwares](https://github.com/Jursin/Awesome-Class-Softwares)
> 
> [https://github.com/kriastans/Awesome-Iwb](https://github.com/kriastans/Awesome-Iwb)

## Stars 历史

[![Star 历史](https://starchart.cc/hello8693DSZ/dsz-exam-showboard.svg?variant=adaptive)](https://starchart.cc/hello8693DSZ/dsz-exam-showboard)

<div align="center">

如果这个项目对您有帮助，请点亮 Star ⭐

</div>
