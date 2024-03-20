class React {
    constructor(){
        this.library = "React"
        this.server = "https://localhost:3000"
        document.querySelector("button").addEventListener("click",this.handleClick.bind(this))
    }
    handleClick(){
        console.log("Button Clicked")
        console.log(this.server)
        console.log(this.library)
    }
}

const app = new React()
console.log(app)