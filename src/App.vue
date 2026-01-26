<script setup>
// Component imports
import Project from './components/project.vue';
import ImageLink from './components/imagelink.vue';
import PixelArray from './components/pixelArray.vue';
import Menu from './components/Menu.vue';

// Vue imports
// import { ref, computed } from 'vue';

// Data and composable imports
import { projects as projectsData } from './data/projects.js';
import { useProjects } from './composables/useProjects.js';

import { 
    IconBrandPython, 
    IconBrandJavascript, 
    IconBrandReact, 
    IconBrandReactNative, 
    IconBrandVue, 
    IconBrandFlutter, 
    IconBrandSwift,
    IconBrandFirebase,
    IconBrandGit,
    IconBrandGithub,
    IconBrandGithubCopilot,
    IconBrandFigma,
    IconCamera,
    IconBrandAdobePhotoshop,
    IconBrandWindows,
    IconBrandApple,
    IconBrandUbuntu,
    IconBrandDebian,
    IconAirTrafficControl,
    IconTent,
    IconRun
    

} from '@tabler/icons-vue';
import JobTile from './components/jobTile.vue';
import BigProject from './components/bigProject.vue';
// Use the projects composable
const {
    projects,
    filteredCategories,
    filteredProjects,
    visibleProjects,
    hasMore,
    loadMoreProjects,
    filterProjects
} = useProjects(projectsData);
</script>

