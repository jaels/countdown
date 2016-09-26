
var EventEmitter = require('events').EventEmitter;


function Countdown (n) {
    var self = this;
    setTimeout(function fn() {
        self.emit('secondElapsed', n);
        n--;
        if (n>=0){
            setTimeout(fn,1000);
        }
    }, 1000);
}

Countdown.prototype = new EventEmitter;
module.exports.Countdown = Countdown;










    //function Door(colour) {
      //this.colour = colour;
      //events.EventEmitter.call(this);

      //this.open = function()
      //{
      //this.emit('open');
     // }
    //}
