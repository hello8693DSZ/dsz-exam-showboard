// Utilities
import { defineStore } from 'pinia';

export const useProfileStore = defineStore('app', {
  state: () => ({
    examName: '考试名称',
    appHeader: '考试看板',
    message: '考试提醒信息',
    examInfos: []
  }),
  persist: true
});
