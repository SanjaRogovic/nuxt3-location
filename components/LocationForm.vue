<template>
    <form @submit.prevent="submitForm">
      <input v-model="searchLocation" placeholder="Enter location" />
      <button type="submit">Search</button>
    </form>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useLocationStore } from '~/store';
  
  export default {
    props: {
      location: {
        type: String,
        default: "",
      },
    },
    setup(props) {
      const locationStore = useLocationStore();
      const searchLocation = ref(props.location);
  
      const submitForm = () => {
        locationStore.addLocation(searchLocation.value);
        console.log("Searching for location:", searchLocation.value);
      };
  
      return {
        searchLocation,
        submitForm,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add your styling here */
  </style>
  