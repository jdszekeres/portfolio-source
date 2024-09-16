<script setup>
    defineProps({
        name: String,
        link: String,
        image: String,
        description: String,
        skills: String,
        categories:String
    })
    
</script>
<template>
    <link rel="preload" fetchpriority="high" as="image" :href="(image==='')?'https://placeholder.co/600x400/?text=NoImage':image" type="image/png">
    <div :class="['item '].concat(categories.split(' '))">
        
        <a :href="link" :aria-label="'See the site for '+name">
            <img :src="(image==='')?'https://placeholder.co/600x400/?text=NoImage':image" :alt="'Project photo for'+name">
            <h4>{{name}}</h4>
        </a>
        <p>{{description}}</p>
        <p>skills learned:<span v-for="(text, index) in skills.split(',')" :key="index"><em><br>{{text}}</em></span></p>
    </div>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Fira+Code&family=Roboto:wght@500&display=swap');
     @media screen and (orientation:portrait) {
         a {
          font-size: 15px;
          overflow: scroll;
         }
         p {
             font-size: 12px;
         }
         .item {
             width: calc(100% / 2 - (10px * 2));
         }
     }
    .item {
        width: calc((100% / 3) - (5px * 3));
        height: 50%;
        padding: 5px;
    }
    img {
        width: min(100%,500px); 
    }
    h4 {
        width: 100%;
        text-align: center;
        font-family: 'Fira Code', 'Roboto',sans-serif;
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
</style>