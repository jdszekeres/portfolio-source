<script setup>
import project from './components/project.vue';
import imagelink from './components/imagelink.vue';
import {ref} from 'vue';
//here's the template
// {
//     name: "",
//     skills: "",
//     categories: "",
//     link: "",
//     image: "",
//     description: ""
// }
const projects = ref([
    {
        name: "Airport Game",
        skills: "JSON,leaderboard",
        categories: "c a fav",
        link: "https://jdszekeres.github.io/airport.html",
        image: "https://raw.githubusercontent.com/jdszekeres/jdszekeres.github.io/main/project-photos/airport-game.png",
        description: "Try to guess all the airports in the US (There's over 350)"
    },
    {
        name: "Chess.com Stats",
        skills: "API,graphs",
        categories: "c",
        link: "https://jdszekeres.github.io/chesscom.html",
        image: "https://raw.githubusercontent.com/jdszekeres/jdszekeres.github.io/main/project-photos/chesscom-stats.png",
        description: "Uses chess.com open database to look at your chess skills statistically"
    },
    {
        name: "Pixel Art Color by Number",
        skills: "JSON,user settings,UI design",
        categories: "c fav",
        link: "https://jdszekeres.github.io/pixelart.html",
        image: "https://raw.githubusercontent.com/jdszekeres/jdszekeres.github.io/main/project-photos/pixel-color-by-number.png",
        description: "A color by number game on a 32x32 grid"
    },
    {
        name: "Reigonle",
        skills: "maps,wordle style random generation",
        categories: "c g fav",
        link: "https://jdszekeres.github.io/reigonle.html",
        image: "https://raw.githubusercontent.com/jdszekeres/jdszekeres.github.io/main/project-photos/reigonle.png",
        description: "A wordle type game where you guess a country every day to fill in your map"
    },
    {
        name: "War ♤♧♡♢",
        skills: "API",
        categories: "c",
        link: "https://jdszekeres.github.io/war.html",
        image: "https://raw.githubusercontent.com/jdszekeres/jdszekeres.github.io/main/project-photos/war-cards.png",
        description: "To prove war is all luck, play this bot."
    },
    {
        name: "Word Guess",
        skills: "wordle style random generation,API",
        categories: "c",
        link: "https://jdszekeres.github.io/wordguess.html",
        image: "https://raw.githubusercontent.com/jdszekeres/jdszekeres.github.io/main/project-photos/word-guess.png",
        description: "A wordle type game where you guess a word by searching for synomyns and rythming words"
    },
    {
        name: "Machine Learning Class",
        skills: "machine learning",
        categories: "c",
        link: "https://jdszekeres.github.io/ml.html",
        image: "",
        description: "ML program for a class I took"
    },
    {
        name: "Chrome Startup Screen",
        skills: "perlin noise, reverse engineering",
        categories: "c fav",
        link: "https://jdszekeres.github.io/chrome.html",
        image: "https://raw.githubusercontent.com/jdszekeres/jdszekeres.github.io/main/project-photos/browser-start-screen.png",
        description: "A start screen that includes all the strange holidays and a procedural heightmap gradient",
        repo: "https://github.com/jdszekeres/chrome-wallpaper"
    },
    {
        name: "Projectile Motion Calc",
        skills: "trig",
        categories: "c",
        link: "https://jdszekeres.github.io/projectile%20motion.html",
        image: "https://raw.githubusercontent.com/jdszekeres/jdszekeres.github.io/main/project-photos/projectile-motion.png",
        description: "A calculator that calculates projectile motion based on Firing Angle and Exit Speed"
    },
    {
        name: "Wage counter",
        skills: "setInterval,setTimeout",
        categories: "c",
        link: "https://jdszekeres.github.io/wage.html",
        image: "https://raw.githubusercontent.com/jdszekeres/jdszekeres.github.io/main/project-photos/income-clock.png",
        description: "A timer that calculates how much you earn"
    },
    {
        name: "Space Invader",
        skills: "pygame",
        categories: "c",
        link: "https://github.com/jdszekeres/space-invader",
        image: "https://raw.githubusercontent.com/jdszekeres/jdszekeres.github.io/main/project-photos/space-invader.png",
        description: "Space invaders in python (Multiple Levels)"
    },
    {
        name: "EZL",
        skills: "lexing",
        categories: "c",
        link: "https://github.com/jdszekeres/ezl",
        image: "https://raw.githubusercontent.com/jdszekeres/jdszekeres.github.io/main/project-photos/ezl.png",
        description: "A mini programming language interperted in python",
        
    },
    {
        name: "FlaskEnv",
        skills: "bash download",
        categories: "c",
        link: "https://github.com/jdszekeres/flaskenv",
        image: "",
        description: "Easily create a mini flask enviroment",
    },
    {
        name: "Window Seat Simulator",
        skills: "maps,API,Mapbox",
        categories: "c a fav",
        link: "https://github.com/jdszekeres/windowseat",
        image: "https://jdszekeres.github.io/project-photos/windowseat.jpg",
        description: "A program that uses angled satelite imagery to simulate the view outside of a plane",
        repo: "https://github.com/jdszekeres/windowseat"
    },
    {
        name: "Choose Your Own Adventure",
        skills: "recursion,story telling",
        categories: "c",
        link: "https://replit.com/@wong-csf-f23-p1/U109c-Python-Adventure-Project-jdszekeres?embed=true",
        image: "https://t3.ftcdn.net/jpg/06/22/07/90/360_F_622079039_2mFtFQpSv7Z9hdcDdWHj1eTNZIwQP5Z0.jpg",
        description: "A chose your own adventure for my CS class. Ms. Wong why didn't you tell me we didn't we didn't need 4³ endings?"
    },
    {
        name: "City Builder",
        skills: "sqlite,pixel art",
        categories: "c g",
        link: "https://github.com/jdszekeres/city-builder",
        image: "https://jdszekeres.github.io/project-photos/city-builder.png",
        description: "A clone of Sim City build it in the browser with subpar graphics"
    },
    {
        name: "City Builder 2: electric boogaloo",
        skills: "JSON,pixel art,UI design",
        categories: "c g",
        link: "https://github.com/jdszekeres/citybuilder2.0",
        image: "https://jdszekeres.github.io/project-photos/citybuilder2.png",
        description: "A more complex better looking (At least that's what I tell myself) version on citybuilder1.0"
    },
    {
        name: "Gimkit Pratice Test",
        skills: "reverse engineering,bootstrap",
        categories: "c",
        link: "https://jdszekeres.github.io/gimkittest.html",
        image: "https://jdszekeres.github.io/project-photos/gimkit.png",
        description: "A reskinned version of Gimkit practice questions"
    },
    {
        name: "Spotify Game",
        skills: "API,oauth",
        categories: "c fav",
        link: "https://jdszekeres.github.io/spotify.html",
        image: "https://jdszekeres.github.io/project-photos/spotify.png",
        description: "A spotify game that uses the spotify API to get your playlists and quiz you on how well you know your playlists"
    },
    {
        name: "Trivia",
        skills: "API",
        categories: "c",
        link: "https://jdszekeres.github.io/trivia.html",
        image: "https://jdszekeres.github.io/project-photos/trivia.png",
        description: "A trivia game that uses the trivia api"
    },
    {
        name: "dispenser",
        skills: "CAD",
        categories: "3",
        link: "https://www.thingiverse.com/thing:6286816",
        image: "",
        description: "A dispenser for solid objects"
    },
    {
        name: "All Things Dashboard",
        skills: "API,reverse enginnering,UI design,user settings",
        categories: "c fav",
        link: "https://allthingsdashboard.vercel.app/settings",
        image: "https://jdszekeres.github.io/project-photos/allthingsdashboard.png",
        description: "A central dashboard to integrate your favorite data sources into one view"
    },
    {
        name: "IOCCC Hacker Type Feed",
        skills: "scraping",
        categories: "c",
        link: "https://replit.com/@jdszekeres/IOCCC-Hacker-Type?",
        image: "https://jdszekeres.github.io/project-photos/hackerType.png",
        description: "Generates a file you can upload to hackertype.net to use ioccc data (It looks much better)"
    },
    {
        name: "Aeries Parser",
        skills: "reverse engineering,API",
        categories: "c",
        link: "https://jdszekeres.github.io/aeriesparser.html",
        image: "https://jdszekeres.github.io/project-photos/aeriesparser.png",
        description: "A parser for the popular SIS program Aeries that gets a static version of the site and allows it to do thing like calculate final grades."
    },
    {
        name: "Ticking Timer",
        skills: "audio",
        categories: "c",
        link: "https://jdszekeres.github.io/tickingtimer.html",
        image: "",
        description: "A timer that counts down to a set time with a ticking sound. Made for my English teacher.",
        repo: "https://github.com/jdszekeres/Tick-Timer"
    },
    {
        name: "Trail Markers",
        skills: "UI Design, Figma, file upload",
        categories: "c g",
        link: "https://jdszekeres.github.io/strava.html",
        image: "https://raw.githubusercontent.com/jdszekeres/trailMarkers/main/screenshot.png",
        description: "A website that allows you to upload a running route and calculates how much time it takes you to run an individual section",
        repo: "https://github.com/jdszekeres/trailMarkers"
    },
    {
        name: "Köppen Flights",
        skills: "Turfjs, tailwind, geoJSON, UI Design",
        categories: "c g a",
        link: "https://jdszekeres.github.io/koppenFlight.html",
        image: "https://raw.githubusercontent.com/jdszekeres/jdszekeres.github.io/main/project-photos/koppenFlight.png",
        description: "A website that allow you to examine the distribution of Köppen-Geiger climate zones across a flight path",
        repo: "https://github.com/jdszekeres/koppenFlights"
    },
    {
        name: "Virtual Real Estate",
        skills: "API, THREE.js, leaflet, UI Design",
        categories: "c g fav",
        link: "https://jdszekeres.github.io/virtualRealEstate/",
        image: "https://jdszekeres.github.io/project-photos/virtualRealEstate.png",
        description: "A site that allow you to model a house or building on a piece of virtual land based on satelite imagery",
        repo: "https://github.com/jdszekeres/virtualRealEstate"
    },
    {
        name: "Correct Horse Battery Staple Password Generator",
        skills: "API, pure-css",
        categories: "c",
        link: "https://jdszekeres.github.io/passwordEntropy.html",
        image: "",
        description: "A password generator that allow you to drop in categories of words"
    },
    {
        name: "Top Down Geography Guesser",
        skills: "API, map, nodejs, express, adsense",
        categories: "c g a fav",
        link: "https://top-down-geo-guesser.vercel.app/",
        image: "https://jdszekeres.github.io/project-photos/geo-guesser.png",
        description: "A site similar to geo guesser, but it presents locations in the form of tiles",
        repo: "https://github.com/jdszekeres/top-down-geo-guesser"
    },
    {
        name: "Custom 2048",
        skills: "JS, Readme, ChatGPT, reverse engineering",
        categories: "c",
        link: "https://jdszekeres.github.io/2048.html",
        image: "https://repository-images.githubusercontent.com/874544784/e30592d3-9781-42f5-a250-89fe50524067",
        description: "A github template that allows you to customize the game 2048 to your liking",
        repo: "https://github.com/jdszekeres/custom-2048"
    }
]);
let filteredCategories = ref([]);
let filteredProjects = ref(projects.value);
function filterProjects(category) {
    // Check if the clicked category is already filtered
    const isCategoryFiltered = filteredCategories.value.includes(category);

    ["c", "a", "3", "g", "fav"].forEach((category) => {
        document.getElementById(category).classList.remove("selected");
    });
    if (!isCategoryFiltered) {
        document.getElementById(category).classList.add("selected");
    } else {
        document.getElementById(category).classList.remove("selected");
    }

    // Clear existing filters
    filteredCategories.value = [];

    // If the clicked category is not already filtered, add it to filteredCategories
    if (!isCategoryFiltered && category !== "") {
        filteredCategories.value.push(category);
    }

    // Filter projects based on the latest filtered category
    filteredProjects.value = projects.value.filter((project) =>
        filteredCategories.value.length === 0 || project.categories.split(" ").some(x=>x===category)
    );
}


