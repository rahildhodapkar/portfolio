<script lang="ts">
  import pic from "../assets/my_pic_one.jpg";
</script>

<section id="about">
    <h2>ABOUT</h2>
    <div class="content">
      <img src={pic} alt="Me at a museum's sports science exhibition" />
      <div>
        <p>
          Coding is something that I love and strive to get better at. While I
          am currently in the web development world, my goal is to work more
          with low-level languages, like C. It's very appealing to understand
          and work with software with relatively little abstraction. This
          upcoming fall, I am going to spend more time working with assembly and
          C, and in the spring I plan on learning either Rust or C++.
        </p>
        <p>
          Outside of coding, I enjoy playing Overwatch (even though I never win
          a game), watching movies, and learning the guitar. I am also a huge
          fan of both the UFC and the NBA. My favorite fighter has to be Israel
          Adesanya, and my favorite basketball team is the Miami Heat.
        </p>
      </div>
    </div>
</section>

<style>
  #about {
    background-color: var(--black);
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  #about img {
    min-width: 200px;
    width: 25%;
    height: auto;
    border-radius: 15px;
  }

  #about .content {
    margin-top: 1rem;
    grid-column: span 2;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }

  #about .content div {
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h2 {
    font-size: 3rem;
    font-weight: 300;
    color: var(--orange-500);
    max-width: 66ch;
    text-align: center;
    grid-column: span 2;
  }

  p {
    color: var(--orange-50);
    font-weight: 300;
    max-width: 66ch;
    margin-bottom: 2rem;
  }

  @media (max-width: 1024px) {
    #about .content {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    #about img {
      width: 50%;
      margin-bottom: 1rem;
    }

    #about .content div {
      width: 100%;
    }

    p {
      max-width: 45ch;
    }
  }
</style>
