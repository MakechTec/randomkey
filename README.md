# Random Key generator #

very, very, very simple to use

installation:

    npm install @makechtec/randomkey

For use:

    import {IdGenerator} from "@makechtec/randomkey";

    const idGenerator = new IdGenerator();

    let generatedId = idGenerator.generate();

    console.log(generatedId);

the result is simply a random integer generated id like:

    generatedId: 1654763659568

## RELEASES NOTES ##

### v3.0.0 ###
- added duplicate comprobation, then a number id never is equal for a same IdGenerator instance.
- the original Id object is now a class.
- simply tests added.