export class Mission {

    private id: number;
    private creation_date: string;
    private name: string;
    private photo_id: number;
    private description: string;
    private requires: string;
    private client: string;
    private members_count: number;
    private exp: number;
    private rewards: string;

    getId(): number{
        return this.id;
    }

    getCreationDate(): string{
        return this.creation_date;
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

    getRequires(): string{
        return this.requires;
    }

    getClient(): string{
        return this.client;
    }

    getMembersCount(): number{
        return this.members_count;
    }

    getExp(): number{
        return this.exp;
    }

    getRewards(): string{
        return this.rewards;
    }

    setId(id: number){
        this.id = id;
    }

    setCreationDate(creation_date: string){
        this.creation_date = creation_date;
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

    setRequires(requires: string): void{
        this.requires = requires;
    }

    setClient(client: string): void{
        this.client = client;
    }

    setMembersCount(members_count: number): void{
        this.members_count = members_count;
    }

    setExp(exp: number): void{
        this.exp = exp;
    }

    setRewards(rewards: string): void{
        this.rewards = rewards;
    }

}