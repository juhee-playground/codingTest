/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
  let totalItem = 0;
  let left_boxes = truckSize;

  boxTypes.sort((a, b) => {
      const [countOfBox1, countOfItems1] = a;
      const [countOfBox2, countOfItems2] = b;
      return countOfItems2 - countOfItems1 || countOfBox2 - countOfBox1;
  });

  for(let i = 0; i < boxTypes.length; i++) {
      const [countOfBox, countOfItem] = boxTypes[i];
      if(countOfBox <= left_boxes) {
          totalItem += (countOfBox * countOfItem);
          left_boxes -= countOfBox;
      }else {
          console.log("here")
          totalItem += (left_boxes * countOfItem);
          left_boxes -= left_boxes;
      }

      if(left_boxes === 0) {
          return totalItem;
      }
  }
  return totalItem;
};