import { createMachine, interpret } from 'xstate';

const lightMachine = createMachine({
  // Your state machine blueprint here
  id: 'trafficLight',
  initial: 'red',
  states: {
    red: { on: {changeLight: 'green'}},
    green: { on: {changeLight: 'yellow'}},
    yellow: { on: {changeLight: 'red'}},
  }
});


const service = interpret(lightMachine)
.onTransition(state => console/log(state.value))
.start();

service.send('changeLight'); 
// change from red to green
service.send('changeLight');
// change from green to yellow
service.send('changeLight');
// change from yellow to red


service.onTransition(state => {
  console.log(state);
  switch (state.value) {
    case 'red': 
      // code to run when the machine changes from yellow to red
      break;
    case 'green': 
      // code to run when the machine changes from red to green
      break;
    case 'yellow':
      // code to run when the machine changes from green to yellow 
      break
    default: console.log('ERROR invalid state');
  }
});

export { lightMachine, service };