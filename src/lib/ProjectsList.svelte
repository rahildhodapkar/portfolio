<script>
  import snake from "../assets/snake.png";
  import hueboy from "../assets/hueboy.png";
  import nutron from "../assets/nutron.png";
  import det from "../assets/det.png";
  import nn from "../assets/nn.png";

  const mdDevWidthPx = 768;

  const handleClick = (e) => {
    if (e.target.tagName === "A" || e.target.closest("a")) {
      return; 
    }

    const content = e.currentTarget.querySelector(".list-item-content");
    if (window.innerWidth >= mdDevWidthPx) {
      content.classList.toggle("invisible");
    }
  };
</script>

<main>
  <div class="list-container">
    <div class="list">
      <button on:click={handleClick} class="list-item">
        <span aria-hidden="true">00</span>
        <h4>Fullstack Fitness and Nutrition Tracker</h4>
        <span class="expand-icon"></span>
        <div class="list-item-content invisible">
          <img src={nutron} alt="Test" />
          <h5>Technologies Used</h5>
          <p>Express, React, Typescript, Javascript, HTML, CSS, Prisma, PostgreSQL</p>
          <h5>Description</h5>
          <p>
            This fullstack app allows a user to track their daily calories and macros (protein, fat, carbs) consumed in a day.
            The app tracks the daily weight and calories consumed, allowing the user to determine whether they need to adjust their 
            diet at all. The app allows the user to calculate their TDEE to make better informed decisions regarding how much they should eat.
            A "recipe inspiration" page provides recipes that meet the ingredient and calorie requirements specified by the user. 

            This project is currently in development. 
          </p>
          <a
            href="https://github.com/rahildhodapkar/nutrition-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 128 128">
              <g
                ><path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
                ></path><path
                  d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"
                ></path></g
              >
            </svg>
          </a>
        </div>
      </button>
      <button on:click={handleClick} class="list-item">
        <span aria-hidden="true">01</span>
        <h4>Hueboy - a CSS Gradient Generator</h4>
        <span class="expand-icon"></span>
        <div class="list-item-content invisible">
          <img src={hueboy} alt="Test" />
          <h5>Technologies Used</h5>
          <p>Javascript, HTML, CSS</p>
          <h5>Description</h5>
          <p>
            Creating beautiful and captivating gradients in CSS can be a chore for web developers. Hueboy allows
            its users to easily generate CSS code for amazing gradients. The UI is intuitive and allows users to
            change the gradient type (linear, radial, conic), the angle, and colors used. 
          </p>
          <a
            href="https://github.com/rahildhodapkar/hueboy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 128 128">
              <g
                ><path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
                ></path><path
                  d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"
                ></path></g
              >
            </svg>
          </a>
        </div>
      </button>
      <button on:click={handleClick} class="list-item">
        <span aria-hidden="true">02</span>
        <h4>Self-Playing Snake Game</h4>
        <span class="expand-icon"></span>
        <div class="list-item-content invisible">
          <img src={snake} alt="Test" />
          <h5>Technologies Used</h5>
          <p>Python, Pyxel</p>
          <h5>Description</h5>
          <p>
            Utilizing shortest-path algorithims (BFS, A*, Greedy Best-First), the snake is able to find efficient paths 
            to eat its food on its own. The game does also have manual mode, allowing users to play themselves if they wish.
            It is made using the Pyxel game engine. To see a demo for each algorithm, please consult the README in the Github repository. 
          </p>
          <a
            href="https://github.com/rahildhodapkar/snake-shortest-path"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 128 128">
              <g
                ><path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
                ></path><path
                  d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"
                ></path></g
              >
            </svg>
          </a>
        </div>
      </button>
      <button on:click={handleClick} class="list-item">
        <span aria-hidden="true">03</span>
        <h4>Solving Minesweeper Through Neural Networks</h4>
        <span class="expand-icon"></span>
        <div class="list-item-content invisible">
          <img src={nn} alt="Test" />
          <h5>Technologies Used</h5>
          <p>Python, PyTorch, Jupyter Notebooks</p>
          <h5>Description</h5>
          <p>
            This notebook has CNN and RNN neural networks that learn to play the game Minesweeper. 
            Currently, the CNN architecture can win around 30% of games when played on "easy mode."
            Future plans include properly utilizing attention to gain a better win-rate, especially
            on harder difficulties. 
          </p>
          <a
            href="https://github.com/rahildhodapkar/minesweeper-nn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 128 128">
              <g
                ><path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
                ></path><path
                  d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"
                ></path></g
              >
            </svg>
          </a>
        </div>
      </button>
      <button on:click={handleClick} class="list-item">
        <span aria-hidden="true">04</span>
        <h4>Matrix Multiplication and Determinant Calculator</h4>
        <span class="expand-icon"></span>
        <div class="list-item-content invisible">
          <img src={det} alt="Test" />
          <h5>Technologies Used</h5>
          <p>C, Makefile</p>
          <h5>Description</h5>
          <p>
            This is a terminal-based application that can multiply two matrices together, as well as find the determinant 
            of a given matrix. The user manually enters the matrix entries through the terminal, and then follows along 
            with the terminal prompts to get the desired output. 
          </p>
          <a
            href="https://github.com/rahildhodapkar/matrix-multi-det"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 128 128">
              <g
                ><path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
                ></path><path
                  d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"
                ></path></g
              >
            </svg>
          </a>
        </div>
      </button>
    </div>
  </div>
