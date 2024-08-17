<main>
    <div class="marquee-header-container">
      <h3>
        SKILLS
      </h3>
    </div>
    <div class="marquee">
      <div class="marquee-group">
        <span>HTML</span>
        <span>CSS</span>
        <span>JavaScript</span>
        <span>React</span>
        <span>Svelte</span>
        <span>Express</span>
        <span>Python</span>
        <span>PyTorch</span>
        <span>Java</span>
        <span>SpringBoot</span>
        <span>C</span>
        <span>MySQL</span>
        <span>PostgreSQL</span>
      </div>
      <div class="marquee-group" aria-hidden="true">
        <span>HTML</span>
        <span>CSS</span>
        <span>JavaScript</span>
        <span>React</span>
        <span>Svelte</span>
        <span>Express</span>
        <span>Python</span>
        <span>PyTorch</span>
        <span>Java</span>
        <span>SpringBoot</span>
        <span>C</span>
        <span>MySQL</span>
        <span>PostgreSQL</span>
      </div>
    </div>
</main>

<style>

  .marquee-header-container {
    display: grid;
    place-items: center;
  }

  .marquee {
    display: flex;
    overflow: hidden;
    gap: 1rem;
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  h3 {
    font-size: 3rem;
    font-weight: 300;
    color: var(--orange-500);
    max-width: 66ch;
    text-align: center;
  }

  .marquee-group {
    color: var(--orange-50);
    display: flex;
    flex-shrink: 0;
    justify-content: space-around;
    min-width: 100%;
    gap: 1rem;
    animation: scroll 20s linear infinite;
    will-change: transform;
    font-size: 2rem;
    font-weight: 300;
  }

  .marquee-group span {
    transition:
      color 300ms ease-in-out,
      text-shadow 300ms ease-in-out;
    cursor: default;
    will-change: color, text-shadow;
  }

  .marquee-group span:hover {
    color: var(--orange-100);
    text-shadow:
      0 0 3px var(--orange-100),
      0 0 6px var(--orange-100),
      0 0 9px var(--orange-100),
      0 0 12px var(--orange-100),
      0 0 15px var(--orange-300),
      0 0 18px var(--orange-300),
      0 0 21px var(--orange-300),
      0 0 24px var(--orange-300);
    cursor: default;
  }

  @keyframes scroll {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - 1rem));
    }
  }
</style>
