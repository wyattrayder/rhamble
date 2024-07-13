import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTeamStore = defineStore('team', () => {
    const teamName = ref("");
    const doublePointsCategory = ref(0);

    return { teamName, doublePointsCategory }
})
