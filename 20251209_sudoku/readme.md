```
type Cell = string;
type Board = Cell[][];

const isValid = (board: Board, r: number, c: number, val: string): boolean => {
  for (let i = 0; i < 9; i++) {
    if (board[r][i] === val) return false;
    if (board[i][c] === val) return false;
  }
  const br = Math.floor(r / 3) * 3;
  const bc = Math.floor(c / 3) * 3;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[br + i][bc + j] === val) return false;
    }
  }
  return true;
};

const findEmpty = (board: Board): [number, number] | null => {
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      if (board[r][c] === ".") return [r, c];
    }
  }
  return null;
};

const boardToString = (board: Board): string =>
  board.map(row => row.join(" ")).join("\n");

const solveSudoku = (board: Board, depth = 0): boolean => {
  const pos = findEmpty(board);
  if (!pos) {
    console.log("success:" + boardToString(board));
    return true;
  }
  const [r, c] = pos;

  for (let n = 1; n <= 9; n++) {
    const val = String(n);
    const ok = isValid(board, r, c, val);
    if (!ok) continue;

    board[r][c] = val;

    if (solveSudoku(board, depth + 1)) {
      return true;
    }

    board[r][c] = ".";
    console.log(`${"  ".repeat(depth)}
  }

  return false;
};

export const solve = (input: Board): Board | null => {
  const board: Board = input.map(row => row.slice());
  const ok = solveSudoku(board);
  return ok ? board : null;
};

// example
const puzzle: Board = [
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"],
];

const solved = solve(puzzle);
