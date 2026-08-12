<script lang="ts">
  import ProjectsHeader from "./ProjectsHeader.svelte";
  import ProjectsList from "./ProjectsList.svelte";
  import SkillsCarousel from "./SkillsCarousel.svelte";
</script>

<section id="projects">
    <ProjectsHeader />
    <ProjectsList />
    <SkillsCarousel />
</section>

<style>
  #projects {
    background-color: var(--black);
  }
</style>
