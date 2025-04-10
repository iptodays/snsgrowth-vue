import { defineStore } from "pinia";
import { request } from "~/api/api";
import type { ConfigData } from "~/api/types";

export const useAppStore = defineStore('app', {
  state: () => ({
    config: undefined as undefined | ConfigData,
  }),
  actions: {
    async fetchConfig() {
      if (this.config) {
        return;
      }
      const resp = await request('/settings')
      if (resp.isOk) {
        this.config = resp.data
      }
    },
  },
});