export default class{
    constructor(obj){
        this.name = obj.name;
        this.age = obj.age;
    }

    sayName(){
        console.log(this.name);
    }
}