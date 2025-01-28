<div align="center">

# <image src="resources/icon.png" height="36"/> ExamShowboard

[![stars](https://img.shields.io/github/stars/ExamAware/dsz-exam-showboard?label=Stars)](https://github.com/ExamAware/dsz-exam-showboard/stargazers)
[![forks](https://img.shields.io/github/forks/ExamAware/dsz-exam-showboard?label=Forks)](https://github.com/ExamAware/dsz-exam-showboard/forks)
[![Watchers](https://img.shields.io/github/watchers/ExamAware/dsz-exam-showboard?style=social)](https://github.com/ExamAware/dsz-exam-showboard/watchers)
[![Downloads](https://img.shields.io/github/downloads/ExamAware/dsz-exam-showboard/total?style=social&label=Downloads&logo=github)](https://github.com/ExamAware/dsz-exam-showboard/releases)
[![Visitors](https://api.visitorbadge.io/api/combined?path=https%3A%2F%2Fgithub.com%2FExamAware%2Fdsz-exam-showboard&label=Visitors&countColor=%23263759&style=flat&labelStyle=none)](https://visitorbadge.io/status?path=https%3A%2F%2Fgithub.com%2FExamAware%2Fdsz-exam-showboard)
[![GitHub Issues](https://img.shields.io/github/issues-search/ExamAware/dsz-exam-showboard?query=is%3Aopen&style=flat&logo=github&label=Issues&color=%233fb950)](https://github.com/ExamAware/dsz-exam-showboard/issues)
[![Created At](https://img.shields.io/github/created-at/ExamAware/dsz-exam-showboard)](https://github.com/ExamAware/dsz-exam-showboard)
[![Github Last Commit](https://img.shields.io/github/last-commit/ExamAware/dsz-exam-showboard)](https://github.com/ExamAware/dsz-exam-showboard/commits/master)
[![LICENSE](https://img.shields.io/badge/License-GPL--3.0-red.svg 'LICENSE')](LICENSE)
[![QQ群](https://img.shields.io/badge/-QQ%E7%BE%A4%EF%BD%9C901670561-blue?style=flat&logo=QQ)](https://qm.qq.com/q/zDiEipHsaI)
[![All Contributors](https://img.shields.io/github/all-contributors/ExamAware/dsz-exam-showboard?color=ee8449)](#贡献者)
[![Build and Package Electron App](https://github.com/ExamAware/dsz-exam-showboard/actions/workflows/build.yaml/badge.svg)](https://github.com/ExamAware/dsz-exam-showboard/actions/workflows/build.yaml)

![HomePage](/.Screenshots/HomePage.png)
![InfoPage](/.Screenshots/InfoPage.png)

一款显示当前时间与考试详细信息的显示工具

| 下载 | [Releases](https://github.com/ExamAware/dsz-exam-showboard/releases) | [Actions](https://github.com/ExamAware/dsz-exam-showboard/actions) |
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

默认安装路径 `AppData\Local\Programs\exam-showboard`

- 编写 `json` 配置文件
  - 您可以前往 [ `ExamShowBoardEditor`](https://github.com/ExamAware/DSZExamShowBoardEditor/releases) 获取配置文件编辑器
  - 您可以按照[手动编写 `json` 配置文件](https://github.com/ExamAware/dsz-exam-showboard/tree/master/doc/Manually-write-JSON-configuration-file.md)教程编写配置文件
- 打开软件，进入起始页面，点击 `打开配置` 按钮，选择配置文件
- 或使用集控（仿照 [`ClassIsland` 集控使用方法](https://docs.classisland.tech/management/tutorial-create-management-config.html)）
  - 新建 GitHub 公开存储仓库
  - 上传上面提到的 `exam_config.json` 文件
  - 复制 `Raw` 直链粘贴到应用 `请求地址` 文本框并保存

> [!tip]
>
> 可以在 `Raw 文件` 前加上镜像源，如
>
> ```txt
> https://github.moeyy.xyz/https://raw.githubusercontent.com/{owner}/{repo}/refs/heads/main/exam_config.json
> ```

- 点击`请求配置`加载配置文件并进入看板（下次可直接点击`直接进入看板`加载上次配置文件）

## 遇到问题

💡 如果您遇到 `Bug` ，或需要提出`优化`建议或新的`功能`，请提交 [`Issues`](https://github.com/ExamAware/dsz-exam-showboard/issues) 或在 [`Discussions`](https://github.com/ExamAware/dsz-exam-showboard/discussions) 中讨论。

👥 您也可以加入 [`QQ群｜901670561`](https://qm.qq.com/q/zDiEipHsaI)获取帮助或交流讨论。

🛠️ 欢迎为本软件进行改进或编写新功能提交 [`Pull Request`](https://github.com/ExamAware/dsz-exam-showboard/pulls)

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

- 正在 [`master`](https://github.com/ExamAware/dsz-exam-showboard/commits/master) 分支上维护`v1.2`版本。

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
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/fhzit"><img src="https://avatars.githubusercontent.com/u/152045732?v=4?s=100" width="100px;" alt="fhzit"/><br /><sub><b>fhzit</b></sub></a><br /><a href="#code-fhzit" title="Code">💻</a> <a href="#bug-fhzit" title="Bug reports">🐛</a> <a href="#doc-fhzit" title="Documentation">📖</a></td>
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

[![Star 历史](https://starchart.cc/ExamAware/dsz-exam-showboard.svg?variant=adaptive)](https://starchart.cc/ExamAware/dsz-exam-showboard/stargazers)

如果这个项目对您有帮助，请点亮 Star ⭐｜[返回顶部](#%20%3Cimage%20src=%22resources/icon.png%22%20height=%2236%22/%3E%20ExamShowboard)

</div>
