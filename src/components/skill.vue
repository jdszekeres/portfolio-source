<script setup>

defineProps({
    skill: {
        type: String,
        required: true
    }
});

</script>

<template>
    <div class="skill" style="display: inline-flex; align-items: center; gap: 6px; background-color: #ffffff; border-radius: 4px; padding: 4px 10px; margin: 4px;">
        <slot></slot>
        <span style="color: #1E1B5C; font-weight: 500; font-size: 17px;">{{ skill }}</span>
    </div>
</template>