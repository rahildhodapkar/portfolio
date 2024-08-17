<script>
  import portfolioImgPng from "../assets/portfolio-img.png";
  import portfolioImgWebp from "../assets/portfolio-img.webp";
</script>

<main>
  <header id="home">
    <figure>
      <picture>
        <source srcset={portfolioImgWebp} type="image/webp" />
        <source srcset={portfolioImgPng} type="image/png" />
        <img src={portfolioImgPng} alt="Rahil Dhodapkar" />
      </picture>
      <div class="squiggly-circle-one"></div>
      <div class="squiggly-circle-two"></div>
      <div class="squiggly-circle-three"></div>
      <figcaption>
        <ul>
          <li><span style="color: blueviolet;">RAHIL DHODAPKAR</span></li>
          <li><span style="color: green;">RAHIL DHODAPKAR</span></li>
          <li><span style="color: chocolate;">RAHIL DHODAPKAR</span></li>
          <li><h1 style="color: aqua;">RAHIL DHODAPKAR</h1></li>
          <li><h2 style="color: cornflowerblue;">SOFTWARE ENGINEER</h2></li>
          <li><span style="color: brown;">SOFTWARE ENGINEER</span></li>
          <li><span style="color: darkgoldenrod;">SOFTWARE ENGINEER</span></li>
          <li><span style="color: aquamarine;">SOFTWARE ENGINEER</span></li>
        </ul>
      </figcaption>
    </figure>
  </header>
</main>

<style>
  .squiggly-circle-one {
    width: max(30vw, 20vh);
    aspect-ratio: 1;
    border: 2px solid var(--orange-500);
    border-radius: 30% 50% 60% 50% / 70% 40% 50% 60%;
  }

  .squiggly-circle-two {
    width: max(35vw, 25vh);
    aspect-ratio: 1;
    border: 2px solid var(--orange-300);
    border-radius: 40% 60% 50% 70% / 50% 40% 60% 70%;
  }

  .squiggly-circle-three {
    width: max(40vw, 30vh);
    aspect-ratio: 1;
    border: 2px solid var(--orange-100);
    border-radius: 50% 70% 40% 60% / 60% 70% 50% 40%;
  }

  @keyframes rotate-clockwise {
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes rotate-counter-clockwise {
    to {
      transform: rotate(-360deg);
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    .squiggly-circle-one,
    .squiggly-circle-three {
      animation: rotate-clockwise 20s infinite linear;
      will-change: transform;
    }

    .squiggly-circle-two {
      animation: rotate-counter-clockwise 20s infinite linear;
      will-change: transform;
    }
  }

  .squiggly-circle-one,
  .squiggly-circle-two,
  .squiggly-circle-three {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }

  header {
    height: 100svh;
    scroll-snap-align: start;
  }

  figure {
    background: var(--black);
    height: 100svh;
    position: relative;
  }

  figcaption {
    position: absolute;
    bottom: 0;
    display: flex;
  }

  picture img {
    max-height: 100svh;
    max-width: 100svw;
    height: auto;
    width: auto;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 5;
  }

  ul {
    list-style-type: none;
  }

  ul span {
    font-size: clamp(1.9rem, 1.3389rem + 2.3941vw, 9rem);
    font-weight: 600;
    position: relative;
    z-index: 4;
  }

  h1,
  h2 {
    font-size: clamp(1.9rem, 1.3389rem + 2.3941vw, 9rem);
    font-weight: 600;
    position: relative;
    z-index: 6;
  }
</style>
