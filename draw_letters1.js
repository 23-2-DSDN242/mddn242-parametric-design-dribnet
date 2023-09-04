const colorFront1  = "#199cff";
const colorFront2  = "#59ccff";
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

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);

  if(percent < 40) {
    new_letter["offsety"] = oldObj["offsety"];
  }
  else if(percent > 60) {
    new_letter["offsety"] = newObj["offsety"];
  }
  else {
    new_letter["offsety"] = map(percent, 40, 60, oldObj["offsety"], newObj["offsety"]);
  } 

  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]