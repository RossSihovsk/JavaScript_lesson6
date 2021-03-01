//2
function Robot() {
    this.name;
    this.act;
}

Robot.prototype.construct = function Robot(name, act) {
    this.name = name;
    this.act = act;
}

Robot.prototype.construct("Robot", " просто працюю");

Robot.prototype.work = function work() {
    console.log("Я " + this.name + " - я " + this.act + "!");
}

function CoffeeRobot() {}
CoffeeRobot.prototype = Object.create(Robot.prototype);
CoffeeRobot.prototype.constructor = CoffeeRobot;

CoffeeRobot.prototype.construct("CoffeeRobot", " варю каву");

function RobotDancer() {}
RobotDancer.prototype = Object.create(Robot.prototype);
RobotDancer.prototype.constructor = RobotDancer;

RobotDancer.prototype.construct("RobotDancer", "просто танцюю");

function RobotCooker() {}
RobotCooker.prototype = Object.create(Robot.prototype);
RobotCooker.prototype.constructor = RobotCooker;

RobotCooker.prototype.construct("RobotCooker", " просто готую");

console.log();

let robotArray = [new Robot(),new CoffeeRobot(),new RobotDancer(),new RobotCooker() ];


robotArray.forEach(element => {
    element.work();
});
