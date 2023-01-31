import { IdGenerator } from "../src/index";

it("test generate", async () => {
    const id: IdGenerator = new IdGenerator();

    const randomId = id.generate();

    expect(typeof randomId).toBe("number");
});