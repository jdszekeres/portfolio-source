<script setup>
defineProps({
    link: String,
    image: String,
    width: {type: String, default: '64px'}
})
</script>

<template>
    <a :href="link" style="text-decoration: none; display: block;">
        <img :src="image" :alt="'Logo for' + image" :style="'width:'+width+';'" />
        &nbsp;
    </a>
</template>

<style>
@media (hover: hover) {
    a:hover {
        background-color: transparent;
    }
}
</style>