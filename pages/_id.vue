<template>
    <div>
      <h2>Location Details</h2>
      <p>Location ID: {{ $route.params.id }}</p>
     
    </div>
  </template>
  
  <script>
  export default {
    async fetch() {
      // Fetch additional details based on $route.params.id
      const locationId = this.$route.params.id;
      // Update local data or Vuex store with detailed information
      console.log("Fetching details for location ID:", locationId);
    },
  };
  </script>
  
  <style scoped>
  /* Add your styling here */
  </style>
  