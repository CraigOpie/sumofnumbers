function sumFor(list) {
  let sum = 0;
  for (const each of list) {
    sum += each;
  }
  return sum;
}

function sumWhile(list) {
  let index = (list.length - 1);
  let sum = 0;
  while (index >= 0) {
    sum += list[index];
    index -= 1;
  }
  return sum;
}

function sumRecursion(list, tot = 0, index = list.length - 1) {
  let sum = tot;
  sum += list[index];
  if (index === 0) {
    return sum;
  }
  return sumRecursion(list, sum, index - 1);
}

function sumTheSimpleWay(list) {
  return _.reduce(list, function (sum, num) { return (sum + num); }, 0);
}

const testList = [1, 2, 3, 4];
console.log(sumFor(testList));
console.log(sumWhile(testList));
console.log(sumRecursion(testList));
console.log(sumTheSimpleWay(testList));
