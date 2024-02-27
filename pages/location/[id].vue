<template>
  <div v-if="location" class="location-details-container">
    <h2>Location Details</h2>
    <p>Location ID: {{ id }}</p>
    <p>Location Name: {{ location.name }}</p>
    <p>Latitude: {{ location.lat }}</p>
    <p>Longitude: {{ location.lon }}</p>
  </div>
  <div v-else class="loading-container">
    <p class="loading">Loading...</p>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useLocationStore } from '~/store';
import { useRoute } from 'vue-router';

export default {
  setup(props, { params}) {
    const id = ref(null);
    const location = ref(null);
    const locationStore = useLocationStore(); // Instantiate the store

    onMounted(async () => {
      // Fetch location details based on $route.params.id
      const route = useRoute();
       id.value = route.params.id 
      console.log("Fetching details for location ID:", id.value);

      try {
        const locationDetails = await locationStore.getLocationDetailsById(id.value);

        if (locationDetails && locationDetails.location) {
          location.value = locationDetails.location;
        } else {
          throw new Error("Location details not found");
        }
      } catch (error) {
        console.error(error);
        throw new Error("Location details not found");
      }
    });

    return {
      id,
      location,
    };
  },
};
</script>

<style scoped>
.location-details-container, .loading-container {
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 5px;
  height: 500px;
  border-radius: 10px;
  box-shadow: 2px 2px 3px rgb(218, 218, 218);
  border: 1px solid #ccc;
  background-color: rgb(252, 252, 252);
}

.location-details-container h2, .loading {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
}

.location-details-container div {
  margin-bottom: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
