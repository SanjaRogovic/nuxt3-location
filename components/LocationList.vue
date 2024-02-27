<template>
    <div>
      <h2 class="pico-heading--small">Searched Locations</h2>
      <ul class="pico-list">
        <li v-for="location in searchedLocations" :key="location.id" class="pico-list-item">
          <NuxtLink :to="'/location/' + location.id">{{ location.name }}</NuxtLink>
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
  .pico-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.pico-list__item {
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.pico-heading--small {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}
 
  </style>
  