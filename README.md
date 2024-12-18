<div align="center">

# <image src="resources/icon.png" height="36"/> ExamShowboard-Next

> 下一代考试看板

[![stars](https://img.shields.io/github/stars/ProjectCampus-CH/dsz-exam-showboard-next?label=Stars)](https://github.com/ProjectCampus-CH/dsz-exam-showboard-next/stargazers)
[![forks](https://img.shields.io/github/forks/ProjectCampus-CH/dsz-exam-showboard-next?label=Forks)](https://github.com/ProjectCampus-CH/dsz-exam-showboard-next/forks)
[![Watchers](https://img.shields.io/github/watchers/ProjectCampus-CH/dsz-exam-showboard-next?style=social)](https://github.com/ProjectCampus-CH/dsz-exam-showboard-next/watchers)
[![Downloads](https://img.shields.io/github/downloads/ProjectCampus-CH/dsz-exam-showboard-next/total?style=social&label=Downloads&logo=github)](https://github.com/ProjectCampus-CH/dsz-exam-showboard-next/releases)
[![GitHub Issues](https://img.shields.io/github/issues-search/ProjectCampus-CH/dsz-exam-showboard-next?query=is%3Aopen&style=flat&logo=github&label=Issues&color=%233fb950)](https://github.com/ProjectCampus-CH/dsz-exam-showboard-next/issues)
[![GitHub Discussions](https://img.shields.io/github/discussions/ProjectCampus-CH/dsz-exam-showboard-next?style=flat&logo=Github&label=Discussions)](https://github.com/ProjectCampus-CH/dsz-exam-showboard-next/discussions)
[![Created At](https://img.shields.io/github/created-at/ProjectCampus-CH/dsz-exam-showboard-next)](https://github.com/ProjectCampus-CH/dsz-exam-showboard-next)
[![Github Last Commit](https://img.shields.io/github/last-commit/ProjectCampus-CH/dsz-exam-showboard-next)](https://github.com/ProjectCampus-CH/dsz-exam-showboard-next/commits/master)
[![GitHub Language Count](https://img.shields.io/github/languages/count/ProjectCampus-CH/dsz-exam-showboard-next)](https://github.com/ProjectCampus-CH/dsz-exam-showboard-next)
[![GitHub Top Language](https://img.shields.io/github/languages/top/ProjectCampus-CH/dsz-exam-showboard-next)](https://github.com/ProjectCampus-CH/dsz-exam-showboard-next)

[![LICENSE](https://img.shields.io/badge/License-GPL--3.0-red.svg 'LICENSE')](LICENSE)
[![QQ群](https://img.shields.io/badge/-QQ%E7%BE%A4%EF%BD%9C901670561-blue?style=flat&logo=TencentQQ&logoColor=white)](https://qm.qq.com/q/zDiEipHsaI)
[![All Contributors](https://img.shields.io/github/all-contributors/ProjectCampus-CH/exam-showboard-next?color=ee8449)](#贡献者)
[![Build and Package Electron App](https://github.com/ProjectCampus-CH/exam-showboard-next/actions/workflows/build.yaml/badge.svg)](https://github.com/ProjectCampus-CH/exam-showboard-next/actions/workflows/build.yaml)

![HomePage](/.Screenshots/HomePage.png)
![InfoPage](/.Screenshots/InfoPage.png)

一款显示当前时间与考试详细信息的看板类软件

| 下载 | [Releases](https://github.com/ProjectCampus-CH/dsz-exam-showboard-next/releases) | [Actions](https://github.com/ProjectCampus-CH/dsz-exam-showboard-next/actions) |
| ---- | -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |

</div>

> [!tip]
>
> **本软件使用 `Vue` + `TypeScript` + `JavaScript` 制作，使用 `Node.js` + `Electron` 完善系统级功能并打包。**

## 功能

- 起始页展示 `打开配置` 、 `直接进入看板` 按钮
- 看板页面
  - 上方展示 `考试标题` 、 `信息`
  - 左侧展示 `当前时间` 、 `当前科目` 、 `考试时间` 、 `考试状态`
  - 右侧展示考试科目列表，包括 `科目` 、 `开始` 、 `结束` 、 `状态`
  - 考试结束前15分钟黄字提醒
  - 集控功能（早期测试）
  - 设置页面（正在开发）

## 开始使用

- 下载安装程序并运行

默认安装路径 `AppData\Local\Programs\dsz-exam-showboard`

- 编写 `json` 配置文件

新建文件 `exam_config.json` ，模板如下

> [!warning]
>
> 请确保 `exam_config.json` 文件编码为 `UTF-8`，换行符为 `LF`，按照`json`文件格式填写。不然可能会出一些神奇的 Bug。
>
> 不确定？可以使用 [VSCode](https://code.visualstudio.com/) 打开、编辑文件，右下角显示编码格式和换行方式，点击即可更改。

```json
{
  "examName": "考试名称",
  "message": "信息",
  "room": "考场号",
  "examInfos": [
    {
      "name": "科目",
      "start": "2024-12-01T07:00:00",
      "end": "2024-12-01T08:00:00"
    },
    {
      "name": "科目/科目",
      "start": "2024-12-01T09:00:00",
      "end": "2024-12-01T10:00:00"
    }
  ]
}
```

> [!tip]
>
> `message` 与 `room` 内容必填（可填空格隐藏），`examInfos` 至少需要一条数据。
>
> 如果有两个以"/"分隔的科目可以自动转化为双行显示

- 打开软件，进入起始页面，点击 `打开配置` 按钮，选择配置文件
- 或使用集控（仿照 [`ClassIsland` 集控使用方法](https://docs.classisland.tech/management/tutorial-create-management-config.html)）
  - 新建 GitHub 公开存储仓库
  - 上传上面提到的 `exam_config.json` 文件
  - 复制 `Raw` 直链粘贴到应用`请求地址`文本框并保存

> [!tip]
>
> 可以在 `Raw 文件` 前加上镜像源，如
>
> ```txt
> https://github.moeyy.xyz/https://raw.githubusercontent.com/{owner}/{repo}/refs/heads/main/exam_config.json
> ```

- 点击`请求配置`加载配置文件并进入看板（下次可直接点击`直接进入看板`加载上次配置文件）

## 遇到问题

💡 如果您遇到 `Bug` ，或需要提出`优化`建议或新的`功能`，请提交 [`Issues`](https://github.com/ProjectCampus-CH/dsz-exam-showboard-next/issues) 或在 [`Discussions`](https://github.com/ProjectCampus-CH/dsz-exam-showboard-next/discussions) 中讨论。

👥 您也可以加入 [`QQ群｜901670561`](https://qm.qq.com/q/zDiEipHsaI)获取帮助或交流讨论。

🛠️ 欢迎为本软件进行改进或编写新功能提交 [`Pull Request`](https://github.com/ProjectCampus-CH/dsz-exam-showboard-next/pulls)

## 开发

### 推荐开发环境

- [VSCode](https://code.visualstudio.com/)
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  - [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

> [!Caution]
>
> **必须使用 Yarn 包管理。Node 版本要求为20。**

### 工程构建

#### 配置

```bash
$ yarn
```

#### 开发

```bash
$ yarn dev
# 如果无法显示，可以尝试使用下面的命令（不支持热重载）：
$ yarn start
```

> [!important]
>
> **如果 dev 模式页面不显示或按钮点击无效等问题，请连续刷新至少3次后再进行操作。 build 后没有此问题。**

#### 构建

```bash
# For windows
$ yarn build:win

# For macOS
$ yarn build:mac

# For Linux
$ yarn build:linux
```

### 开发进度

- 正在 [`master`](https://github.com/ProjectCampus-CH/dsz-exam-showboard-next/commits/master) 分支上维护`1.2-Yesod`版本。

- 正在 [`dev`](https://github.com/ProjectCampus-CH/dsz-exam-showboard-next/commits/dev) 分支上开发`1.3-HOD`版本。

## 贡献者

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://qsgz.edicdn.eu.org"><img src="https://avatars.githubusercontent.com/u/178344462?v=4?s=100" width="100px;" alt="MKStoler"/><br /><sub><b>MKStoler</b></sub></a><br /><a href="#code-MKStoler4096" title="Code">💻</a> <a href="#bug-MKStoler4096" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Jursin"><img src="https://avatars.githubusercontent.com/u/127487914?v=4?s=100" width="100px;" alt="Jursin"/><br /><sub><b>Jursin</b></sub></a><br /><a href="#content-Jursin" title="Content">🖋</a> <a href="#design-Jursin" title="Design">🎨</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/hello8693DSZ"><img src="https://avatars.githubusercontent.com/u/88492699?v=4?s=100" width="100px;" alt="Hello8693"/><br /><sub><b>Hello8693</b></sub></a><br /><a href="#code-hello8693DSZ" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/fhzit"><img src="https://avatars.githubusercontent.com/u/152045732?v=4?s=100" width="100px;" alt="fhzit"/><br /><sub><b>fhzit</b></sub></a><br /><a href="#code-fhzit" title="Code">💻</a> <a href="#bug-fhzit" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/wjj-8283"><img src="https://avatars.githubusercontent.com/u/82750345?v=4?s=100" width="100px;" alt="wjj-8283"/><br /><sub><b>wjj-8283</b></sub></a><br /><a href="#code-wjj-8283" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/features/security"><img src="https://avatars.githubusercontent.com/u/27347476?v=4?s=100" width="100px;" alt="Dependabot"/><br /><sub><b>Dependabot</b></sub></a><br /><a href="#code-dependabot" title="Code">💻</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

## Stars 历史

<div align="center">

[![Star 历史](https://starchart.cc/ProjectCampus-CH/dsz-exam-showboard-next.svg?variant=adaptive)](https://starchart.cc/ProjectCampus-CH/dsz-exam-showboard-next/stargazers)

如果这个项目对您有帮助，请点亮 Star [⭐](#dsz-exam-showboard-next)

</div>
