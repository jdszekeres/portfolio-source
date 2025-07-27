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
                :src="(image==='')?'https://placehold.co/600x400/?text=NoImage':image" 
                :alt="'Project photo for'+name"
                loading="lazy"
                decoding="async">
            <h4>{{name}}<a :href="repo" v-if="repo" style="display: inline-block; margin-left: 10px">
            <img src="https://jdszekeres.github.io/project-photos/github-mark-white.svg" style="width: 24px; height: 24px;"  loading="lazy">
        </a></h4>
            
        </a>
        
        <p>{{description}}</p>
        <p>skills learned:<span v-for="(text, index) in skills.split(',')" :key="index"><em><br>{{text}}</em></span></p>
    </div>
</template>
<style>
@media screen and (orientation:portrait) {
    a {
        font-size: 15px;
        overflow: scroll;
    }
    p {
        font-size: 12px;
    }
    .item {
        width: calc(100% - 20px);
    }
}
@media screen and (max-width: 768px) {
    .item {
        width: 100% !important;
    }
    a {
        font-size: 18px;
    }
    p {
        font-size: 14px;
    }
}

h4 {
    width: 100%;
    text-align: center;
    font-family: 'Fira Code', 'Monaco', 'Menlo', 'Roboto', monospace;
}
a {
    font-size: 25px;
}
p {
    width: 100%;
    color: rgb(220,220,220);
    font-size: 16px;
    font-weight: bold;
}
.item {
    width: calc((100% / 3) - (5px * 3));
}
.item img {
    aspect-ratio: 16/9;
    object-fit: cover;
    width: min(100%,500px);
}
</style>