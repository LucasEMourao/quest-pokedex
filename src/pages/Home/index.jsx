import { useState } from "react";
import usePokemon from "../../hooks/getPokemons";
import { Link } from "react-router-dom";
import { Container, ShowMoreButton } from "./style";
import { ButtonToReload } from "../../components/button/ReloadButton";

function Home() {
  const [offset, setOffSet] = useState(0);
  const { pokemons, loading, error } = usePokemon(null, offset);

  if (loading) return <p>Carregando... </p>;
  if (error) return <p>{error}</p>;

  return (
    <Container>
      <ButtonToReload />
      <h1>Pokedex</h1>

      <ul>
        {pokemons.map((pokemon, index) => (
          <li key={index}>
            <Link to={`/pokemon/${pokemon.name}`}>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
              <p>{pokemon.name}</p>
            </Link>
          </li>
        ))}
      </ul>
      <ShowMoreButton onClick={() => setOffSet(offset + 10)}>
        Show More
      </ShowMoreButton>
    </Container>
  );
}

export default Home;
