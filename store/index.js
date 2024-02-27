import { defineStore } from 'pinia';

export const useLocationStore = defineStore({
  id: 'location',
  state: () => ({
    searchedLocations: [],
    locationDetails: null,
  }),
  actions: {
    async addLocation(query) {
      try {
        const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${query}&format=json`);
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        console.log("RESPONSE ALL LOCATIONS", data);
        this.searchedLocations.push(...data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },


    async getLocationDetailsById(id) {
      try {
        const response = await fetch(`https://nominatim.openstreetmap.org/details?place_id=${id}`);

        if (!response.ok) {
          throw new Error(`Failed to fetch location details: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        console.log("RESPONSE LOCATION DETAILS", data);
        this.locationDetails = data;

        return data; 
      } catch (error) {
        console.error('Error fetching location details:', error);
        throw error;
      }
    },
  },
});

// Export the function to create a new store instance
export function setup() {
  return useLocationStore();
}
