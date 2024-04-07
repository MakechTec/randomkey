
import {generateUUID} from "../src/globals";



test("generate with UUID", async () => {
    const id1: string = generateUUID();
    const id2: string = generateUUID();

    console.log("id1: " +id1);
    console.log("id2: " +id2);

    expect(id1).not.toBe(id2);
});