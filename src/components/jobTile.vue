<script setup>
defineProps({
    title: String,
    company: String,
    timePeriod: String,
    description: String,
    image: String
})
</script>

<template>
    <li class="job-tile">
        <img v-if="image" class="job-logo" :src="image" :alt="'Company logo for ' + company"
            width="56" height="56" loading="lazy" decoding="async" />
        <div class="job-body">
            <h4 class="job-title">{{ title }}</h4>
            <p class="job-meta">{{ company }} <span aria-hidden="true">|</span> {{ timePeriod }}</p>
            <p class="job-description">{{ description }}</p>
        </div>
    </li>
</template>

<style scoped>
.job-tile {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    text-align: left;
}

.job-logo {
    flex-shrink: 0;
    width: 56px;
    height: 56px;
    object-fit: contain;
}

.job-body {
    min-width: 0;
}

.job-title {
    margin: 0;
    font-family: var(--font-sans);
    font-size: 1.35rem;
    font-weight: 700;
    line-height: 1.25;
    color: var(--text);
}

.job-meta {
    margin: 0.2rem 0 0.4rem;
    font-family: var(--font-mono);
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--text-muted);
}

.job-description {
    margin: 0;
    line-height: 1.5;
    color: var(--text-muted);
}

@media screen and (max-width: 480px) {
    .job-logo {
        width: 40px;
        height: 40px;
    }

    .job-title {
        font-size: 1.15rem;
    }
}
</style>
