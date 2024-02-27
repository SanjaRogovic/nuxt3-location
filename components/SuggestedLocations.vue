<template>
    <div>
      <h2 class="pico-heading--small">Suggested Locations</h2>
      <ul class="pico-list">
        <li v-for="suggestedLocation in suggestedLocations" :key="suggestedLocation.id" class="pico-list-item">
          <a @click="selectSuggestedLocation(suggestedLocation.name)">{{ suggestedLocation.name }}</a>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useLocationStore } from '~/store';
  
  export default {
    setup() {
      const locationStore = useLocationStore();
      const suggestedLocations = ref([
        { id: 1, name: "New York" },
        { id: 2, name: "London" },
        { id: 3, name: "Paris" },
      ]);
  
      const selectSuggestedLocation = (location) => {
        locationStore.addLocation(location);
      };
  
      return {
        suggestedLocations,
        selectSuggestedLocation,
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
  text-decoration: none;
  color: #0066cc;
  display: block;
}

.pico-heading--small {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}
 
  </style>
  