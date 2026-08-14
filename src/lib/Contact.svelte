<section id="contact">
    <h2>CONTACT</h2>
    <div class="contacts">
      <h5>Thank you for checking my portfolio out!</h5>
      <p>
        If you would like to contact me, please feel free to reach out via email or
        LinkedIn.
      </p>
      <div>
        <a
          href="mailto:rahildhodapkar@gmail.com"
          aria-label="Email Rahil Dhodapkar"
          rel="noopener noreferrer"
          target="_blank"
          ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" class="mail-icon"
            ><path
              d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"
            /></svg
          ></a
        >
        <a
          href="https://www.linkedin.com/in/rahildhodapkar/"
          aria-label="Rahil Dhodapkar on LinkedIn"
          rel="noopener noreferrer"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="linkedin-icon"
            stroke-width="1.75"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
            />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>
      </div>
    </div>
</section>

<style>
  #contact {
    background-color: var(--black);
    display: grid;
    place-items: center;
  }

  h2 {
    font-size: 3rem;
    font-weight: 300;
    color: var(--orange-500);
    max-width: 66ch;
    text-align: center;
  }

  .contacts {
    margin-block: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .contacts div {
    display: flex;
    gap: 2rem;
  }

  h5,
  p {
    color: var(--orange-50);
    font-weight: 300;
    text-align: center;
  }

  h5 {
    font-size: 1.5rem;
  }

  .contacts a {
    color: var(--orange-50);
    transition: color 300ms ease-out;
  }

  .contacts a:hover {
    color: var(--orange-500);
  }

  a svg {
    aspect-ratio: 1;
    width: 2.5rem;
    height: 2.5rem;
  }

  .mail-icon {
    fill: currentColor;
  }

  .linkedin-icon {
    fill: none;
    stroke: currentColor;
  }
</style>
