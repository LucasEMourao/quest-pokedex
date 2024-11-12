import fetchAxios from "../service/axios";
import { useEffect, useState } from "react";
import axios from "axios";

export default function usePokemon(id, offset) {
  const [pokemon, setPokemon] = useState({});
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      fetchPokemonById(id);
    } else {
      fetchPokemons(offset);
    }
  }, [id, offset]);

  const fetchPokemons = async () => {
    setLoading(true);
    try {
      const response = await fetchAxios.get(
        `pokemon?limit=10&offset=${offset}`
      );

      const pokemonResults = response.data.results;

      const detailsPokemon = await Promise.all(
        pokemonResults.map(async (pokemon) => {
          const details = await fetchAxios.get(pokemon.url);
          return details.data;
        })
      );

      setPokemons([...pokemons, ...detailsPokemon]);     
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError("Error ao carregar");
    }
  };

  const fetchPokemonById = async (id) => {
    setLoading(true);
    try {
      const response = await fetchAxios.get(`pokemon/${id}`);
      const pokemonData = response.data;
      console.log(pokemonData);

      const abilitiesPromises = pokemonData.abilities.map(async (ability) => {
        const abilityData = await axios.get(ability.ability.url);
        
        return {
          name:ability.ability.name,
          description: abilityData.data.effect_entries.find(
            (entry) => entry.language.name === "en"
          ).effect,
        };
      });

      const abilities = await Promise.all(abilitiesPromises);

      setPokemon({
        name:pokemonData.name,
        id: pokemonData.id,
        types: pokemonData.types.map((typeInfo) => typeInfo.type.name),
        moves: pokemonData.moves.map((moveInfo) => moveInfo.move.name),
        abilities: abilities,
        image: pokemonData.sprites.front_default,
      });     
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError("error ao carregar");
    }
  };

  return { pokemons, pokemon, loading, error };
}
