<template>
  <main>
    <h1>Rhamble</h1>
    <TeamName v-if="!teamNameSelected" @name-submitted="teamNameSelected = true"/>
    <DoublePointSelection v-if="teamNameSelected && !doublePointSelected" @dp-submitted="doublePointSelected = true"/>
    <Wait v-if="teamNameSelected && doublePointSelected"/>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'
import TeamName from '../components/Player/TeamName.vue'  
import DoublePointSelection from '../components/Player/DoublePointSelection.vue'
import Wait from '../components/Player/Wait.vue'

var teamNameSelected = ref(false);
var doublePointSelected = ref(false);
</script>

<style scoped>

</style>