</script>

<template>


    <main>
        <div class="top-section" style="height: 100vh; display: flex;">
            <div style="width: 49vw; height: 90%;">
                <h1 style="text-align: left;">👋Hi, I'm jdszekeres👋</h1>
                <h2 style="text-align: unset;" class="emoji">Right now, I'm a Sophmore in High School with an interest in Computer Science🧑‍💻, Geography🗺️, aviation✈️ and 3D printing<img src="https://emojis.slackmojis.com/emojis/images/1702933057/82860/3d-printer.png" style="width: 24px; height: 24px">. My favorite programming languages are <code>Python && Javascript</code>. If I'm not glued to a screen, you can find me running🏃‍♂️, biking🚵, hiking🥾, exploring the great outdoors🌄, or learning Spanish🇪🇸 and Hungarian🇭🇺. I am currently taking <em>Exploring Computer Science</em>💻 as part of my school's <a href="https://www.sduhsd.net/Departments/Educational-Services/Course-of-Study---Curriculum/Course-of-Study/Career-Technical-Education/index.html">CTE program</a>.</h2>
            </div>
            
            <div style="width: 50vw; height: 90%; display: flex; justify-content: end; flex-wrap: wrap;">
                <h3 style="text-align: center; width: 100%">You can look for me here:</h3>
                <div style="display: flex; justify-content: center; width: 100%; align-content: start">
                    <imagelink link="www.linkedin.com/in/jdszekeres" image="LI-logo.png" />
                    <imagelink link="https://github.com/jdszekeres" image="github-mark.svg" />
                    <imagelink link="https://github.com/CCA-AppDev" image="cca-appdev.png"/> 
                    <imagelink link="https://leetcode.com/u/jdszekeres/" image="leetcode.png" />
                </div>
                <h3 style="text-align: center; width: 100%">Here are some projects I'm working on right now:</h3>
                <div style="width: 100%; display: flex; flex-wrap: wrap; justify-content: center;">
                <img src="https://github-readme-stats.vercel.app/api/pin/?username=jdszekeres&repo=top-down-geo-guesser&theme=radical">
                <img src="https://github-readme-stats.vercel.app/api/pin/?username=jdszekeres&repo=custom-2048&theme=radical">
                </div>
                <p></p>
            </div>
            <h3 style="text-align: center; width: 100%; height: 10%; position: absolute; bottom: 0">
                more projects down here<br>
                <span class="pulse">🠟</span>
            </h3>
        </div>
        

        
        
                <h3 style="font-size: 36px;">Filter my projects by</h3>
                <div id="hobbys">
                    <button class="hobby" id="c" @click="filterProjects('c')" style="min-width: 250px !important">
                        <div id="hack">Computer Science</div>
                    </button>
                    <button class="hobby landing-pad" id="a" @click="filterProjects('a')" style="min-width: 250px !important">
                        <div id="aviation">aviation</div>
                    </button>
                    <button class="hobby" @click="filterProjects('3')" id="3">3D printing</button>
                    <button class="hobby" @click="filterProjects('g')" id="g">Geography</button>
                </div>
                <br><br><br>
                <div style="width: 100%; display: flex; justify-content: center">
                    <button class="hobby" id="fav" @click="filterProjects('fav')">My Favorite Projects</button>
                </div>
                <div id="projects">
                    <project v-for="(p, index) in filteredProjects" :key="index" :skills="p.skills"
                        :categories="p.categories" :name="p.name" :link="p.link" :image="p.image"
                        :description="p.description" :repo="p.repo"></project>
                </div>

    </main>