</main>

<style>
  .list {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .list-item {
    flex: 1;
    max-width: 100%;
    border: none;
    background: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .list-item .list-item-content {
    opacity: 1;
    color: var(--orange-50);
    font-weight: 300;
    margin-bottom: 4rem;
    font-size: 0.8rem;
    max-height: none;
    will-change: max-height, opacity;
  }

  .list-item-content img {
    width: 100%;
    object-fit: cover;
    border-radius: 12px;
    margin-block: 1rem;
  }

  .list-item span {
    display: none;
  }

  .list-item-content a {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
  }

  .list-item-content a svg {
    aspect-ratio: 1;
    width: 2rem;
    transition: fill 300ms ease-out;
    will-change: fill;
    fill: var(--orange-50);
  }

  .list-item-content a svg:hover {
    fill: var(--orange-500);
  }

  span,
  h4 {
    color: var(--orange-50);
    font-weight: 300;
    font-size: 2rem;
  }

  h4 {
    font-size: clamp(1.5rem, 1.2234rem + 1.1802vw, 5rem);
    grid-column: span 3;
    text-align: center;
  }

  span {
    font-weight: 500;
  }

  .expand-icon {
    background-image: url("../assets/expand.svg");
    background-repeat: no-repeat;
    aspect-ratio: 1;
    width: 24px;
    margin-left: auto;
  }

  @media (min-width: 768px) {
    .list-item .invisible {
      max-height: 0;
      opacity: 0;
      overflow: hidden;
      transition:
        max-height 0.3s ease-out,
        opacity 0.3s ease-out;
      will-change: max-height, opacity;
    }

    .list-item {
      width: 70%;
      display: grid;
      grid-template-columns: 1fr 10fr 1fr;
      align-items: center;
      gap: 1rem;
      cursor: pointer;
    }

    h4 {
      grid-column: span 1;
    }

    .list-item span {
      display: block;
    }

    .list-item-content {
      grid-column: span 3;
      display: flex;
      flex-direction: column;
    }

    .list-item-content img {
      align-self: center;
      width: 70%;
    }

    .list-item-content p {
      max-width: 66ch;
      align-self: center;
      text-align: left;
    }
  }

  .list-item-content h5 {
    font-weight: 300;
    font-size: 2rem;
    margin-top: 1rem;
  }
</style>