<template>
    <main>
        <!-- Hero Section -->
        <section id="hero" class="intro-section">
            <div style="margin:0; background-image: linear-gradient(0deg, rgba(255,255,255,0.5), 0%,rgba(255,255,255,0), 100%); background-color: rgba(255,255,255,0.25);">
                <h1 style="margin:0">Jackson Szekeres</h1>
                <h2 style="margin:0">Computer Science and Engineering Portfolio</h2>
            </div>
            
            <!-- Social Links -->
            <!-- <div class="social-links">
                <ImageLink link="https://www.linkedin.com/in/jdszekeres" image="LI-logo.png" />
                <ImageLink link="https://github.com/jdszekeres" image="github-mark.svg" />
                <ImageLink link="https://github.com/CCA-AppDev" image="cca-appdev.png"/> 
                <ImageLink link="https://leetcode.com/u/jdszekeres/" image="leetcode.png" />
            </div> -->
            
            
        </section>

       

        <section id="experience" class="experience-section">
            <Menu />
            <div class="experience-content">
                <h3>Past Experience</h3>
                <ul class="experience-list">
                    
                    <JobTile
                        title="Advanced Enginnering Student"
                        company="Family Giving Tree"
                        timePeriod="Fall 2025"
                        description="Developed a RFID scanning system for Family Giving Tree, a Bay Area non-profit, as part of an in-school internship"
                        image="https://jdszekeres.github.io/company_logos/fgt.png"
                    />
                    <JobTile
                        title="VP - CCA Hack Club"
                        company="CCA Hack Club"
                        timePeriod="2023 - Present"
                        description="Hosted and competed in hackathons, organized coding events, and fostered a collaborative environment for club members."
                        image="https://jdszekeres.github.io/company_logos/appdev.png"
                    />

                    <JobTile
                        title="Intern"
                        company="Deep Water Exploration"
                        timePeriod="2024, 2025"
                        description="Developed industry-grade software solutions for defense and exploration applications."
                        image="https://jdszekeres.github.io/company_logos/dwe.png"
                    />

                    <JobTile
                        title="CEO"
                        company="Smart DC Solutions"
                        timePeriod="2023 - Present"
                        description="Led a diverse team of peers to develop a novel, patent pending solution for blackouts and power efficiency."
                        image="https://jdszekeres.github.io/company_logos/sds.png"
                    />

                    <JobTile
                        title="CTO"
                        company="Compete for Causes"
                        timePeriod="2023 - Present"
                        description="Led the development of a platform connecting physical activities with charitable causes."
                        image="https://jdszekeres.github.io/company_logos/cfc.png"
                    />

                    <JobTile
                        title="Exploring Computer Science Student"
                        company="CCA"
                        timePeriod="Spring 2025"
                        description="Engaged in hands-on projects and collaborative learning experiences with focus on HCI interactions and web app development."
                        image="https://jdszekeres.github.io/company_logos/cca.png"
                    />

                    <JobTile
                        title="Digital Electronics Student"
                        company="CCA"
                        timePeriod="Fall 2025"
                        description="Studied the principles of digital circuits and logic gates."
                        image="https://jdszekeres.github.io/company_logos/cca.png"
                    />

                    <JobTile
                        title="AP Computer Science Principles Student"
                        company="CCA"
                        timePeriod="2025"
                        description="Demonstrated exceptional understanding of computer science concepts."
                        image="https://jdszekeres.github.io/company_logos/cca.png"
                    />
                </ul>

            </div>
        </section> 

         <!-- About & Experience Section -->
        <section id="about" class="about-section" style="flex-direction: column; align-items: center; gap: 2rem">
            <div class="about-content" style="display: flex; flex-direction: column; gap: 1rem; width: 100%">
                <h3 style="width: 100%">About</h3>
                <div class="about-text emoji" style="font-size: x-large">
                    I am a rising Junior in High School with an interest in Computer Science🧑‍💻, Geography🗺️, aviation✈️ and 3D printing<img src="https://emojis.slackmojis.com/emojis/images/1702933057/82860/3d-printer.png" style="width: 24px; height: 24px">. My favorite programming languages are <code>Python && Javascript</code>, but I also know a bit of dart, swift, and lua. If I'm not glued to a screen, you can find me running🏃‍♂️, biking🚵, hiking🥾, exploring the great outdoors🌄, or learning Spanish🇪🇸 and Hungarian🇭🇺.
                </div>
                <h3>Skills</h3>
                <div class="skills" style="display: grid; grid-template-columns: repeat(3, 1fr); width: 100%; align-items: center; justify-content: center;">
                    <div style="display: flex; width: 33%; justify-content: center; flex-wrap: wrap;">
                        <p>Languages:</p>
                        <IconBrandPython      title="Python" size="36"/>
                        <IconBrandJavascript   title="JavaScript" size="36"/>
                        <IconBrandFlutter      title="Flutter" size="36"/>
                        <IconBrandSwift        title="Swift" size="36"/>
                    </div>
                    <div style="display: flex; width: 33%; justify-content: center; flex-wrap: wrap;">
                        <p>Frameworks:</p>
                        <IconBrandReact       title="React" size="36"/>
                        <IconBrandReactNative title="React Native" size="36"/>
                        <IconBrandVue         title="Vue" size="36"/>
                    </div>
                    <div style="display: flex; width: 33%; justify-content: center; flex-wrap: wrap;">
                        <p>Tools:</p>
                        <IconBrandFirebase    title="Firebase" size="36"/>
                        <IconBrandGit         title="Git" size="36"/>
                        <IconBrandGithub      title="GitHub" size="36"/>
                        <IconBrandGithubCopilot title="GitHub Copilot" size="36"/>
                    </div>
                    <div style="display: flex; width: 33%; justify-content: center; flex-wrap: wrap;">
                        <p>Design:</p>
                        <IconBrandAdobePhotoshop title="Photoshop" size="36"/>
                        <IconCamera              title="Photography" size="36"/>
                        <IconBrandFigma          title="Figma" size="36"/>
                    </div>
                    <div style="display: flex; width: 33%; justify-content: center; flex-wrap: wrap;">
                        <p>Operating Systems:</p>
                        <IconBrandWindows title="Windows" size="36"/>
                        <IconBrandApple   title="MacOS" size="36"/>
                        <IconBrandUbuntu  title="Ubuntu" size="36"/>
                        <IconBrandDebian  title="Debian" size="36"/>
                    </div>
                    <div style="display: flex; width: 33%; justify-content: center; flex-wrap: wrap;">
                        <p>Interests:</p>
                        <IconAirTrafficControl title="Air Traffic Control" size="36"/>
                        <IconTent               title="Camping" size="36"/>
                        <IconRun                title="Running" size="36"/>
                    </div>
                        
                </div>
            </div>
        </section>
        
        <section id="select-project">
            <h1>Select Projects</h1>
            <BigProject 
                name="Window View" 
                link="https://apps.apple.com/us/app/window-view/id6740445055" 
                subtitle="iOS app to view POIs offline" 
                description="An app built in Flutter to view points of interest on the go, without internet using a database of over 200,000 POIs worldwide and a custom built flight plan generator. The app is in part inspired by 'Flying Over Places' feature of Flight Path 3D's maps. The project has nearly 250 downloads and has made $10 in ad revenue so far. The app builds off skills learned from Exploring Computer Science, including firebase and HCI design principles." 
                image="https://jdszekeres.github.io/project-photos/windowViewWide.png" 
                skills="App Development, Flutter, AI Assisted Programming, Google AdMob"
            />

            <BigProject
                name="Eagle Scout Project"
                link="https://www.scouting.org/about/research/eagle-scouts/"
                subtitle="Community service project for San Dieguito County Park"
                description="Led a project to create a 15ft tall hanging sign with chains, wood slab, and natural materials for the entrance of the Nature Playground area at San Dieguito County Park. Managed a team of 10 volunteers, coordinated with park officials, and ensured the project met safety and quality standards. The sign enhances the park's entrance and provides a welcoming atmosphere for visitors."
                image="https://jdszekeres.github.io/project-photos/eagle_scout.JPG"
                skills="Project Management, Woodworking, Team Leadership"
                left="true"
            />

            <BigProject
                name="Smartlet Pending Patent"
                subtitle='"Method and apparatus to supply DC power with variable voltage."'
                link="https://patents.google.com/patent/US20240421609A1/en"
                description="Led a team of peers to develop a novel solution for improving power efficiency and safety, increasing IoT integration, and preventing blackouts in residential and commercial buildings. The Smartlet system intelligently manages DC power distribution, optimizing energy usage and reducing strain on the electrical grid. The project is currently patent pending and has garnered interest from industry professionals at the Open Sauce 2025 Convention."
                image="https://jdszekeres.github.io/project-photos/patent.jpg"
                skills="Electrical Engineering, Team Leadership, Innovation, Technical Writing"
            />
        </section>

        <!-- Projects Section -->
        <section id="projects" class="projects-section">
            <!-- <Menu /> -->
             <h3>All Projects</h3>
            <p>Filter my projects by category</p>

            <!-- Category Filters -->
            <div class="category-filters">
                <button class="hobby" id="c" @click="filterProjects('c')">
                    <div id="hack">Computer Science</div>
                </button>
                <button class="hobby landing-pad" id="a" @click="filterProjects('a')">
                    <div id="aviation">aviation</div>
                </button>
                <button class="hobby" @click="filterProjects('3')" id="3">3D printing</button>
                <button class="hobby" @click="filterProjects('g')" id="g">Geography</button>
            </div>
            
            <!-- Favorite Projects Filter -->
            <div class="favorites-filter">
                <button class="hobby" id="fav" @click="filterProjects('fav')">My Favorite Projects</button>
            </div>
            
            <!-- Projects Grid -->
            <div class="projects-grid">
                <Project v-for="(p, index) in visibleProjects" 
                        :key="index" 
                        :skills="p.skills"
                        :categories="p.categories" 
                        :name="p.name" 
                        :link="p.link" 
                        :image="p.image"
                        :description="p.description" 
                        :repo="p.repo" />
            </div>
                
            <!-- Load More Button -->
            <div v-if="hasMore" class="load-more">
                <button @click="loadMoreProjects()" class="hobby load-more-btn">
                    Load More Projects
                </button>
            </div>
        </section>
    </main>
