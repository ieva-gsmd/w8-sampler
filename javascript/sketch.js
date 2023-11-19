
let sampler;
function setup() {
  createCanvas(windowWidth, windowHeight);


sampler = new Tone.Sampler({
    urls: {
      A1: "A#.mp3",
      A2: "A#_2.mp3",
    },
    baseUrl: "/samples/",
  }).toDestination();
}
function draw() {
  background(220);
  

  
}

function keyPressed() {
  if (key === 'a') {
    sampler.triggerAttackRelease(["A1"], 0.5);
  } else if (key === 's') {
    sampler.triggerAttackRelease(["A2"], 0.5);
  }
}

