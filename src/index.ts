import { Pipe } from '@makechtec/pipe';

export class IdGenerator{

    private generatedIds: number[] = [];

    public constructor(){
        this.generatedIds = [];
    }

    public generate(): number{
        let id = this.createId();

        while(this.isAlreadyGenerated(id)){
            id = this.createId();
        }

        this.saveInRegistry(id);

        return id;
    }

    private createId(): number{

        return (new Pipe(Math.random()))
                .addAction( (n: number) => n * 1000000000 )
                .addAction( (n: number) => Math.round(n))
                .addAction( (n: number) => Date.now() + n)
                .execActions();
    }

    private isAlreadyGenerated(id: number): boolean{
        return this.generatedIds.indexOf(id) !== -1;
    }

    private saveInRegistry(id: number){
        this.generatedIds.push(id);
    }
}