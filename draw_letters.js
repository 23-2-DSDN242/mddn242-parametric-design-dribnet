/* these are optional special variables which will change the system */
var systemBackgroundColor = "#caf0c8";
var systemLineColor = "#03045e";
var systemBoxColor = "#005800";

/* internal constants */
// const darkGreen  = "#0077b6";
// const lightGreen  = "#90e0ef";
const strokeColor  = "#03045e";
const darkGreen  = "#00bc77";
const lightGreen  = "#008c57";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  stroke(strokeColor);
  // strokeWeight(4);
  noStroke();

  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = 50  + letterData["offsetx"];
  let pos2y = 150 + letterData["offsety"];

  let start = letterData["start"];
  let stop = letterData["stop"];
  console.log(start, stop);

  // draw two circles
  fill(darkGreen);
  ellipse(50, 150, 75, 75);
  fill(lightGreen);
  arc(pos2x, pos2y, size2, size2, start, stop);

  // ellipse(pos2x, pos2y, size2, size2);
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  if(percent < 50) {
    new_letter["start"] = oldObj["start"];
    new_letter["stop"] = oldObj["stop"];
  }
  else {
    new_letter["start"] = newObj["start"];
    new_letter["stop"] = newObj["stop"];  
  }
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
