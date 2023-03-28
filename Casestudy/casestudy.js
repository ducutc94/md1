class Onepiece{
    id;
    name;
    age;
    from;
    devil;
    image;
    bonus;
    position;
    constructor(id, name, age, from, devil, position, image, bonus) {
        this.id=id;
        this.name=name;
        this.age=age;
        this.from=from;
        this.devil=devil;
        this.position=position;
        this.image=image;
        this.bonus=bonus;
    }
    getId(){
        return this.id;
    }
    getName(){
        return this.name;
    }
    getAge(){
        return this.age;
    }
    getFrom(){
        return this.from;
    }
    getDevil(){
        return this.devil;
    }
    getImage(){
        return this.image;
    }
    getBonus(){
        return this.bonus;
    }
    getPosition(){
        return this.position;
    }
    setId(id){
        this.id=id;
    }
    setName(name){
        this.name=name;
    }
    setAge(age){
        this.age=age;
    }
    setFrom(from){
        this.from=from;
    }
    setDevil(devil){
        this.devil=devil;
    }
    setImage(image){
        this.image=image;
    }
    setBonus(bonus){
        this.bonus=bonus;
    }
    setPosition(position){
        this.position=position;
    }
}