import { useParams } from "react-router-dom";
import usePokemon from "../../hooks/getPokemons";
import { DetailContainer, Section, Image } from "./style";
import { ButtonToReturn } from "../../components/button/BackButton";

function PokemonDetails() {
  const { id } = useParams();
  const { pokemon, loading, error } = usePokemon(id);

  if (loading) return <div>Loading...</div>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <DetailContainer>
        <ButtonToReturn />
        <Image src={pokemon.image} alt={pokemon.name} />
        <Section>
          <h2>{pokemon.name}</h2>
          <div>
            <ul>
              <h3>Moves</h3>
              {pokemon.moves.slice(0, 5).map((move, index) => (
                <li key={index}>{move}</li>
              ))}
            </ul>
            <ul>
              <h3>Type</h3>
              {pokemon.types.map((type, index) => (
                <li key={index}>{type}</li>
              ))}
            </ul>
            <ul>
              <h3>Abilities</h3>
              {pokemon.abilities.map((ability, index) => (
                <li key={index}>
                  <strong>{ability.name}: </strong>
                  {ability.description}
                </li>
              ))}
            </ul>
          </div>
        </Section>
      </DetailContainer>
    </>
  );
}

export default PokemonDetails;
