function loop(robot) {
	if ((350 < robot.info().x  && robot.info().x < 500) || (550 < robot.info().x  && robot.info().x < 600))  {
		robot.jump(10);
	} else {
		robot.move(40);
	}
}