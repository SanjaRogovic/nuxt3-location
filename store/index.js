// store/index.js

import { defineStore } from 'pinia';

export const useLocationStore = defineStore({
  id: 'location',
  state: () => ({
    searchedLocations: [],
  }),
  actions: {
    addLocation(location) {
      this.searchedLocations.push(location);
    },
  },
});
