<script setup>
    const props = defineProps({
        title: String,
        company: String,
        timePeriod: String,
        description: String,
        image: String
    })

    import {ref} from 'vue';
    const hasImage = ref(false);
    if (props.image && props.image !== '') {
        hasImage.value = true;
    }
</script>

<template>
    <div class="job-tile">
        
        <div>
            <div style="display: flex; flex-direction: row; align-items: center; max-height: 10vh; justify-content: center; width: 100%;">
                <img :src="image" v-if="hasImage" :alt="'Company logo for '+company" loading="lazy" decoding="async" style="width: 50px; height: 50px; margin-right: 10px;" />
            <div>
                <h2>{{title}}</h2>
                <h4>{{company}} | {{timePeriod}}</h4>
            </div>
            </div>
            <p>{{description}}</p>
        </div>
    </div>
</template>

<style scoped>
    div > h2, div > h4, div > p {
        margin: 0;
    }
</style>