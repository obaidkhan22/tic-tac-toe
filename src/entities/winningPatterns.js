const winningPatterns = [
  // row winningPatterns
  { combo: [0, 1, 2], strick: "strick-row-1" },
  { combo: [3, 4, 5], strick: "strick-row-2" },
  { combo: [6, 7, 8], strick: "strick-row-3" },
  // column winningPatterns
  { combo: [0, 3, 6], strick: "strick-column-1" },
  { combo: [1, 4, 7], strick: "strick-column-2" },
  { combo: [2, 5, 8], strick: "strick-column-3" },
  // diagonal winningPatterns
  { combo: [0, 4, 8], strick: "strick-diagonal-1" },
  { combo: [2, 4, 6], strick: "strick-diagonal-2" },
];

export default winningPatterns;
