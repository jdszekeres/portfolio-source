<script setup>
    defineProps({
        name: String,
        link: String,
        subtitle: String,
        description: String,
        image: String,
        skills: String,

        left: {
            type: Boolean,
            default: false
        }
    })


</script>
<template>
<div :class="{ 'left': left}" class="big-project">
    <img 
        :src="(image==='')?'https://placehold.co/600x400/?text=NoImage':image" 
        :alt="'Project photo for '+name"
        loading="lazy"
        decoding="async"
        style="width: 50vw; min-width: 40%; height: auto;">
        <div>
            <h2 style="margin-bottom: 0"><a :href="link" :aria-label="'See the site for '+name">{{name}}</a></h2>
            <h4 v-if="subtitle" style="margin-top: 0">{{subtitle}}</h4>
            <p style="font-family: sans-serif;">{{description}}</p>
            <br>
            <p><span style="font-family: sans-serif; font-size: small;">{{ skills }}</span></p>
        </div>
</div>
</template>
<style scoped>

.big-project {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    margin: 20px 0;
    gap: 20px;
    height: 50vh;
    width: 100%;
}

.left {
    flex-direction: row-reverse;
}



</style>
