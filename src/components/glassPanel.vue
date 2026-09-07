<script setup>
    defineProps({
        width: {
            type: String,
            default: '100%'
        },
        height: {
            type: String,
            default: '100%'
        },
        padding: {
            type: String,
            default: '0'
        },
        style: {
            type: Object,
            default: () => ({})
        }
    })
</script>

<template>
    <div :style="{ width: width, height: height, padding: padding, ...style }" class="glass-panel">
        <div :style="{ width: width, height: height, padding: padding, ...style }" class="glass-panel-content">
            <slot />
        </div>
    </div>
</template>

<style scoped>
.glass-panel {
  /* 1. Semi-transparent background color */
  background: rgba(255, 255, 255, 0.258); 
  
  /* 2. The magic property: blurs the area BEHIND the panel */
  backdrop-filter: blur(4px) saturate(180%);
  -webkit-backdrop-filter: blur(4px) saturate(180%); /* Safari support */

  /* 3. Sleek borders to act as light reflection */
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 16px;

  /* 4. Drop shadow to create depth and lift */
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.2);

  /* Layout basics */

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>