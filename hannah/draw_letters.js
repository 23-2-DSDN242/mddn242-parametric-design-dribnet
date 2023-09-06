/* these are optional special variables which will change the system */
var systemBackgroundColor = "black";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
const darkBlue  = "#0077b6";
const lightBlue  = "#90e0ef";
const strokeColor  = "#03045e";

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
  strokeWeight(4);

  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = 50  + letterData["offsetx"];
  let pos2y = 100 + letterData["offsety"];
//parameters for triangle
  let size3 = letterData["triSize"];
  let pos3x = 50 + letterData["triOffsetx"];
  let pos3y = 110+ letterData["triOffsety"];
  let degrees = letterData["triRotation"];
  //parameters for lines
  let l1startX= letterData["line1startX"];
  let l1startY= letterData["line1startY"];
  let l1endX= letterData["line1endX"];
  let l1endY= letterData["line1endY"];
  let l2startX=letterData["line2startX"];
  let l2startY=letterData["line2startY"];
  let l2endX=letterData["line2endX"];
  let l2endY=letterData["line2endY"]




stroke("white")
strokeWeight(2)
let verNumLines= 9
let horNumLines= 15
let verGapSize= 200/horNumLines+1
let horGapSize= 100/verNumLines+1.5

// for (let i = 0; i < horNumLines; i++) {
//   line(0,0,100,0+(i*verGapSize));
// }
//+(i*verGapSize)
// for (let i = 0; i < verNumLines; i++) {
//   line(0+(i*horGapSize),0,0,200);
// }
//+(i*horGapSize)


//stays the same thorughout
 for (let i = 0; i < horNumLines; i++) {
  line(0,0+(i*verGapSize),100,0+(i*verGapSize));
 }
  //+(i*verGapSize)

for(let i=0; i<verNumLines; i++){
  line(l1startX+(i*horGapSize),l1startY,l1endX,l1endY)//l1endY+(i*horGapSize));
}

for (let i = 0; i < verNumLines; i++) {
  line(l2startX+(i*horGapSize),l2startY,l2endX,l2endY);
}

strokeWeight(0);
fill("black");
drawTriangle(pos3x,pos3y,size3,degrees);
ellipse(pos2x,pos2y,size2);
ellipse(pos2x,pos2y+85,size2);

}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  return new_letter;
}

function drawTriangle(posx,posy,size,degrees){
  angleMode(DEGREES);
  push ();
  translate(posx,posy);
  rotate(degrees);
  scale(size);
  triangle(-28, 19, 0, -28, 28, 19);
  pop ();


}



var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
