import { IdGenerator } from "../src/index";
import {generateUUID} from "../src/globals";

it("test generate", async () => {
    const id: IdGenerator = new IdGenerator();

    const randomId = id.generate();

    expect(typeof randomId).toBe("number");
});

test("generate with UUID", async () => {
    const id1: string = generateUUID();
    const id2: string = generateUUID();

    console.log("id1: " +id1);
    console.log("id2: " +id2);

    expect(id1).not.toBe(id2);
});