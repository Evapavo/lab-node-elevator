class Elevator {
  constructor() {
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.requests = [];
    this.direction = 'up';
    this.interval = 0;

  }

  start() {
    this.Interval = setInterval (()=> this.update(),1000)
  ;
}
  stop() {
    clearInterval (this.Interval);

  }

  update() {
    this.log ();
  }
  _passengersEnter() {}
  _passengersLeave() {}
  floorUp() {}
  floorDown() {}
  call() {}
  log() {
    console.log(`Direction: ${this.direction} | Floor: ${this.floor}`);
  }
}

module.exports = Elevator;
