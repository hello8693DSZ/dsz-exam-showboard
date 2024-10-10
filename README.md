<div align="center">

<image src="resources/icon.png" height="64"/>

# dsz-exam-showboard-next
# DSZ考试看板 next（原DSZ考试看板）

![WelcomePage](/.Screenshots/WelcomePage.jpg)
![ExamPage](/.Screenshots/ExamPage.jpg)

[![stars](https://img.shields.io/github/stars/MKStoler4096/dsz-exam-showboard-next?label=Stars)](https://github.com/MKStoler4096/dsz-exam-showboard-next/stargazers)
[![forks](https://img.shields.io/github/forks/MKStoler4096/dsz-exam-showboard-next?label=Forks)](https://github.com/MKStoler4096/dsz-exam-showboard-next/forks)
[![Watchers](https://img.shields.io/github/watchers/MKStoler4096/dsz-exam-showboard-next?style=social)](https://github.com/MKStoler4096/dsz-exam-showboard-next/watchers)
[![Downloads](https://img.shields.io/github/downloads/MKStoler4096/dsz-exam-showboard-next/total?style=social&label=Downloads&logo=github)](https://github.com/MKStoler4096/dsz-exam-showboard-next/releases)
[![GitHub Issues](https://img.shields.io/github/issues-search/MKStoler4096/dsz-exam-showboard-next?query=is%3Aopen&style=social-square&logo=github&label=Issues&color=%233fb950)](https://github.com/MKStoler4096/dsz-exam-showboard-next/issues)
[![GitHub Discussions](https://img.shields.io/github/discussions/MKStoler4096/dsz-exam-showboard-next?style=flat&logo=Github&label=Discussions)](https://github.com/MKStoler4096/dsz-exam-showboard-next/discussions)
[![Created At](https://img.shields.io/github/created-at/MKStoler4096/dsz-exam-showboard-next)](https://github.com/MKStoler4096/dsz-exam-showboard-next)
[![Github Last Commit](https://img.shields.io/github/last-commit/MKStoler4096/dsz-exam-showboard-next)](https://github.com/MKStoler4096/dsz-exam-showboard-next/commits/master)
[![GitHub Language Count](https://img.shields.io/github/languages/count/MKStoler4096/dsz-exam-showboard-next)](https://github.com/MKStoler4096/dsz-exam-showboard-next)
[![GitHub Top Language](https://img.shields.io/github/languages/top/MKStoler4096/dsz-exam-showboard-next)](https://github.com/MKStoler4096/dsz-exam-showboard-next)
[![LICENSE](https://img.shields.io/badge/License-GPL--3.0-red.svg "LICENSE")](LICENSE)
[![QQ群](https://img.shields.io/badge/-QQ%E7%BE%A4%EF%BD%9C901670561-blue?style=flat&logo=TencentQQ&logoColor=white)](https://qm.qq.com/q/zDiEipHsaI)

一款显示当前时间与考试详细信息的看板类软件

<table>
    <tr>
        <td align="center">下载</td>
        <td align="center"><a href="https://github.com/MKStoler4096/dsz-exam-showboard-next/releases">Releases<a/></td>
        <td align="center"><a href="https://github.com/MKStoler4096/dsz-exam-showboard-next/actions">Actions<a/></td>
    </tr>
</table>

</div>

> [!tip]
> **本软件使用`Vue` + `TypeScript` + `JavaScript`制作，使用`Node.js` + `Electron`完善系统级功能并打包。**

## 功能
- 起始页展示`打开配置`、`直接进入看板`按钮
- 看板页面
	- 上方展示`考试标题`、`信息`
	- 左侧展示`当前时间`、`当前科目`、`考试时间`、`考试状态`
	- 右侧展示考试科目列表，包括`科目`、`开始`、`结束`、`状态`
	- 考试结束前15分钟黄字提醒

## 开始使用

- 下载安装程序并运行

默认安装在`AppData\Local\Programs\dsz-exam-showboard`

- 编写`json`配置文件

新建文件`exam_config.json`，模板如下
```json
{
    "examName": "考试名称",
    "message": "信息",
    "examInfos": [
        {
            "name": "科目",
            "start": "2024-10-01T07:00:00",
            "end": "2024-10-01T08:00:00"
        },
        {
            "name": "科目",
            "start": "2024-10-01T09:00:00",
            "end": "2024-10-01T10:00:00"
        }
    ]
}
```

-  打开软件，进入起始页面，点击`打开配置`按钮，选择配置文件，下次可点击`直接进入看板`按钮，将继续使用上次加载的配置。 

## 遇到问题

💡 如果您遇到`Bug`，或需要提出`优化`建议或新的`功能`，请提交[`Issues`](https://github.com/MKStoler4096/dsz-exam-showboard-next/issues)或在[`Discussions`](https://github.com/MKStoler4096/dsz-exam-showboard-next/discussions)中讨论。

👥 您也可以加入[`QQ群｜901670561`](https://qm.qq.com/q/zDiEipHsaI)获取帮助或交流讨论。

🛠️ 欢迎为本软件进行改进或编写新功能提交[`Pull Request`](https://github.com/MKStoler4096/dsz-exam-showboard-next/pulls)

## 开发

### Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) + [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)

> [!Caution]
> **必须使用Yarn包管理。Node版本要求为20。**

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

### Progress

- 正在[`master`](https://github.com/MKStoler4096/dsz-exam-showboard-next/commits/master)分支上维护`1.1.0`版本。

- 正在[`dev`](https://github.com/MKStoler4096/dsz-exam-showboard-next/commits/dev)分支上开发`1.1-Malkuth`版本。

> [!note]
> **如果dev模式页面不显示或按钮点击无效等问题，请连续刷新至少3次后再进行操作。build后没有此问题。**

## Stars 历史

[![Star 历史](https://starchart.cc/MKStoler4096/dsz-exam-showboard-next.svg?variant=adaptive)](https://starchart.cc/MKStoler4096/dsz-exam-showboard-next/stargazers)

<div align="center">

如果这个项目对您有帮助，请点亮 Star [⭐](#dsz-exam-showboard-next)

</div>