<template>
    <div>
      <h2>Suggested Locations</h2>
      <ul>
        <li v-for="suggestedLocation in suggestedLocations" :key="suggestedLocation.id">
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
  /* Add your styling here */
  </style>
  