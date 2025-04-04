import * as Colors from "../Colors";

describe("Colors", () => {
  it("Is Primary Theme", () => {
    expect(Colors.primaryTheme).toEqual("#1B8379")
  });
 
  it("Is Secondary Theme", () => {
    expect(Colors.secondaryTheme).toEqual("#1BA23A")
  });

  it("Is White Theme", async () => {
    expect(Colors.white).toEqual("#FFFFFF")
  });

  it("Is Black Theme", async () => {
    expect(Colors.black).toEqual("#000000")
  });

  it("Is Grey Theme", () => {
    expect(Colors.grey).toEqual("#A1A1A1")
  });

  it("Is Gold Theme", async () => {
    expect(Colors.gold).toEqual("#FFD700")
  });

  it("Is Red Theme", async () => {
    expect(Colors.red).toEqual("#FF0000")
  });
 });
 