class errandList {
    constructor(){
    this.errands = [];
    }

    createNewErrand(description){
        const newErrand = new errand(description);
        this.errands.push(newErrand);
    }
    
    rendererrands(){
        return this.errands.map((errand)=> errand.render()).join("");
    }
}