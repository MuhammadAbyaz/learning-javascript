class NotesStore {
  constructor() {
    this.notes = [];
    this.states = ["active", "completed", "others"];
  }
  addNote(state, name) {
    let stateCheck = false;
    if (!name) {
      throw new Error("Name cannot be empty");
    }
    for (let i = 0; i < this.states.length; i++) {
      if (state === this.states[i]) {
        stateCheck = true;
        break;
      }
    }
    if (stateCheck === false) {
      throw new Error(`Invalid state ${state}`);
    }
    const note = { name, state };
    this.notes.push(note);
  }
  getNotes(state) {
    let stateCheck = false;
    for (let i = 0; i < this.states.length; i++) {
      if (state === this.states[i]) {
        stateCheck = true;
        break;
      }
    }
    if (stateCheck === false) {
      throw new Error(`Invalid state ${state}`);
    }
    this.notes.forEach((element) => {
      if (element.state === state) {
        console.log(element.name);
      }
    });
  }
}

const notesStore = new NotesStore();
notesStore.addNote("active", "");
notesStore.addNote("active", "Drink Coffee");
notesStore.addNote("completed", "Study");
notesStore.getNotes("completed");
notesStore.getNotes("active");

function dataFinder(data) {
  return function find(min, max, value) {
    if (max > data.length) {
      throw new Error("Invalid range");
    }
    for (let i = min; i <= max; i++) {
      if (data[i] === value) {
        return true;
      }
    }
    return false;
  };
}

console.log(dataFinder([10, 1, 0, 13, 4, 15])(1, 10, 13));