</template>
<style scoped>
#projects {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    
}
@media screen and (orientation:portrait) {
    .hobby {
        width: 100%;
    }
}
@media screen and (max-width: 768px) {
    .top-section > div {
        width: 100% !important;
    }
    .top-section {
        height: unset !important;
    }
    #projects {
        flex-direction: column;
        align-items: center;
        
    }
    h1 {
        font-size: 48px;
    }
    .hobby {
        width: 100%;
        font-size: 18px;
    }
    #hobbys {
        flex-direction: column;
        margin: 0px !important;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .top-section {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
    .top-section div {
        width: 100%;
    }
    .top-section h1 {
        text-align: center;
    }
    .top-section h2 {
        text-align: center;
    }
    .top-section h3 {
        position: unset !important;
    }
}
#projects {
    display: flex;
    flex-wrap: wrap;
}
h1 {
    font-weight: 800;
    font-size: 64px;
    font-family: "roboto";
    width: 100%;
    text-align: center;
    color: radial-gradient(circle, rgba(41,41,39,1) 0%, rgba(64,59,14,1) 100%)
}
h2, h3 {
    text-align: center;
}
#hobbys {
    margin: auto;
    text-align: center;
    width: 100%;
    overflow-wrap: wrap;
}
.hobby {
    margin: 10px;
    padding: 10px;
    font-size: 22px;
    background: none;
    outline: 3px solid black;
    border: 0px;
    height:50.4px; 
    position:relative;
}
#c {
    color: rgb(120,255,120);
    min-width: 200px;
}
#hack {
    font-family: monospace;
    font-size: 20px;
    white-space: nowrap;
    text-shadow: 0 2px 2px rgba(#000, 0.9);
}
@keyframes landing {
    100% {transform: translate(35.0%,60%);}99% {transform: translate(34.3%,60%);}98% {transform: translate(33.6%,60%);}97% {transform: translate(32.9%,60%);}96% {transform: translate(32.2%,60%);}95% {transform: translate(31.5%,60%);}94% {transform: translate(30.8%,60%);}93% {transform: translate(30.1%,60%);}92% {transform: translate(29.4%,60%);}91% {transform: translate(28.7%,60%);}90% {transform: translate(28.0%,60%);}89% {transform: translate(27.3%,60%);}88% {transform: translate(26.6%,60%);}87% {transform: translate(25.9%,60%);}86% {transform: translate(25.200000000000003%,60%);}85% {transform: translate(24.5%,60%);}84% {transform: translate(23.8%,60%);}83% {transform: translate(23.1%,60%);}82% {transform: translate(22.4%,60%);}81% {transform: translate(21.700000000000003%,60%);}80% {transform: translate(21.0%,60%);}79% {transform: translate(20.3%,60%);}78% {transform: translate(19.6%,60%);}77% {transform: translate(18.900000000000002%,60%);}76% {transform: translate(18.200000000000003%,60%);}75% {transform: translate(17.5%,60.0%);}74% {transform: translate(16.8%,58.4%);}73% {transform: translate(16.1%,56.8%);}72% {transform: translate(15.400000000000002%,55.199999999999996%);}71% {transform: translate(14.700000000000003%,53.599999999999994%);}70% {transform: translate(14.0%,52.0%);}69% {transform: translate(13.3%,50.4%);}68% {transform: translate(12.600000000000001%,48.8%);}67% {transform: translate(11.900000000000002%,47.199999999999996%);}66% {transform: translate(11.200000000000003%,45.599999999999994%);}65% {transform: translate(10.5%,44.0%);}64% {transform: translate(9.8%,42.4%);}63% {transform: translate(9.100000000000001%,40.8%);}62% {transform: translate(8.400000000000002%,39.199999999999996%);}61% {transform: translate(7.700000000000003%,37.599999999999994%);}60% {transform: translate(7.0%,36.0%);}59% {transform: translate(6.300000000000001%,34.39999999999999%);}58% {transform: translate(5.600000000000001%,32.8%);}57% {transform: translate(4.900000000000002%,31.200000000000003%);}56% {transform: translate(4.200000000000003%,29.599999999999994%);}55% {transform: translate(3.5000000000000036%,28.0%);}54% {transform: translate(2.8000000000000043%,26.39999999999999%);}53% {transform: translate(2.1000000000000014%,24.799999999999997%);}52% {transform: translate(1.4000000000000057%,23.19999999999999%);}51% {transform: translate(0.7000000000000028%,21.599999999999994%);}50% {transform: translate(-0.0%,20.0%);}49% {transform: translate(-0.6999999999999957%,18.39999999999999%);}48% {transform: translate(-1.3999999999999986%,16.799999999999997%);}47% {transform: translate(-2.0999999999999943%,15.199999999999989%);}46% {transform: translate(-2.799999999999997%,13.599999999999994%);}45% {transform: translate(-3.5%,12.0%);}44% {transform: translate(-4.199999999999996%,10.399999999999991%);}43% {transform: translate(-4.899999999999999%,8.799999999999997%);}42% {transform: translate(-5.599999999999994%,7.199999999999989%);}41% {transform: translate(-6.299999999999997%,5.599999999999994%);}40% {transform: translate(-7.0%,4.0%);}39% {transform: translate(-7.699999999999996%,2.3999999999999915%);}38% {transform: translate(-8.399999999999999%,0.7999999999999972%);}37% {transform: translate(-9.099999999999994%,-0.8000000000000114%);}36% {transform: translate(-9.799999999999997%,-2.4000000000000057%);}35% {transform: translate(-10.5%,-4.0%);}34% {transform: translate(-11.199999999999996%,-5.6000000000000085%);}33% {transform: translate(-11.899999999999999%,-7.200000000000003%);}32% {transform: translate(-12.599999999999994%,-8.800000000000011%);}31% {transform: translate(-13.299999999999997%,-10.400000000000006%);}30% {transform: translate(-14.0%,-12.0%);}29% {transform: translate(-14.699999999999996%,-13.600000000000009%);}28% {transform: translate(-15.399999999999999%,-15.200000000000003%);}27% {transform: translate(-16.099999999999994%,-16.80000000000001%);}26% {transform: translate(-16.799999999999997%,-18.400000000000006%);}25% {transform: translate(-17.5%,-20.0%);}24% {transform: translate(-18.199999999999996%,-21.60000000000001%);}23% {transform: translate(-18.9%,-23.200000000000003%);}22% {transform: translate(-19.599999999999994%,-24.80000000000001%);}21% {transform: translate(-20.299999999999997%,-26.400000000000006%);}20% {transform: translate(-21.0%,-28.0%);}19% {transform: translate(-21.699999999999996%,-29.599999999999994%);}18% {transform: translate(-22.4%,-31.200000000000017%);}17% {transform: translate(-23.099999999999994%,-32.80000000000001%);}16% {transform: translate(-23.799999999999997%,-34.400000000000006%);}15% {transform: translate(-24.499999999999993%,-36.0%);}14% {transform: translate(-25.199999999999996%,-37.599999999999994%);}13% {transform: translate(-25.9%,-39.20000000000002%);}12% {transform: translate(-26.599999999999994%,-40.80000000000001%);}11% {transform: translate(-27.299999999999997%,-42.400000000000006%);}10% {transform: translate(-27.999999999999993%,-44.0%);}9% {transform: translate(-28.699999999999996%,-45.599999999999994%);}8% {transform: translate(-29.39999999999999%,-47.20000000000002%);}7% {transform: translate(-30.099999999999994%,-48.80000000000001%);}6% {transform: translate(-30.799999999999997%,-50.400000000000006%);}5% {transform: translate(-31.5%,-52.0%);}4% {transform: translate(-32.19999999999999%,-53.60000000000002%);}3% {transform: translate(-32.89999999999999%,-55.20000000000002%);}2% {transform: translate(-33.599999999999994%,-56.80000000000001%);}1% {transform: translate(-34.3%,-58.400000000000006%);}
}

