function loop(robot) {
	if (215 < robot.info().x  && robot.info().x < 340)  {
		robot.jump(10);
	} else {
		robot.move(40);
	}
}