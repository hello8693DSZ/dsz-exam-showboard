// Utilities
import { defineStore } from 'pinia';

export const useAppStore = defineStore('app', {
  state: () => ({
    examName: '考试名称',

    roomName: '考场名称',
    message: '考试提醒信息',
    examInfos: []
  })
});
