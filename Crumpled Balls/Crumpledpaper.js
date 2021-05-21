class CP{                    //CP stands for CrumpledPaper
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0.1,
            density:0.5,
            friction:4
        }

        this.x=x;
        this.y=y;
        this.r=r;


        this.body=Bodies.circle(x,y,r, options)
        this.image=loadImage("paper.png")
        World.add(world, this.body)




    }


    display(){
        var CPpos=this.body.position

        imageMode(CENTER)

        fill ("white")

        image(this.image,CPpos.x,CPpos.y,this.r,this.r)




    }
}