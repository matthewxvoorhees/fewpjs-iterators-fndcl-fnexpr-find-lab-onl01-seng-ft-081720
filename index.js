const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(record) {
  const found = record.find(element => element.result === "W")
  if (found) {
    return found.year
  } 
}
