<script lang="ts">
  import placeholder from "$lib/assets/cover_placeholder.png";
  let { book } = $props();
</script>

<div class="book-container">
  <div class="upperSection">
    <div class="image">
      <img
        src={book.imageLink ? book.imageLink : placeholder}
        alt="cover of the book"
      />
    </div>
    <div class="title-author-actions-block">
      <h2>{book.title}</h2>
      <p>{book.author}</p>
      <div class="buttons">
        <button id="rentButton">Rent</button>
        <button id="favoriteButton">Favorite</button>
      </div>
      <div class={book.availability ? "available" : "not-available"}>
        {book.availability ? "Available" : "Not available"}
      </div>
    </div>
  </div>

  <div class="description">
    <h4><u>DESCRIPTION</u></h4>
    <p>
      Set on the desert planet Arrakis, Dune is the story of the boy Paul
      Atreides, heir to a noble family tasked with ruling an inhospitable world
      where the only thing of value is the “spice” melange, a drug capable of
      extending life and enhancing consciousness. Coveted across the known
      universe, melange is a prize worth killing for... When House Atreides is
      betrayed, the destruction of Paul’s family will set the boy on a journey
      toward a destiny greater than he could ever have imagined. And as he
      evolves into the mysterious man known as Muad’Dib, he will bring to
      fruition humankind’s most ancient and unattainable dream.
      {book.description}
    </p>
  </div>
</div>

<style>
  .book-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }

  .upperSection {
    display: grid;
    flex-direction: row;
    align-items: start;
    grid-template-columns: 150px 1fr;
  }

  .image {
    flex: 0 0 auto;
  }

  .image img {
    width: 150px;
    height: auto;
    border-radius: 8px;
  }

  .title-author-actions-block {
    justify-self: center;
  }

  .buttons {
    display: flex;
    gap: 10px;
    margin: 10px 0;
  }

  button {
    padding: 8px 12px;
    border: none;
    border-radius: 5px;
    background-color: #009acd;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: #00607f;
  }

  .available {
    color: #47b241;
  }

  .not-available {
    color: #e3231a;
  }

  .description {
    margin-top: 20px;
    font-size: 0.9rem;
    color: #555;
  }

  @media (max-width: 365px) {
    .upperSection,
    .description {
      display: block;
      text-align: center;
      margin: 0 auto;
      justify-self: center;
      justify-items: center;
    }

    .title-author-actions-block {
      margin-top: 20px;
    }
  }

  @media (min-width: 1024px) {
    .book-container {
      max-width: 1200px;
      padding: 40px;
    }
    
    .upperSection {
      grid-template-columns: 200px 1fr;
      gap: 40px;
    }
    
  }
</style>
