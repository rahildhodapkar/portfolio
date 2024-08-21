<script>
  import pic from "../assets/my_pic_two.jpg"
</script>

<main>
  <div id="experience">
    <h3>Experience</h3>
    <div class="content">
      <img src={pic} alt="Me playing a game at the arcade" />
      <div>
        <p>
          I am a current senior student attending Rutgers University-New Brunswick. In my time at Rutgers, I have
          taken courses concerning deep learning, systems programming, and algorithmic design, among others. I am set to graduate in May 2025
          with a 4.0/4.0 GPA.
        </p>
        <p>
          I have experience as a professional software engineer, having worked at Rocket Pharmaceuticals from May 2023 to February 2024. There,
          I engineered a robust SOAP API application that showcased the company's financial and inventory reports.
          The skills I learned on the job include backend design with Spring Boot and PostgreSQL, frontend design with JS/HTML/CSS, Azure, and
          effective cross-functional collaboration with various company teams, such as supply chain.
        </p>
      </div>
    </div>
  </div>
</main>

<style>
  #experience {
    background-color: var(--black);
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  #experience img {
    min-width: 200px;
    width: 25%;
    height: auto;
    border-radius: 15px;
  }

  #experience .content {
    margin-top: 1rem;
    grid-column: span 2;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }

  #experience .content div {
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h3 {
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
    #experience .content {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    #experience img {
      width: 50%;
      margin-bottom: 1rem;
    }

    #experience .content div {
      width: 100%;
    }

    p {
      max-width: 45ch;
    }
  }
</style>
