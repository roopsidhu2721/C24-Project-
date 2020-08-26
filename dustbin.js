class dustbin
{
	constructor(x,y)
	{
		var options = {
			isStatic: true
		}

		this.x=x;
		this.y=y;
		this.width=200;
		this.height=100;
		this.wallThickness=20;
		this.angle=0;	
		
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.width, this.wallThickness, options)
		
		this.leftWallBody=Bodies.rectangle(this.x-this.width/2, this.y-this.height/2, this.wallThickness, this.height, options)
		Matter.Body.setAngle(this.leftWallBody, this.angle);
		

		
		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		

	}
	display()
	{
			var posBottom=this.bottomBody.position;
			var posLeft=this.leftWallBody.position;
			

			

			push()
			translate(posLeft.x, posLeft.y);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			stroke(255)
			rotate(this.angle)
			rect(0,0,this.wallThickness, this.height);
			pop()

			

			push()
			translate(posBottom.x, posBottom.y);
			rectMode(CENTER)
			//strokeWeight(4);
			stroke(255)
			angleMode(RADIANS)
			fill(255)
			rect(0,0,this.width, this.wallThickness);
			pop()
			
	}

}