#aviation {
    animation: landing 4s cubic-bezier(0, 0, 0, 1.99) infinite;
    /* transform:translate(35.0%,-60.0%) */
    
    
}
.landing-pad {
    border-bottom: 5px solid;
    border-image: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 5%, rgba(254,255,0,1) 5.01%, rgba(254,255,0,1) 10%, rgba(0,0,0,1) 10.01%, rgba(0,0,0,1) 15%, rgba(254,255,0,1) 15.01%, rgba(254,255,0,1) 20%, rgba(0,0,0,1) 20.01%, rgba(0,0,0,1) 25%, rgba(254,255,0,1) 25.01%, rgba(254,255,0,1) 30%, rgba(0,0,0,1) 30.01%, rgba(0,0,0,1) 35%, rgba(254,255,0,1) 35.01%, rgba(254,255,0,1) 40%, rgba(0,0,0,1) 40.01%, rgba(0,0,0,1) 45%, rgba(254,255,0,1) 45.01%, rgba(254,255,0,1) 50%, rgba(0,0,0,1) 50.01%, rgba(0,0,0,1) 55%, rgba(254,255,0,1) 55.01%, rgba(253,255,0,1) 60%, rgba(0,0,0,1) 60.01%, rgba(0,0,0,1) 65%, rgba(243,255,0,1) 65.01%, rgba(244,255,0,1) 70%, rgba(0,0,0,1) 70.01%, rgba(0,0,0,1) 75%, rgba(254,255,0,1) 75.01%, rgba(254,255,0,1) 80%, rgba(0,0,0,1) 80.01%, rgba(0,0,0,1) 85%, rgba(250,255,0,1) 85.01%, rgba(250,255,0,1) 90%, rgba(0,0,0,1) 90.01%, rgba(0,0,0,1) 95%, rgba(250,255,0,1) 95.01%, rgba(249,255,0,1) 100%) 1;
}
#g {
    background-image: url("geography.gif");
    background-size: cover;
}
.selected {
    outline: 3px solid  rgb(120,255,120);
}
</style>

