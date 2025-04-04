import { PokemonColors } from "../PokemonColors";

describe("Pokemon Colors", () => {
  it("Is Normal Theme", () => {
    expect(PokemonColors.normal).toEqual("#A8A77A")
  });
 
  it("Is Fire Theme", () => {
    expect(PokemonColors.fire).toEqual("#EE8130")
  });

  it("Is Water Theme", async () => {
    expect(PokemonColors.water).toEqual("#6390F0")
  });

  it("Is Electric Theme", async () => {
    expect(PokemonColors.electric).toEqual("#F7D02C")
  });

  it("Is Grass Theme", () => {
    expect(PokemonColors.grass).toEqual("#7AC74C")
  });

  it("Is Ice Theme", async () => {
    expect(PokemonColors.ice).toEqual("#96D9D6")
  });

  it("Is Fighting Theme", async () => {
    expect(PokemonColors.fighting).toEqual("#C22E28")
  });

  it("Is Poison Theme", async () => {
    expect(PokemonColors.poison).toEqual("#A33EA1")
  });

  it("Is Ground Theme", async () => {
    expect(PokemonColors.ground).toEqual("#E2BF65")
  });
  
  it("Is Flying Theme", async () => {
    expect(PokemonColors.flying).toEqual("#A98FF3")
  });
  
  it("Is Psychic Theme", async () => {
    expect(PokemonColors.psychic).toEqual("#F95587")
  });

  it("Is Bug Theme", async () => {
    expect(PokemonColors.bug).toEqual("#A6B91A")
  });

  it("Is Rock Theme", async () => {
    expect(PokemonColors.rock).toEqual("#B6A136")
  });

  it("Is Ghost Theme", async () => {
    expect(PokemonColors.ghost).toEqual("#735797")
  });

  it("Is Dragon Theme", async () => {
    expect(PokemonColors.dragon).toEqual("#6F35FC")
  });
  
  it("Is Dark Theme", async () => {
    expect(PokemonColors.dark).toEqual("#705746")
  });

  it("Is Steel Theme", async () => {
    expect(PokemonColors.steel).toEqual("#B7B7CE")
  });

  it("Is Fairy Theme", async () => {
    expect(PokemonColors.fairy).toEqual("#D685AD")
  });
 });
 