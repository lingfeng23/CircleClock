var myCanvas = document.getElementById('myCanvas');
var c = myCanvas.getContext('2d');

function clock() {
	c.clearRect(0, 0, 400, 400);
	var data = new Date();
	var sec = data.getSeconds();
	var min = data.getMinutes();
	var hour = data.getHours();

	c.save();
	c.translate(200, 200);
	c.rotate(-Math.PI / 2);

	//分钟刻度线
	for(var i = 0; i < 60; i++) { //画12个刻度线			
		c.beginPath();
		c.strokeStyle = "#f00";
		c.lineWidth = 5;
		c.moveTo(117, 0);
		c.lineTo(120, 0);
		c.stroke();
		c.rotate(Math.PI / 30); //每个6deg画一个时钟刻度线
		c.closePath();
	}

	//时钟刻度线
	for(var i = 0; i < 12; i++) { //画12个刻度线			
		c.beginPath();
		c.strokeStyle = "#000";
		c.lineWidth = 8;
		c.moveTo(100, 0);
		c.lineTo(120, 0);
		c.stroke();
		c.rotate(Math.PI / 6); //每个30deg画一个时钟刻度线
		c.closePath();
	}
	//外表盘
	c.beginPath();
	c.strokeStyle = "pink";
	c.arc(0, 0, 145, 0, Math.PI * 2);
	c.lineWidth = 12;
	c.stroke();
	c.closePath();

	//时针
	hour = hour > 12 ? hour - 12 : hour;
	c.beginPath();
	c.save();
	c.rotate(Math.PI / 6 * hour + Math.PI / 6 * min / 60 + Math.PI / 6 * sec / 3600);
	c.strokeStyle = "yellowgreen";
	c.lineWidth = 4;
	c.moveTo(-20, 0);
	c.lineTo(50, 0);
	c.stroke();
	c.restore();
	c.closePath();

	//分针
	c.beginPath();
	c.save();
	c.rotate(Math.PI / 30 * min + Math.PI / 30 * sec / 60);
	c.strokeStyle = "springgreen";
	c.lineWidth = 3;
	c.moveTo(-30, 0);
	c.lineTo(70, 0);
	c.stroke();
	c.restore();
	c.closePath();

	//秒针
	c.beginPath();
	c.save();
	c.rotate(Math.PI / 30 * sec);
	c.strokeStyle = "red";
	c.lineWidth = 2;
	c.moveTo(-40, 0);
	c.lineTo(120, 0);
	c.stroke();
	c.restore();
	c.closePath();
	c.restore();
}
clock();
setInterval(clock, 1000);