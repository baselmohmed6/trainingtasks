class shapes{

    color:string="red";
    filled:boolean=true;
    constructor(colors:string, filleds:boolean)
    {
        this.color=colors;
        this.filled=filleds;
    }
     public  getcolors():void
     {
        console.log(this.color);
     }
     public  getfilled():void
     {
       console.log(this.filled);
     }
}
const shapesr= new shapes("red",true);
shapesr.getcolors();
shapesr.getfilled();

class circle extends shapes
{
   private radius:number=0.1;

    constructor(radiuss:number,colors:string,fillids:boolean)
    {
     super(colors,fillids);
      this.radius=radiuss;
      
    }

    public get getradius()
    {
        return this.radius
    }
    public get getarea()
    {
        return Math.PI * this.radius * this.radius;
    }
    public get circumference()
    {
        return 2* Math.PI* this.radius;
    }
}
const circles=new  circle(0.1,"red",true);
console.log(circles.getarea+"              "+circles.circumference)
