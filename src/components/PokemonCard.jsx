
function PokemonCard() {

  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
      imgSrc: "",
    },
  ];

  const pokemon = pokemonList[0];


  return (
    <>
      <figure>
        <img src={pokemon.imgSrc} alt="Bulbasaur" />
      </figure>
      <figcaption>{pokemon.name}</figcaption>

      <figure>
        {pokemon.imgSrc == true ?
          <img src="" alt="" />
          :
          <p>???</p>
        }
      </figure>
      <figcaption>Mew</figcaption>
    </>
  )
}

export default PokemonCard