export class Achievement{

    private id: number;
    private rank: number[];
    private name: string;
    private photo_id: number;
    private description: string;
    private tier: string;

    getId(): number{
        return this.id;
    }

    getRank(): number[]{
        return this.rank;
    }

    getName(): string{
        return this.name
    }

    getPhotoId(): number{
        return this.photo_id;
    }

    getDescription(): string{
        return this.description;
    }

    getTier(): string{
        return this.tier;
    }

    setId(id: number){
        this.id = id;
    }

    setRank(rank: number[]){
        this.rank = rank;
    }

    setName(name: string): void{
        this.name = name;
    }

    setPhotoId(photo_id: number): void{
        this.photo_id = photo_id;
    }

    setDescription(description: string): void{
        this.description = description;
    }

    setTier(tier: string): void{
        this.tier = tier;
    }

}