<script setup>

defineProps({
    skill: {
        type: String,
        required: true
    }
});

</script>

<template>
    <div class="skill" style="display: inline-flex; align-items: center; background-color: rgba(255,255,255,0.8); border-radius: 2px; padding: 4px 8px; margin: 4px;">
        <slot style="color: blue"></slot>
        <span style="color: black; font-family: sans-serif; font-weight: 700; font-size: 18px;">{{ skill }}</span>
    </div>
</template>