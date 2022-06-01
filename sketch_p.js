let oscs = [];

function setup() {
  createCanvas(1, 1);
}


function word(number) {

  if (number==1) {
    let osc = new p5.Oscillator('sine');
    osc.start();
    osc.amp(0, 5.5);
    osc.freq(311);
    oscs.push(osc);
  } else  if (number==2) {
    let osc = new p5.Oscillator('triangle');
    osc.start();
    osc.amp(0, 1.5);
    osc.freq(240);
    oscs.push(osc);
  } else  if (number==3) {
    let osc = new p5.Oscillator('triangle');
    osc.start();
    osc.amp(0, 0.3);
    osc.freq(980);
    oscs.push(osc);
  } else  if (number==4) {
    let osc = new p5.Oscillator('square');
    osc.start();
    osc.amp(0, 0.2);
    osc.freq(560);
    oscs.push(osc);
  } else  if (number==5) {
    let osc = new p5.Oscillator('sine');
    osc.start();
    osc.amp(0, 0.5);
    osc.freq(830);
    oscs.push(osc);
    var frequency = 440.0
    o.frequency.value = frequency;
  } else  if (number==6) {
    let osc = new p5.Oscillator('sine');
    osc.start();
    osc.amp(0, 0.5);
    osc.freq(138);
    oscs.push(osc);
    var frequency = 440.0
    o.frequency.value = frequency;
  }


}
