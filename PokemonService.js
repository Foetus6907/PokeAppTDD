const { default: Pokemon } = require("./Pokemon");

const { default: axios } = require('axios')
// import axios from "axios"

export class PokemonService {
  constructor() {
    this.url = 'https://pokeapi.co/api/v2/pokemon/'
  }
  async getPokemonById(id) {
    return await axios.get(this.url + id).then((response) => {
      return new Pokemon(response.data.id, response.data.name, response.data.sprites)
    })
  }

  async getNextPokemons() {
    const pokemons = []
    const poklength = pokemons.length
    for (let i = poklength; i < poklength + 3; i++) {
      const pokemon = await this.getPokemonById(i)
      pokemons.push(pokemon)
    }

    return pokemons
  }
}

export default PokemonService;