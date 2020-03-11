class toDo {
    constructor(description){
        this.description = description;
    }

    render() {
        return `
        <li>
        ${this.description}
        <button data-description=${this.description}"</button>
        </li>
        `
    }

}