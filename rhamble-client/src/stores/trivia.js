import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTriviaStore = defineStore('trivia', () => {
    const categories = ref([
        "General Knowledge",
        "Current Events",
        "Pop Culture Moments 2010 to Present",
        "Picture Round - Fictional Pink Characters",
        "Audio Round - Popular Music in Different Styles",
        "Words ending in -tile",
        "Human Biology",
    ]);

    return { categories }
})