</template>
<style scoped>
/* ========================================
   LAYOUT & SECTIONS
======================================== */

.intro-section {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: space-between;
    text-align: center;
    background-image: url('https://jdszekeres.github.io/title.gif');
    background-repeat: no-repeat;
    background-size: cover;
    padding: 0;
    margin: 0;
}

.about-section {
    height: 100vh;
    display: flex;
    gap: 2rem;
}

.about-content,
.experience-content {
    flex: 1;
    display: flex;
    flex-direction: column;
}

.experience-column {
    height: fit-content !important;
    min-height: fit-content !important;
}

.projects-section {
    text-align: center;
}

/* ========================================
   TYPOGRAPHY
======================================== */

h1 {
    font-weight: 800;
    font-size: 64px;
    font-family: "roboto";
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
}

h2, h3 {
    text-align: center;
    margin-bottom: 1.5rem;
}

h3 {
    font-size: 36px;
}

.about-text {
    text-align: left;
    line-height: 1.6;
    font-size: 1.1rem;
}

/* ========================================
   COMPONENTS
======================================== */

.social-links {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 2rem;
}

.featured-projects {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 2rem;
}

.featured-projects img {
    height: 10vh;
    max-width: 45%;
    object-fit: contain;
}

.experience-list {
    list-style-type: none;
    padding: 0;
    line-height: 1.8;
}

