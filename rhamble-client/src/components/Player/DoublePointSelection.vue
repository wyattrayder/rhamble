<template>
    <div>Select your double points category, {{ teamStore.teamName }}</div>
    <VItemGroup selected-class="selectedCat">
        <VContainer>
            <VRow v-for="category in triviaStore.categories">
                <VCol cols="12">
                    <VItem v-slot="{ isSelected, selectedClass, toggle }">
                        <VCard :class="[selectedClass]" @click="toggle">
                            <VCardTitle>
                                {{ category }}
                            </VCardTitle>
                        </VCard>
                    </VItem>
                </VCol>
            </VRow>
        </VContainer>
    </VItemGroup>

    <VBtn block @click="submitDoublePoints(category)">Submit</VBtn>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useTeamStore } from '@/stores/team';
import { useTriviaStore } from '@/stores/trivia';

const teamStore = useTeamStore();
const triviaStore = useTriviaStore();
const emit = defineEmits(['dpSubmitted']);

var dpCategory = ref("");

function submitDoublePoints(category) {
    console.log(`Double points submitted for ${category}`);
    emit('dpSubmitted');
}
</script>

<style scoped>
.selectedCat {
    background-color: green;
}
</style>