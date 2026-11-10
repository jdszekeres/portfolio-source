<script setup>
    defineProps({
        name: String,
        link: String,
        image: String,
        description: String,
        skills: String,
        categories:String,
        repo: String
    })
    
</script>
<template>
    <div :class="['item '].concat(categories.split(' '))">
        <a :href="link" :aria-label="'See the site for '+name">
            <img 
                :src="image ? image : 'https://placehold.co/600x400/?text=NoImage'" 
                :alt="'Project photo for '+name"
                loading="lazy"
                decoding="async">
        </a>
        <h4>
            <a :href="link">{{name}}</a>
            <a :href="repo" v-if="repo" :aria-label="'Source code for '+name" style="display: inline-block; margin-left: 10px">
                <img src="https://jdszekeres.github.io/project-photos/github-mark-white.svg" alt="" style="width: 24px; height: 24px;" loading="lazy">
            </a>
        </h4>
        
        <p>{{description}}</p>
        <p class="skills">skills learned:<span v-for="(text, index) in skills.split(',')" :key="index"><em><br>{{text}}</em></span></p>
    </div>
</template>
<style scoped>
/* Scoped so these rules no longer restyle every <a>, <p> and <h4> on the page. */
.item {
    width: calc((100% / 3) - (5px * 3));
}
.item img {
    aspect-ratio: 16/9;
    object-fit: cover;
    width: min(100%,500px);
}
h4 {
    width: 100%;
    text-align: center;
    font-size: 24px;
    font-weight: 700; /* bold so the pink title qualifies as large text (3:1) */
    margin: 0.75rem 0 0.5rem;
}
h4 > a {
    color: var(--title-accent);
}
p {
    width: 100%;
    color: var(--text);
    font-size: 16px;
    line-height: 1.5;
}
.skills {
    color: var(--text-muted);
    font-size: 15px;
}

@media screen and (orientation:portrait) {
    .item {
        width: calc(100% - 20px);
    }
}
@media screen and (max-width: 768px) {
    .item {
        width: 100% !important;
    }
    h4 {
        font-size: 20px;
    }
    p {
        font-size: 15px;
    }
}
</style>
