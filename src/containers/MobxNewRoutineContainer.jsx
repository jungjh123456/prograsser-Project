import { inject, observer } from 'mobx-react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import NewRoutine from '../components/NewRoutine';
import { newStart } from '../modules/getRoutine';

export default inject('RoutineStore')(
  observer(({ RoutineStore, history }) => {
    const addRoutine = add => {
      console.log(add);
      RoutineStore.addRoutines(add);
      RoutineStore.newRoutineSaga(add);
    };
    return <NewRoutine history={history} onRoutine={addRoutine} />;
  }),
);
