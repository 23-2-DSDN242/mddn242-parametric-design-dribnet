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

  // parameters for circles
  let size1 = letterData["size"];
  let height1 =letterData["ellipseheight1"];
  let pos2x = 50  + letterData["offsetx"];
  let pos2y = 100 + letterData["offsety"];
  let distanceX = letterData["ellipsedistancehor"];
  let distanceY = letterData["ellipsedistancever"];
  let height2 =letterData["ellipseheight2"];
  //parameters for triangle
  let size2 = letterData["triSize"];
  let pos3x = 50 + letterData["triOffsetx"];
  let pos3y = 110+ letterData["triOffsety"];
  let degrees = letterData["triRotation"];
  let size3 = letterData["triSize2"];
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
  

for(let i=0; i<verNumLines; i++){
  line(l1startX+(i*horGapSize),l1startY,l1endX,l1endY);
}

for (let i = 0; i < verNumLines; i++) {
  line(l2startX+(i*horGapSize),l2startY,l2endX,l2endY);
}

strokeWeight(0);
fill("black");
drawTriangle(pos3x,pos3y,size2,degrees);
drawTriangle(50,175,size3,1.5,0)
ellipse(pos2x,pos2y,size1,height1);
ellipse(pos2x+distanceX,pos2y+distanceY,size1,height2);


}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  //ellipses
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  new_letter["ellipseheight1"] = map(percent, 0, 100, oldObj["ellipseheight1"], newObj["ellipseheight1"]);
  new_letter["ellipseheight2"] = map(percent, 0, 100, oldObj["ellipseheight2"], newObj["ellipseheight2"]);
  new_letter["ellipsedistancehor"] = map(percent, 0, 100, oldObj["ellipsedistancehor"], newObj["ellipsedistancehor"]);
  new_letter["ellipsedistancever"] = map(percent, 0, 100, oldObj["ellipsedistancever"], newObj["ellipsedistancever"]);
  //triangle
  new_letter["triSize"] = map(percent, 0, 100, oldObj["triSize"], newObj["triSize"]);
  new_letter["triOffsetx"] = map(percent, 0, 100, oldObj["triOffsetx"], newObj["triOffsetx"]);
  new_letter["triOffsety"] = map(percent, 0, 100, oldObj["triOffsety"], newObj["triOffsety"]);
  new_letter["triRotation"] = map(percent, 0, 100, oldObj["triRotation"], newObj["triRotation"]);
  //lines
  new_letter["line1startX"] = map(percent, 0, 100, oldObj["line1startX"], newObj["line1startX"]);
  new_letter["line1startY"] = map(percent, 0, 100, oldObj["line1startY"], newObj["line1startY"]);
  new_letter["line1endX"] = map(percent, 0, 100, oldObj["line1endX"], newObj["line1endX"]);
  new_letter["line1endY"] = map(percent, 0, 100, oldObj["line1endY"], newObj["line1endY"]);
  new_letter["line2startX"] = map(percent, 0, 100, oldObj["line2startX"], newObj["line2startX"]);
  new_letter["line2startY"] = map(percent, 0, 100, oldObj["line2startY"], newObj["line2startY"]);
  new_letter["line2endX"] = map(percent, 0, 100, oldObj["line2endX"], newObj["line2endX"]);
  new_letter["line2endY"] = map(percent, 0, 100, oldObj["line2endY"], newObj["line2endY"]);

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
