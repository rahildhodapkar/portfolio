<main>
  <div id="contact">
    <h3>CONTACT</h3>
    <div class="contacts">
      <span>
        <a
          href="mailto:rahildhodapkar@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
          ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"
            ><path
              d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"
            /></svg
          ></a
        >
      </span>
      <span>
        <a
          href="https://www.linkedin.com/in/rahildhodapkar/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <svg viewBox="0 0 128 128">
            <path
              d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3zM39.17 107H21.06V48.73h18.11zm-9-66.21a10.5 10.5 0 1110.49-10.5 10.5 10.5 0 01-10.54 10.48zM107 107H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53V48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75z"
            ></path>
          </svg>
        </a>
      </span>
    </div>
  </div>
</main>

<style>
  #contact {
    background-color: var(--black);
    display: grid;
    place-items: center;
  }

  h3 {
    font-size: 3rem;
    font-weight: 300;
    color: var(--orange-500);
    max-width: 66ch;
    text-align: center;
  }

  .contacts {
    margin-block: 3rem;
    display: flex;
    gap: 2rem;
  }

  span {
    color: var(--orange-50);
    font-weight: 300;
    max-width: 66ch;
  }

  a svg {
    fill: var(--orange-50);
    aspect-ratio: 1;
    width: 2.5rem;
    transition: fill 300ms ease-out;
    will-change: fill;
  }

  a svg:hover {
    fill: var(--orange-500);
  }
</style>
