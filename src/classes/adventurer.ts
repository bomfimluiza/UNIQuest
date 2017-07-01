export class Adventurer {
    
    private id: number;
    private level: number;
    private exp: number;
    private missions: {
        finished: number[];
        doing: number[];
    }
    private achievements: number[];
    private name: string;
    private photo_id: number;
    private description: string;
    private skills: string;

    getId(): number{
        return this.id;
    }

    getLevel(): number{
        return this.level;
    }

    getExp(): number{
        return this.exp;
    }

    getMissions(): any{
        return this.missions;
    }

    getAchievements(): number[]{
        return this.achievements;
    }

    getName(): string{
        return this.name;
    }

    getPhotoId(): number{
        return this.photo_id;
    }

    getDescription(): string{
        return this.description;
    }

    getSkills(): string{
        return this.skills;
    }

    setId(id: number){
        this.id = id;
    }

    setLevel(level: number){
        this.level = level;
    }

    setExp(exp: number){
        this.exp = exp;
    }

    setMissions(missions: any){
        this.missions = missions;
    }

    setAchievements(achievements: number[]){
        this.achievements = achievements;
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

    setSkills(skills: string): void{
        this.skills = skills;
    }

}