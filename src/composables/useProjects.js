import { ref, computed } from 'vue';

export function useProjects(projectsData) {
    // Reactive state
    const projects = ref(projectsData.reverse());
    const filteredCategories = ref([]);
    const filteredProjects = ref(projects.value);
    const visibleProjects = ref(projects.value.slice(0, 12));

    // Computed properties
    const hasMore = computed(() =>
        visibleProjects.value.length < filteredProjects.value.length
    );

    // Methods
    function loadMoreProjects() {
        const currentCount = visibleProjects.value.length;
        const nextBatch = filteredProjects.value.slice(0, currentCount + 12);
        visibleProjects.value = nextBatch;
    }

    function filterProjects(category) {
        // Clear existing visual selections
        const categories = ["c", "a", "3", "g", "fav"];
        categories.forEach((cat) => {
            const element = document.getElementById(cat);
            if (element) {
                element.classList.remove("selected");
            }
        });

        // Check if the clicked category is already filtered
        const isCategoryFiltered = filteredCategories.value.includes(category);

        // Clear existing filters
        filteredCategories.value = [];

        // If the clicked category is not already filtered, add it to filteredCategories
        if (!isCategoryFiltered && category !== "") {
            filteredCategories.value.push(category);
            const element = document.getElementById(category);
            if (element) {
                element.classList.add("selected");
            }
        }

        // Filter projects based on the latest filtered category
        filteredProjects.value = projects.value.filter((project) =>
            filteredCategories.value.length === 0 ||
            project.categories.split(" ").some(x => x === category)
        );

        // Reset visible projects when filtering
        visibleProjects.value = filteredProjects.value.slice(0, 12);
    }

    return {
        projects,
        filteredCategories,
        filteredProjects,
        visibleProjects,
        hasMore,
        loadMoreProjects,
        filterProjects
    };
}
