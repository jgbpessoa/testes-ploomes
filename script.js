// Two Character Problem
function alternate(s) {
  const uniqueLetters = Array.from(new Set(s));
  let string;
  let longestString = "";
  let unique = false;
  let longestStringLength;

  for (let i = 0; i < uniqueLetters.length - 1; i++) {
    for (let j = i + 1; j < uniqueLetters.length; j++) {
      string = s
        .split("")
        .filter(
          (letter) => letter === uniqueLetters[i] || letter === uniqueLetters[j]
        );

      for (let k = 0; k < string.length - 1; k++) {
        if (string[k] !== string[k + 1]) {
          unique = true;
        } else {
          unique = false;
          break;
        }
      }

      if (unique) {
        if (string.length > longestString.length) {
          longestString = string;
        }
      }
    }
  }

  longestStringLength = longestString === "" ? 0 : longestString.length;

  console.log(longestStringLength);
  return longestStringLength;
}

// Abbreviation
function abbreviation(a, b) {
  let hasLetter = false;
  let position = 0;
  let checked;
  const uniqueLettersA = Array.from(new Set(a)).join("");
  const uniqueLettersB = Array.from(new Set(b)).join("");
  const lettersA = [...a];
  const lettersB = [...b];

  if (uniqueLettersA.length < uniqueLettersB.length) {
    console.log("NO");
    return "NO";
  }

  for (const letter of uniqueLettersA) {
    if (letter === letter.toUpperCase() && !uniqueLettersB.includes(letter)) {
      console.log("NO");
      return "NO";
    }
  }

  for (const letter of uniqueLettersB) {
    hasLetter = uniqueLettersA.toUpperCase().includes(letter);

    if (hasLetter === false) {
      console.log("NO");
      return "NO";
    }
  }

  for (let i = 0; i < lettersB.length; i++) {
    checked = false;
    while (position < lettersA.length) {
      checked = true;
      if (lettersA[position] === lettersB[i]) {
        position++;
        break;
      } else {
        if (lettersA[position].toUpperCase() === lettersB[i]) {
          const upperCaseInA = lettersA.filter(
            (letter) => letter === lettersA[position].toUpperCase()
          );
          const upperCaseInB = lettersB.filter(
            (letter) => letter === lettersA[position].toUpperCase()
          );

          if (upperCaseInB.length > upperCaseInA.length) {
            position++;
            break;
          } else {
            position++;
          }
        } else if (lettersA[position] !== lettersA[position].toUpperCase()) {
          position++;
        } else {
          console.log("NO");
          return "NO";
        }
      }
    }
  }

  if (
    lettersA
      .slice(position)
      .some((letter) => letter === letter.toUpperCase()) ||
    !checked
  ) {
    console.log("NO");
    return "NO";
  } else {
    console.log("YES");
    return "YES";
  }
}
