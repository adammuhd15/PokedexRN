import { emailRegEx, nameRegEx } from "../";

describe("Reg Ex", () => {
  it("Email Regex", () => {
    expect(emailRegEx).toEqual(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{1,5})+$/)
  });
 
  it("Name Regex", () => {
    expect(nameRegEx).toEqual(/^[a-z A-Z0-9-:]+$/)
  });
 });
 