class Hero {
	
  constructor(x,y,r)
	{
		var options = { 
			density: 1, 
			frictionAir: 1
    }
		this.r=r;
		this.image=loadImage("Superhero.png");
		this.body=Bodies.circle(x,y,(this.r)/2, options);
		World.add(world, this.body);

	}
	display()
	{
			var Pos=this.body.position;		
			push()
			translate(Pos.x,Pos.y-100);
			fill(255,0,255);
			imageMode(CENTER);
			image(this.image,0,0,this.r+150, this.r);
			pop();		
	}
}
