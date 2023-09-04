const colorFront1  = "#199cff";
const colorFront2  = "#ffcc66";
const colorStroke  = "#233f11";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  stroke(colorStroke);
  strokeWeight(4);

  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = 50  + letterData["offsetx"];
  let pos2y = 150 + letterData["offsety"];

  // draw two circles
  fill(colorFront1);
  ellipse(50, 150, 75, 75);
  fill(colorFront2);
  ellipse(pos2x, pos2y, size2, size2);
}

let reference_pos = {
  "size": 40,
  "offsetx": 0,
  "offsety": 0
};

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  if(percent < 50) {
    new_letter["offsetx"] = map(percent, 0, 50, oldObj["offsetx"], reference_pos["offsetx"]);
    new_letter["size"] = map(percent, 0, 50, oldObj["size"], reference_pos["size"]);
    new_letter["offsety"] = map(percent, 0, 50, oldObj["offsety"], reference_pos["offsety"]);
  }
  else {
    new_letter["offsetx"] = map(percent, 50, 100, reference_pos["offsetx"], newObj["offsetx"]);
    new_letter["size"] = map(percent, 50, 100, reference_pos["size"], newObj["size"]);
    new_letter["offsety"] = map(percent, 50, 100, reference_pos["offsety"], newObj["offsety"]);  
  }
  return new_letter;
}

function interpolate_letter_example(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  if(percent < 20) {    
    let new_percent = -1 * percent;
    new_letter["size"] = map(new_percent, 0, 20, oldObj["size"], newObj["size"]);
    new_letter["offsety"] = map(new_percent, 0, 20, oldObj["offsety"], newObj["offsety"]);
  }
  else if(percent >=20 && percent< 40) {
    let new_percent = map(percent, 20, 40, -20, 0);
    new_letter["size"] = map(new_percent, 0, 20, oldObj["size"], newObj["size"]);
    new_letter["offsety"] = map(new_percent, 0, 20, oldObj["offsety"], newObj["offsety"]);
  }
  else if(percent >= 40 && percent < 60) {
    new_letter["size"] = map(percent, 40, 60, oldObj["size"], newObj["size"]);
    new_letter["offsety"] = map(percent, 40, 60, oldObj["offsety"], newObj["offsety"]);
  }
  else {
    new_letter["size"]    = newObj["size"];
    new_letter["offsety"] = newObj["offsety"];
  }
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]