const { default: Pokemon } = require("./Pokemon");

const sprites = {
  back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
  back_female: null,
  back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
  back_shiny_female: null,
  front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  front_female: null,
  front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
  front_shiny_female: null,
}

const pokemon1 = new Pokemon(1, 'test', sprites)

describe('Pokemon', () => {
  it('return pokemon name', () => {
    expect(pokemon1.name).toBe('test')
  });
  it('return pokemon id', () => {
    expect(pokemon1.id).toBe(1)
  });
  it('should return sprites', () => {
    expect(pokemon1.sprites).toEqual(sprites)
  });
})