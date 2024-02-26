<template>
    <div class="pico-container">
      <LocationForm :location="selectedLocation" />
      <SuggestedLocations />
      <LocationList />
    </div>
  </template>
  
  <script>
  import LocationForm from '~/components/LocationForm.vue';
  import SuggestedLocations from '~/components/SuggestedLocations.vue';
  import LocationList from '~/components/LocationList.vue';
  
  export default {
    components: {
      LocationForm,
      SuggestedLocations,
      LocationList,
    },
    data() {
      return {
        selectedLocation: "",
      };
    },
  };
  </script>
  
  <style scoped>
  .pico-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;
}
 
  </style>
  