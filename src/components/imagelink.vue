<script setup>
defineProps({
    link: String,
    image: String,
})
</script>

<template>
    <a :href="link" style="text-decoration: none; display: block;">
        <img :src="image" alt="linkedin" style="width: 32px;" />
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