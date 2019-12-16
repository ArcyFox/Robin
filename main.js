let wordtable;

function preload() {
  wordtable = loadTable('toki pona eng.csv', 'csv', 'header');
}

function setup() {
  createCanvas(500, 500);
  createP(wordtable.getRowCount());
}

function draw() {
  background (127);
}
