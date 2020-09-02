const { default: PokemonService } = require("./PokemonService");

import axios from 'axios'
import Pokemon from './Pokemon';

jest.mock('axios')


describe('Pokemon Service', () => {

  let pokeService = {};
  let sprites = {
    back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
    back_female: null,
    back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
    back_shiny_female: null,
    front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    front_female: null,
    front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
    front_shiny_female: null,
  }
  let pokemon = new Pokemon(1, 'bulbasaur', sprites)

  beforeEach(() => {
    axios.mockClear()
  })

  beforeAll(() => {
    pokeService = new PokemonService()
  });

  it('return a pokemon', async () => {
    axios.get.mockResolvedValue({ data: { id: 1, name: "bulbasaur", sprites: sprites}})
    // console.log(await pokeService.getPokemonById(1));
    expect(await pokeService.getPokemonById(1)).toEqual(pokemon)
  });

  it('should return 10 first items', async () => {
    axios.get.mockResolvedValue({data: { id: 1, name: "bulbasaur", sprites: sprites }})
    const pokeListExpected = [pokemon, pokemon, pokemon ]
    expect(await pokeService.getNextPokemons()).toEqual(pokeListExpected)
  });
})