.experience-list li {
    margin-bottom: 1rem;
}

/* ========================================
   CATEGORY FILTERS
======================================== */

.category-filters {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin: 2rem auto;
    flex-wrap: wrap;
}

.favorites-filter {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
}

.hobby {
    margin: 10px;
    padding: 10px;
    font-size: 22px;
    background: none;
    outline: 3px solid black;
    border: 0px;
    height: 50.4px;
    position: relative;
    cursor: pointer;
    transition: all 0.2s ease;
}

.hobby:hover {
    background-color: rgba(120, 255, 120, 0.1);
}

.selected {
    outline: 3px solid rgb(120, 255, 120);
}

/* Category-specific styles */
#c {
    color: rgb(120, 255, 120);
    min-width: 250px;
}

#hack {
    font-family: monospace;
    font-size: 20px;
    white-space: nowrap;
    text-shadow: 0 2px 2px rgba(0, 0, 0, 0.9);
}

#g {
    background-image: url("geography.gif");
    background-size: cover;
}

.landing-pad {
    border-bottom: 5px solid;
    border-image: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 5%, rgba(254,255,0,1) 5.01%, rgba(254,255,0,1) 10%, rgba(0,0,0,1) 10.01%, rgba(0,0,0,1) 15%, rgba(254,255,0,1) 15.01%, rgba(254,255,0,1) 20%, rgba(0,0,0,1) 20.01%, rgba(0,0,0,1) 25%, rgba(254,255,0,1) 25.01%, rgba(254,255,0,1) 30%, rgba(0,0,0,1) 30.01%, rgba(0,0,0,1) 35%, rgba(254,255,0,1) 35.01%, rgba(254,255,0,1) 40%, rgba(0,0,0,1) 40.01%, rgba(0,0,0,1) 45%, rgba(254,255,0,1) 45.01%, rgba(254,255,0,1) 50%, rgba(0,0,0,1) 50.01%, rgba(0,0,0,1) 55%, rgba(254,255,0,1) 55.01%, rgba(253,255,0,1) 60%, rgba(0,0,0,1) 60.01%, rgba(0,0,0,1) 65%, rgba(243,255,0,1) 65.01%, rgba(244,255,0,1) 70%, rgba(0,0,0,1) 70.01%, rgba(0,0,0,1) 75%, rgba(254,255,0,1) 75.01%, rgba(254,255,0,1) 80%, rgba(0,0,0,1) 80.01%, rgba(0,0,0,1) 85%, rgba(250,255,0,1) 85.01%, rgba(250,255,0,1) 90%, rgba(0,0,0,1) 90.01%, rgba(0,0,0,1) 95%, rgba(250,255,0,1) 95.01%, rgba(249,255,0,1) 100%) 1;
}

/* ========================================
   ANIMATIONS
======================================== */

