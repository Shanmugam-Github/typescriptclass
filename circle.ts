class Circle{
    circleRadius:number=1.0;
    circleColor:string='red';

constructor(circleRadius?:number,circleColor?:string){
if(circleRadius!==undefined)
this.circleRadius=circleRadius;
if(circleColor!==undefined)
this.circleColor=circleColor;
}
getRadius():number{
   return this.circleRadius
}
setRadius(circleRadius:number){
     this.circleRadius=circleRadius;
}
getColor():string{
    return this.circleColor
}
setColor(circleColor:string){
     this.circleColor=circleColor;
}
tostring():string{
    return`Circle[circleRadius=${this.circleRadius},circleColor=${this.circleColor}]`;
}
getArea():number{
    return this.circleRadius * this.circleRadius * Math.PI
}
getCircumference():number{
    return this.circleRadius * 2 * Math.PI;

}
}
