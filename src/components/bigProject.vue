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
        },
        // Show the whole image with bars instead of cropping (for wide/odd-shaped images)
        letterbox: {
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
        :class="['project-image', { letterbox }]">
        <div class="project-text">
            <h2 style="margin-bottom: 0"><a :href="link" :aria-label="'See the site for '+name">{{name}}</a></h2>
            <h4 v-if="subtitle" style="margin-top: 0">{{subtitle}}</h4>
            <p class="description">{{description}}</p>
            <p class="skills">{{ skills }}</p>
        </div>
</div>
</template>
<style scoped>

.big-project {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    /* No fixed height: the row grows to fit its image and text instead of
       letting a tall image spill into the next project. */
    margin: 3rem 0;
    gap: 2rem;
    width: 100%;
    box-sizing: border-box;
}

.project-image {
    flex: 0 0 auto;
    width: min(45%, 560px);
    aspect-ratio: 4 / 3;
    max-height: 60vh;
    object-fit: cover;
    border-radius: 12px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3), 0 0 32px rgba(242, 82, 125, 0.25);
}

.project-image.letterbox {
    object-fit: contain;
    background: rgba(30, 27, 92, 0.7);
}

.project-text {
    flex: 1 1 0;
    min-width: 0;
}

.left {
    flex-direction: row-reverse;
}

h2 {
    font-size: 2rem;
}
h2 a {
    color: var(--title-accent);
}
h4 {
    color: var(--text-muted);
    font-weight: 400;
}
.description {
    font-size: 1.05rem;
    line-height: 1.6;
    max-width: 60ch;
    margin: 1rem auto;
}
.skills {
    color: var(--text-muted);
    font-size: 0.9rem;
    margin-top: 1.5rem;
}

@media screen and (max-width: 768px) {
    .big-project,
    .left {
        flex-direction: column;
        gap: 1rem;
        margin: 2rem 0;
    }
    .project-image {
        width: 100%;
        max-height: 50vh;
    }
}



</style>
