const board = document.getElementById('board');
const restartBtn = document.getElementById('restartBtn');
let currentPlayer = 'X';
let gameActive = true;

// Create board
for (let i = 0; i < 9; i++) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  cell.dataset.index = i;
  board.appendChild(cell);
}

board.addEventListener('click', (e) => {
  const cell = e.target.closest('.cell');
  if (!cell || cell.querySelector('img') || !gameActive) return;

  setTimeout(() => {
  if (currentPlayer === 'X') {
    alert('Ced wins! 🎉');
  } else {
    alert('Kaiser wins! 🎉');
  }
}, 10);
    gameActive = false;
    return;
  }

  if (isDraw()) {
    setTimeout(() => alert("It's a draw!"), 10);
    gameActive = false;
    return;
  }

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
});

restartBtn.addEventListener('click', () => {
  document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = '');
  currentPlayer = 'X';
  gameActive = true;
});

function placeMark(cell, player) {
  const img = document.createElement('img');
  img.src = `images/${player.toLowerCase()}.png`;
  img.alt = player;
  cell.appendChild(img);
}

function checkWin(player) {
  const winCombos = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
  ];
  const cells = Array.from(document.querySelectorAll('.cell'));
  return winCombos.some(combo =>
    combo.every(index =>
      cells[index].querySelector('img')?.alt === player
    )
  );
}

function isDraw() {
  return Array.from(document.querySelectorAll('.cell')).every(cell => cell.querySelector('img'));
}
