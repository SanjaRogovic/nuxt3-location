<template>
    <div>
      <h2>Searched Locations</h2>
      <ul>
        <li v-for="location in searchedLocations" :key="location.id">
          <router-link :to="'/location/' + location.id">{{ location.name }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { computed } from 'vue';
  import { useLocationStore } from '~/store';
  
  export default {
    setup() {
      const locationStore = useLocationStore();
      const searchedLocations = computed(() => locationStore.searchedLocations);
  
      return {
        searchedLocations,
      };
    },
  };
  </script>
  
  <style scoped>
 
  </style>
  