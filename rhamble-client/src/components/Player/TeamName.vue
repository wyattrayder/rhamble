<template>
    <div>Choose your team name!</div>
    <VTextField v-model="teamName">

    </VTextField>
    <VBtn block @click="submitName">Submit</VBtn>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useTeamStore } from '@/stores/team';

const teamStore = useTeamStore();
const emit = defineEmits(['nameSubmitted'])

var teamName = ref("");

function submitName() {
    console.log(`Team name stored as ${teamName.value}`)
    emit('nameSubmitted');
    teamStore.teamName = teamName.value;
}
</script>

<style scoped>

</style>