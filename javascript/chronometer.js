class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime ++;
      if (callback) callback();
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return Math.floor(this.currentTime % 60);
  }
  /*
  getMiliSeconds() {
    return Math.floor(this.currentTime % 60);
  }
  */
  computeTwoDigitNumber(value) {
    return value >= 10 ? value.toString() : "0" + value;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
    minDecElement.innerHTML = 0;
    minUniElement.innerHTML = 0;
    secDecElement.innerHTML = 0;
    secUniElement.innerHTML = 0;
    milDecElement.innerHTML = 0;
    milUniElement.innerHTML = 0;    
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${minutes}:${seconds}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
