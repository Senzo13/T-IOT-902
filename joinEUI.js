function generateJoinEUI() {
  const joinEUI = new Uint8Array(8);
  for (let i = 0; i < joinEUI.length; i++) {
    joinEUI[i] = Math.floor(Math.random() * 256);
  }
  return joinEUI;
}

function joinEUIToString(joinEUI) {
  return Array.from(joinEUI)
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("-")
    .toUpperCase();
}

const joinEUI = generateJoinEUI();
const joinEUIString = joinEUIToString(joinEUI);

console.log("Generated JoinEUI:", joinEUIString);
