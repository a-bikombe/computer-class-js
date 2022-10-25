"use strict";

class Computer {

	constructor(id, label) {
		this._id = id;
		this._label = label;
	}
	
	get id() {
		return this._id;
	}

	set id(id) {
		this._id = id;
	}

	// deliver label
	getLabel() {
		return `${this._id}: ${this._label}`;
	}

}

class Room {

	constructor(number) {
		this._number = number;
		this._computers = [];
	}

	addComputer(computer) {
		this._computers.push(computer);
	}
}

const computerOne = new Computer(1, "one");
console.log(computerOne.id);	// prints id

computerOne.id = 6;
console.log(computerOne);	// prints instance with props
console.log(computerOne.getLabel());	// prints label

const roomOne = new Room("one");
roomOne.addComputer(computerOne);
console.log(roomOne);





/* output:

1
Computer { _id: 6, _label: 'one' }
6: one
Room {
  _number: 'one',
  _computers: [ Computer { _id: 6, _label: 'one' } ]
}

*/