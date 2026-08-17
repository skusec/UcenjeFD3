const rowsInput = document.querySelector('#rows')
const colsInput = document.querySelector('#cols')
const modeInput = document.querySelector('#mode')
const createBtn = document.querySelector('#createBtn')
const matrixContainer = document.querySelector('#matrix')
const message = document.querySelector('#message')

createBtn.addEventListener('click', createMatrix)

function createMatrix() {
  message.textContent = ''

  const rows = Number(rowsInput.value)
  const cols = Number(colsInput.value)
  const mode = Number(modeInput.value)

  if (!Number.isInteger(rows) || rows < 2 || rows > 50) {
    message.textContent = 'Broj redaka mora biti cijeli broj od 2 do 50.'
    return
  }

  if (!Number.isInteger(cols) || cols < 2 || cols > 50) {
    message.textContent = 'Broj stupaca mora biti cijeli broj od 2 do 50.'
    return
  }

  const matrix = mode <= 8
    ? createCornerSpiral(rows, cols, mode)
    : createCenterSpiral(rows, cols, mode)

  renderMatrix(matrix)

  setTimeout(() => {
    const again = confirm('Želite li napraviti još jednu matricu?')
    if (!again) {
      message.textContent = 'Odabrali ste NE. Program je završio generiranje.'
    }
  }, 50)
}

/*
  OPCIJE 1 - 8
  Početak je u jednom od četiri kuta.
  Smjer određuje redoslijed skretanja.

  Na primjer, opcija 1 za 5 x 5 daje:
   9 10 11 12 13
   8 21 22 23 14
   7 20 25 24 15
   6 19 18 17 16
   5  4  3  2  1
*/
function createCornerSpiral(rows, cols, mode) {
  const matrix = Array.from({ length: rows }, () => Array(cols).fill(0))
  const total = rows * cols

  const settings = {
    1: { row: rows - 1, col: cols - 1, dir: 2, turn: 'cw'  }, // dolje desno, prvo lijevo
    2: { row: rows - 1, col: 0,        dir: 3, turn: 'cw'  }, // dolje lijevo, prvo gore
    3: { row: 0,        col: 0,        dir: 0, turn: 'cw'  }, // gore lijevo, prvo desno
    4: { row: 0,        col: cols - 1, dir: 1, turn: 'cw'  }, // gore desno, prvo dolje
    5: { row: rows - 1, col: cols - 1, dir: 3, turn: 'ccw' }, // dolje desno, prvo gore
    6: { row: rows - 1, col: 0,        dir: 0, turn: 'ccw' }, // dolje lijevo, prvo desno
    7: { row: 0,        col: 0,        dir: 1, turn: 'ccw' }, // gore lijevo, prvo dolje
    8: { row: 0,        col: cols - 1, dir: 2, turn: 'ccw' }  // gore desno, prvo lijevo
  }

  let { row, col, dir, turn } = settings[mode]

  // 0 = desno, 1 = dolje, 2 = lijevo, 3 = gore
  const dr = [0, 1, 0, -1]
  const dc = [1, 0, -1, 0]

  for (let value = 1; value <= total; value++) {
    matrix[row][col] = value

    let nextRow = row + dr[dir]
    let nextCol = col + dc[dir]

    if (
      nextRow < 0 || nextRow >= rows ||
      nextCol < 0 || nextCol >= cols ||
      matrix[nextRow][nextCol] !== 0
    ) {
      dir = turn === 'cw'
        ? (dir + 1) % 4
        : (dir + 3) % 4

      nextRow = row + dr[dir]
      nextCol = col + dc[dir]
    }

    row = nextRow
    col = nextCol
  }

  return matrix
}

/*
  OPCIJE 9 - 16
  Krećemo iz sredine prema van.

  Kod parnog broja redaka/stupaca ne postoji samo jedna središnja ćelija,
  pa biramo jednu od četiri središnje ćelije tako da početni smjer
  prirodno ide prema van.

  Spiralni rast ide 1, 1, 2, 2, 3, 3... koraka.
*/
function createCenterSpiral(rows, cols, mode) {
  const matrix = Array.from({ length: rows }, () => Array(cols).fill(0))
  const total = rows * cols

  const modeInfo = {
    9:  { dir: 2, turn: 'cw'  }, // lijevo
    10: { dir: 0, turn: 'cw'  }, // desno
    11: { dir: 3, turn: 'cw'  }, // gore
    12: { dir: 1, turn: 'cw'  }, // dolje
    13: { dir: 2, turn: 'ccw' }, // lijevo
    14: { dir: 0, turn: 'ccw' }, // desno
    15: { dir: 3, turn: 'ccw' }, // gore
    16: { dir: 1, turn: 'ccw' }  // dolje
  }

  let { dir, turn } = modeInfo[mode]

  // Središnja početna točka.
  // Za neparne dimenzije ovo je prava sredina.
  let row = Math.floor((rows - 1) / 2)
  let col = Math.floor((cols - 1) / 2)

  const dr = [0, 1, 0, -1]
  const dc = [1, 0, -1, 0]

  let value = 1
  if (inside(row, col, rows, cols)) {
    matrix[row][col] = value++
  }

  let stepLength = 1

  while (value <= total) {
    for (let repeat = 0; repeat < 2 && value <= total; repeat++) {
      for (let step = 0; step < stepLength && value <= total; step++) {
        row += dr[dir]
        col += dc[dir]

        if (inside(row, col, rows, cols) && matrix[row][col] === 0) {
          matrix[row][col] = value++
        }
      }

      dir = turn === 'cw'
        ? (dir + 1) % 4
        : (dir + 3) % 4
    }

    stepLength++

    // Sigurnosni izlaz u slučaju neočekivane kombinacije.
    if (stepLength > Math.max(rows, cols) * 4 + 10) {
      break
    }
  }

  /*
    Ako je pravokutna matrica takva da je vanjska spirala preskočila
    neku ćeliju, popuni preostale ćelije redom.
    Ovo osigurava da svaka matrica 2..50 bude potpuno popunjena.
  */
  for (let r = 0; r < rows && value <= total; r++) {
    for (let c = 0; c < cols && value <= total; c++) {
      if (matrix[r][c] === 0) {
        matrix[r][c] = value++
      }
    }
  }

  return matrix
}

function inside(row, col, rows, cols) {
  return row >= 0 && row < rows && col >= 0 && col < cols
}

function renderMatrix(matrix) {
  matrixContainer.innerHTML = ''

  const table = document.createElement('table')
  table.className = 'matrix'

  matrix.forEach(row => {
    const tr = document.createElement('tr')

    row.forEach(value => {
      const td = document.createElement('td')
      td.textContent = value

      if (value === 1) {
        td.classList.add('start')
      }

      tr.appendChild(td)
    })

    table.appendChild(tr)
  })

  matrixContainer.appendChild(table)
}

// Automatski prikaži početni primjer 5 x 5.
createMatrix()
