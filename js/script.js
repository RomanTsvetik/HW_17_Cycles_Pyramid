let n = +prompt (`Введите число для высоты пирамиды`);

for(let i=1; i<= n; i++){

    let space = ' '.repeat(n-i);
    let star = '*'.repeat(i * 2 - 1);

    console.log(space + star + space);
  }
