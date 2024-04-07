# Random Key generator #

very, very, very simple to use

installation:

    npm install @makechtec/randomkey

For use:

    import {generateUUID} from "../src/globals";

    let generatedId: string = generateUUID();

the result is simply a random integer generated id like:

    generatedId: b9e74730-8e06-4a19-bcd6-1c0d7d263ea4

## RELEASES NOTES ##

### v4.0.0 ###
- changed algorithm to UUID, to be more efficient

change use from:

    import {IdGenerator} from "@makechtec/randomkey";

    const idGenerator = new IdGenerator();

    let generatedId = idGenerator.generate();

    console.log(generatedId);

to
    
    import {generateUUID} from "../src/globals";
    
    let generatedId: string = generateUUID();


### v3.0.0 ###
- added duplicate comprobation, then a number id never is equal for a same IdGenerator instance.
- the original Id object is now a class.
- simply tests added.