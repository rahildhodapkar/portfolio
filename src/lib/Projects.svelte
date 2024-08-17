<script>
  import ProjectsHeader from "./ProjectsHeader.svelte";
  import ProjectsList from "./ProjectsList.svelte";
  import SkillsCarousel from "./SkillsCarousel.svelte";
</script>

<main>
  <div id="projects">
    <ProjectsHeader />
    <ProjectsList />
    <SkillsCarousel />
  </div>
</main>

<style>
  #projects {
    background-color: var(--black);
  }
</style>
