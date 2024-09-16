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
        description: "A start screen that includes all the strange holidays and a procedural heightmap gradient"
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
        description: "A mini programming language interperted in python"
    },
    {
        name: "FlaskEnv",
        skills: "bash download",
        categories: "c",
        link: "https://github.com/jdszekeres/flaskenv",
        image: "",
        description: "Easily create a mini flask enviroment"
    },
    {
        name: "Window Seat Simulator",
        skills: "maps,API,Mapbox",
        categories: "c a fav",
        link: "https://github.com/jdszekeres/windowseat",
        image: "https://jdszekeres.github.io/project-photos/windowseat.jpg",
        description: "A program that uses angled satelite imagery to simulate the view outside of a plane"
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
        description: "A timer that counts down to a set time with a ticking sound. Made for my English teacher."
    },
    {
        name: "Trail Markers",
        skills: "UI Design, Figma, file upload",
        categories: "c g",
        link: "https://jdszekeres.github.io/strava.html",
        image: "https://raw.githubusercontent.com/jdszekeres/trailMarkers/main/screenshot.png",
        description: "A website that allows you to upload a running route and calculates how much time it takes you to run an individual section"
    },
    {
        name: "Köppen Flights",
        skills: "Turfjs, tailwind, geoJSON, UI Design",
        categories: "c g a",
        link: "https://jdszekeres.github.io/koppenFlight.html",
        image: "https://raw.githubusercontent.com/jdszekeres/jdszekeres.github.io/main/project-photos/koppenFlight.png",
        description: "A website that allow you to examine the distribution of Köppen-Geiger climate zones across a flight path"
    },
    {
        name: "Virtual Real Estate",
        skills: "API, THREE.js, leaflet, UI Design",
        categories: "c g fav",
        link: "https://jdszekeres.github.io/virtualRealEstate/",
        image: "https://jdszekeres.github.io/project-photos/virtualRealEstate.png",
        description: "A site that allow you to model a house or building on a piece of virtual land based on satelite imagery"
    },
    {
        name: "Correct Horse Battery Staple Password Generator",
        skills: "API, pure-css",
        categories: "c",
        link: "https://jdszekeres.github.io/passwordEntropy.html",
        image: "",
        description: "A password generator that allow you to drop in categories of words"
    }
]);
let filteredCategories = ref([]);
let filteredProjects = ref(projects.value);
function filterProjects(category) {
    // Check if the clicked category is already filtered
    const isCategoryFiltered = filteredCategories.value.includes(category);

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
        <h1>👋Hi, I'm jdszekeres👋</h1>

        <h2 style=" font-size: 48px; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI' , Roboto,
                Oxygen, Ubuntu, Cantarell, 'Open Sans' , 'Helvetica Neue' , sans-serif;">
            an avid computer scientist and lover of knowledge</h2>
        <h4>You can look for me here:</h4>
        <div style="display: flex; justify-content: center;">
            <imagelink link="www.linkedin.com/in/jdszekeres" image="LI-logo.png" />
            <imagelink link="https://github.com/jdszekeres" image="github-mark.svg" />
            <imagelink link="https://github.com/CCA-AppDev" image="cca-appdev.png"/> 
        </div>
                <h3 style="font-size: 36px;">my hobbies include</h3>
                <div id="hobbys">
                    <button class="hobby" id="cs" @click="filterProjects('c')" style="min-width: 250px !important">
                        <div id="hack">Computer Science</div>
                    </button>
                    <button class="hobby" @click="filterProjects('a')" style="width: 150px">
                        <div id="aviation">aviation</div>
                    </button>
                    <button class="hobby" @click="filterProjects('3')" id="printing">3D printing</button>
                    <button class="hobby" @click="filterProjects('g')" id="geo">Geography</button>
                </div>
                <div style="width: 100%; display: flex; justify-content: center">
                    <button class="hobby" @click="filterProjects('fav')">My Favorite Projects</button>
                </div>
                <div id="projects">
                    <project v-for="(p, index) in filteredProjects" :key="index" :skills="p.skills"
                        :categories="p.categories" :name="p.name" :link="p.link" :image="p.image"
                        :description="p.description"></project>
                </div>

    </main>
</template>
<style scoped>

     @media screen and (orientation:portrait) {
        .hobbdy {
            width: 100%;
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
        border: 3px solid black;
        height:50.4px; 
        
        position:relative;
        
    }
    #cs {
        color: rgb(120,255,120);
        min-width: 200px;
    }
    #hack {

  font-family: monospace;
  font-size: 20px;
  white-space: nowrap;
  text-shadow: 0 2px 2px rgba(#000, 0.9);
}


/* Landing animation */
@keyframes landing {
  0% {
    /* This will make the plane emoji start at the top of the inner div */
    transform: translate3d(-30%,-30%,0);
    
  }

  100% {
    /* This will make the plane emoji land at the bottom of the inner div */
    transform: translate3d(30%,35%,0);
  }
}

/* Apply the animation to the inner div */
#aviation {
  animation: landing 2s ease-in-out infinite;
}
#geo {
    background-image: url("geography.gif");
    background-size: cover;
}

</style>

