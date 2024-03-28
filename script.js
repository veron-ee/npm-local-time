import { setGreeting } from './src/greeting';
import { forClock, timeIsRunning } from './src/clock';
import { stopTime } from './src/buttons';


document.addEventListener('DOMContentLoaded', () => {

  const greeting = document.getElementsByClassName("greeting")[0];
  const clock = document.getElementsByClassName("clock")[0];
  const percent = document.getElementsByClassName("percent")[0];
  const button = document.getElementsByTagName("button")[0];
  // set vars for HTML divs

  stopTime(button);

  setGreeting(greeting); // greeting for night morning day and evening
  forClock(clock); // clockie clock, need to find out how to make it a proper clock not text
  timeIsRunning(percent); // future scary reminder of how quickly time passes 

})