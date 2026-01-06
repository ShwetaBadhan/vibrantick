import {defineStore} from pinia

export const useIndustryStore = defineStore('industry',{
     state: () => ({
    industryData: null
  }),

  actions: {
    setIndustryData(data) {
      this.industryData = data
    }
  }
})