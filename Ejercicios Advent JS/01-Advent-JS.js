const giftIds = [2, 1, 3, 5, 3, 2];
// const firstRepeatedId = findFirstRepeated(giftIds)
// console.log(firstRepeatedId) // 3
// Aunque el 2 y el 3 se repiten
// el 3 aparece primero por segunda vez

const giftIds2 = [1, 2, 3, 4];
// const firstRepeatedId2 = findFirstRepeated(giftIds2)
// console.log(firstRepeatedId2) // -1
// Es -1 ya que no se repite ningún número

const giftIds3 = [5, 1, 5, 1];
// const firstRepeatedId3 = findFirstRepeated(giftIds3)
// console.log(firstRepeatedId3) // 5

findFirstRepeated(giftIds);

function findFirstRepeated(gifts) {
  // Code here
  // for (let gift of gifts) {
  //   console.log(gift);
  //

  repetido = -1;
  op = gifts.length;

  for (i = 0; i < op; i++) {
    for (j = i + 1; j < op; j++) {
      const toyA = gifts[i];
      const toyB = gifts[j];

      if (toyA === toyB) {
        repetido = toyA;
        op = j; // For optimization purpose\
        break;
      }
    }
  }
  return repetido;
}
