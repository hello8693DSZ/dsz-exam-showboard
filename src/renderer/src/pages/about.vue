<template>
  <v-container class="main-container" fill-height>
    <v-row justify="center" align="center">
      <v-col cols="12" md="10">
        <v-card class="pa-4" outlined>
          <v-card-title class="text-h3">关于考试看板</v-card-title>
          <v-card-text>
            <p class="text-lg">
              欢迎使用考试看板，这是一款用于展示考试信息的工具，帮助考生更好地了解考试信息与状态。
            </p>
            <p class="text-lg">本软件旨在为考生提供便捷的考试信息查看体验。</p>          
            <p>版本号：1.2.0 正式版</p>
            <p class="text-lg">
              开发者：
              <v-btn
                href="https://github.com/hello8693DSZ"
                target="_blank"
                text
                color="primary"
                class="developer-link"
              >
                Hello8963
              </v-btn>
              &
              <v-btn
                href="https://github.com/MKStoler4096"
                target="_blank"
                text
                color="primary"
                class="developer-link"
              >
                Mkstoler4096
              </v-btn>
            </p>
            <v-btn
              href="https://github.com/ProjectCampus-CH/dsz-exam-showboard-next"
              target="_blank"
              color="primary"
              class="mt-4 normal-case"
            >
              在 GitHub 上查看源代码
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.main-container {
  padding: 20px;
  display: flex;
  align-items: center;
}

.v-card {
  width: 100%;
  max-width: 800px;
  margin: auto;
  transition: transform 0.3s ease-in-out;
}

.v-card:hover {
  transform: scale(1.05);
}

.text-h3 {
  font-size: 2.5em !important;
}

.text-lg {
  font-size: 1.2em;
}

.v-btn {
  height: 48px;
  font-size: 1.1em;
}

.developer-link {
  font-size: 1em;
  text-transform: none;
  margin-left: 5px;
}

.normal-case {
  text-transform: none !important;
}
</style>