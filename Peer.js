var EventEmitter = require('events').EventEmitter;

class Peer extends EventEmitter {
  constructor(id, name) {
    super();
    this.id = id;
    this.name = name;
  }
}

module.exports = Peer;
