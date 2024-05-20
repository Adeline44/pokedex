
function PokemonCard( {pokemon} ) {

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