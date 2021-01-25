import axios from 'axios';

const { observable, makeObservable } = require('mobx');

class routineStore {
  @observable routines = [];
  constructor() {
    makeObservable(this);
  }
  addRoutines = routine => {
    this.routines.push(routine);
  };

  newRoutineSaga = async props => {
    try {
      const { id } = JSON.parse(localStorage.getItem('token'));
      const prevState = await axios.get(`/users/${id}`);
      await axios.patch(`/users/${id}`, { routines: [...prevState.data.routines, props.routine] });
    } catch (error) {
      console.log(error);
    }
  };
}

export default routineStore;
