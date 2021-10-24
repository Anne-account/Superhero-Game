class Monster {

  constructor(x,y,r)
	{
		var options = { 
			density: 5, 
			frictionAir: 0
    };
		this.r=r;
		this.image=loadImage("Monster-01.png");
		this.body=Bodies.circle(x,y, (this.r)/2, options);
		World.add(world, this.body);

	}
	display()
	{
			var Pos=this.body.position;		
			push();
			translate(Pos.x,Pos.y-100);
			imageMode(CENTER);
			image(this.image, 0,0,this.r, this.r);
			pop();		
	}
}
