<template>
    <nav class="menu">
        <a href="#experience" class="menu-item">Experience</a>
        <a href="#about" class="menu-item">About</a>
        <a href="#select-project" class="menu-item">Projects</a>
    </nav>
</template>

<script setup>
// Navigation menu component
</script>

<style scoped>
.menu {
    width: 100%;
    display: flex;
    gap: 1rem;
    margin-left: 1rem;
    height: fit-content;
    align-items: center;
    justify-content: center;
}

.menu-item {
    color: inherit;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    transition: background-color 0.2s ease;
    font-size: 0.9rem;
}

.menu-item:hover {
    background-color: rgba(120, 255, 120, 0.2);
}

@media screen and (max-width: 768px) {
    .menu {
        flex-direction: column;
        gap: 0.5rem;
        margin-left: 0;
    }
    
    .menu-item {
        text-align: center;
        padding: 0.25rem 0.5rem;
        font-size: 0.8rem;
    }
}
</style>