@keyframes landing {
    100% {transform: translate(35.0%,60%);}
    99% {transform: translate(34.3%,60%);}
    98% {transform: translate(33.6%,60%);}
    97% {transform: translate(32.9%,60%);}
    96% {transform: translate(32.2%,60%);}
    95% {transform: translate(31.5%,60%);}
    94% {transform: translate(30.8%,60%);}
    93% {transform: translate(30.1%,60%);}
    92% {transform: translate(29.4%,60%);}
    91% {transform: translate(28.7%,60%);}
    90% {transform: translate(28.0%,60%);}
    89% {transform: translate(27.3%,60%);}
    88% {transform: translate(26.6%,60%);}
    87% {transform: translate(25.9%,60%);}
    86% {transform: translate(25.200000000000003%,60%);}
    85% {transform: translate(24.5%,60%);}
    84% {transform: translate(23.8%,60%);}
    83% {transform: translate(23.1%,60%);}
    82% {transform: translate(22.4%,60%);}
    81% {transform: translate(21.700000000000003%,60%);}
    80% {transform: translate(21.0%,60%);}
    79% {transform: translate(20.3%,60%);}
    78% {transform: translate(19.6%,60%);}
    77% {transform: translate(18.900000000000002%,60%);}
    76% {transform: translate(18.200000000000003%,60%);}
    75% {transform: translate(17.5%,60.0%);}
    74% {transform: translate(16.8%,58.4%);}
    73% {transform: translate(16.1%,56.8%);}
    72% {transform: translate(15.400000000000002%,55.199999999999996%);}
    71% {transform: translate(14.700000000000003%,53.599999999999994%);}
    70% {transform: translate(14.0%,52.0%);}
    69% {transform: translate(13.3%,50.4%);}
    68% {transform: translate(12.600000000000001%,48.8%);}
    67% {transform: translate(11.900000000000002%,47.199999999999996%);}
    66% {transform: translate(11.200000000000003%,45.599999999999994%);}
    65% {transform: translate(10.5%,44.0%);}
    64% {transform: translate(9.8%,42.4%);}
    63% {transform: translate(9.100000000000001%,40.8%);}
    62% {transform: translate(8.400000000000002%,39.199999999999996%);}
    61% {transform: translate(7.700000000000003%,37.599999999999994%);}
    60% {transform: translate(7.0%,36.0%);}
    59% {transform: translate(6.300000000000001%,34.39999999999999%);}
    58% {transform: translate(5.600000000000001%,32.8%);}
    57% {transform: translate(4.900000000000002%,31.200000000000003%);}
    56% {transform: translate(4.200000000000003%,29.599999999999994%);}
    55% {transform: translate(3.5000000000000036%,28.0%);}
    54% {transform: translate(2.8000000000000043%,26.39999999999999%);}
    53% {transform: translate(2.1000000000000014%,24.799999999999997%);}
    52% {transform: translate(1.4000000000000057%,23.19999999999999%);}
    51% {transform: translate(0.7000000000000028%,21.599999999999994%);}
    50% {transform: translate(-0.0%,20.0%);}
    49% {transform: translate(-0.6999999999999957%,18.39999999999999%);}
    48% {transform: translate(-1.3999999999999986%,16.799999999999997%);}
    47% {transform: translate(-2.0999999999999943%,15.199999999999989%);}
    46% {transform: translate(-2.799999999999997%,13.599999999999994%);}
    45% {transform: translate(-3.5%,12.0%);}
    44% {transform: translate(-4.199999999999996%,10.399999999999991%);}
    43% {transform: translate(-4.899999999999999%,8.799999999999997%);}
    42% {transform: translate(-5.599999999999994%,7.199999999999989%);}
    41% {transform: translate(-6.299999999999997%,5.599999999999994%);}
    40% {transform: translate(-7.0%,4.0%);}
    39% {transform: translate(-7.699999999999996%,2.3999999999999915%);}
    38% {transform: translate(-8.399999999999999%,0.7999999999999972%);}
    37% {transform: translate(-9.099999999999994%,-0.8000000000000114%);}
    36% {transform: translate(-9.799999999999997%,-2.4000000000000057%);}
    35% {transform: translate(-10.5%,-4.0%);}
    34% {transform: translate(-11.199999999999996%,-5.6000000000000085%);}
    33% {transform: translate(-11.899999999999999%,-7.200000000000003%);}
    32% {transform: translate(-12.599999999999994%,-8.800000000000011%);}
    31% {transform: translate(-13.299999999999997%,-10.400000000000006%);}
    30% {transform: translate(-14.0%,-12.0%);}
    29% {transform: translate(-14.699999999999996%,-13.600000000000009%);}
    28% {transform: translate(-15.399999999999999%,-15.200000000000003%);}
    27% {transform: translate(-16.099999999999994%,-16.80000000000001%);}
    26% {transform: translate(-16.799999999999997%,-18.400000000000006%);}
    25% {transform: translate(-17.5%,-20.0%);}
    24% {transform: translate(-18.199999999999996%,-21.60000000000001%);}
    23% {transform: translate(-18.9%,-23.200000000000003%);}
    22% {transform: translate(-19.599999999999994%,-24.80000000000001%);}
    21% {transform: translate(-20.299999999999997%,-26.400000000000006%);}
    20% {transform: translate(-21.0%,-28.0%);}
    19% {transform: translate(-21.699999999999996%,-29.599999999999994%);}
    18% {transform: translate(-22.4%,-31.200000000000017%);}
    17% {transform: translate(-23.099999999999994%,-32.80000000000001%);}
    16% {transform: translate(-23.799999999999997%,-34.400000000000006%);}
    15% {transform: translate(-24.499999999999993%,-36.0%);}
    14% {transform: translate(-25.199999999999996%,-37.599999999999994%);}
    13% {transform: translate(-25.9%,-39.20000000000002%);}
    12% {transform: translate(-26.599999999999994%,-40.80000000000001%);}
    11% {transform: translate(-27.299999999999997%,-42.400000000000006%);}
    10% {transform: translate(-27.999999999999993%,-44.0%);}
    9% {transform: translate(-28.699999999999996%,-45.599999999999994%);}
    8% {transform: translate(-29.39999999999999%,-47.20000000000002%);}
    7% {transform: translate(-30.099999999999994%,-48.80000000000001%);}
    6% {transform: translate(-30.799999999999997%,-50.400000000000006%);}
    5% {transform: translate(-31.5%,-52.0%);}
    4% {transform: translate(-32.19999999999999%,-53.60000000000002%);}
    3% {transform: translate(-32.89999999999999%,-55.20000000000002%);}
    2% {transform: translate(-33.599999999999994%,-56.80000000000001%);}
    1% {transform: translate(-34.3%,-58.400000000000006%);}
}

