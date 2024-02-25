<template>
    <div>
      <h2>Location Details</h2>
      <p>Location ID: {{ id }}</p>
     
    </div>
  </template>
  
  <script>
  export default {
    async fetch() {
      // Fetch additional details based on $route.params.id
      const { id } = useRoute().params.id;
      // Update local data or Vuex store with detailed information
      console.log("Fetching details for location ID:", id);
    },
  };
  </script>
  
  <style scoped>
 
  </style>
  