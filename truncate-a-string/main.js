function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}

const first = truncateString("A-tisket a-tasket A green and yellow basket", 8);
console.log(first);

const second = truncateString("Peter Piper picked a peck of pickled peppers", 11);
console.log(second);

const third = truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);
console.log(third);

const fourth = truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);
console.log(fourth)

const fifth = truncateString("A-", 1);
console.log(fifth);

const sixth = truncateString("Absolutely Longer", 2);
console.log(sixth);
