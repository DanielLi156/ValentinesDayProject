<script>
  import Background from "./lib/background.jpg"

  /** @type {HTMLButtonElement} */
  let noButton;
  /** @type {HTMLElement} */
  let mainDiv;
  /** @type {HTMLElement} */
  let secondDiv;

  function moveButton() {
    let i =Math.abs(Math.floor(Math.random() * window.innerWidth-95))
    let j = Math.abs(Math.floor(Math.random() * window.innerHeight-65));

    noButton.style.position = 'absolute';
    noButton.style.left = i + 'px';
    noButton.style.top = j + 'px';
  }

  function yes() {
    mainDiv.style.display = "none";
    secondDiv.style.display = "flex";
    secondDiv.style.justifyContent = "center";
    secondDiv.style.alignItems = "center";
    secondDiv.style.flexDirection = "column";
    secondDiv.style.margin = "auto";
  }
</script>

<main style="background-image: url({Background});">
  <div class="main" bind:this={mainDiv}>
    <h1>Will You Be My Valentines</h1>
    <div>
      <form>
        <button type="button" class="button" on:click={yes}>Yes</button>
        <button bind:this={noButton} type="button" class="button" on:click|preventDefault={moveButton}>No</button>
      </form>
    </div>
  </div>

  <div bind:this={secondDiv} class="yes">
    <img src="/cute.gif" alt="cutbears">
  </div>
</main>


<style>
  @import url('https://fonts.googleapis.com/css2?family=Parisienne&family=Satisfy&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

  main {
    height: 100%;
    background-repeat: repeat;
  }

  h1 {
    font-family: "Parisienne", cursive;
    font-weight: 400;
    font-size: 5rem;
    font-style: normal;
    animation: color-change 15s infinite;
    text-align: center;
  }

  .yes {
    height: 100%;
    display: none;
  }

  .main {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: auto;
  }

  .button {
    border-radius: 4px;
    border: none;
    width: 90px;
    height: 60px;
    font-family: "Roboto", sans-serif;
    font-size: 2rem;
    color: white;
    background-color: rgb(249, 173, 252);
    cursor: pointer;
    margin: 20px;
  }

  @keyframes color-change {
    0% { color: rgb(252, 108, 133); }
    20% { color: rgb(241, 11, 73); }
    40% { color: rgb(248, 131, 121); }
    60% { color: rgb(189, 85, 250); }
    80% { color: rgb(136, 0, 163); }
    100% { color: rgb(224, 176, 255); }
  }
</style>