#aviation {
    animation: landing 4s cubic-bezier(0, 0, 0, 1.99) infinite;
}

/* ========================================
   PROJECTS GRID
======================================== */

.projects-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1rem;
    margin: 2rem 0;
}

.load-more {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
}

.load-more-btn {
    background: rgba(120, 255, 120, 0.2) !important;
}

/* ========================================
   RESPONSIVE DESIGN
======================================== */

@media screen and (max-width: 768px) {
    .intro-section {
        padding: 1rem;
    }
    
    .about-section {
        flex-direction: column;
        height: auto;
        padding: 1rem;
    }
    
    .about-content,
    .experience-content {
        width: 100%;
    }
    
    .about-text {
        text-align: center;
    }
    
    h1 {
        font-size: 48px;
    }
    
    .hobby {
        width: 100%;
        font-size: 18px;
    }
    
    .category-filters {
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
    }
    
    .projects-grid {
        flex-direction: column;
        align-items: center;
    }
    
    .featured-projects {
        flex-direction: column;
        align-items: center;
    }
    
    .featured-projects img {
        max-width: 90%;
        height: auto;
    }
    
    .social-links {
        flex-wrap: wrap;
        gap: 0.5rem;
    }
}

@media screen and (orientation: portrait) {
    .hobby {
        width: 100%;
    }
}
</style>

