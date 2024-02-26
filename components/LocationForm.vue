<template>
  <div>
    <h1 class="pico-heading--medium">Search for a location</h1>
    <form class="pico-form" @submit.prevent="submitForm">
      <input class="pico-input" v-model="searchLocation" placeholder="Enter location" />
      <button type="submit" class="pico-button pico-button--primary" >Search</button>
    </form>
  </div>

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
  .pico-heading--large {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
  .pico-button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.pico-button--primary {
    background-color: #4CAF50;
    color: white;
}

.pico-button:hover {
    background-color: #3e8e41;
}

.pico-button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
}

.pico-form {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
}

.pico-input {
    flex-grow: 1;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-right: 0.5rem;
}
  
  </style>
  