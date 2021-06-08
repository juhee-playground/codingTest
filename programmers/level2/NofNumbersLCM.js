// #programmers, #level2, #LCM, #GCD, #N개의최소공배수

function solution(arr) {
  // arr.sort((a, b) => b - a);
  let getGCD = (a, b) => (b > 0 ? getGCD(b, a % b) : a);
  let getLcm = (a, b, gcd) => (a * b) / gcd;
  
  let initValue = arr[0];
  const gcd = arr.reduce((initValue, value, index) => {
      console.log(initValue, value);
      return initValue % value === 0 ? parseInt(initValue / value) : getGCD(initValue, value);
  });
  console.log("gcd", gcd);

  const lcm = arr.reduce((initValue, value) => {
      return getLcm(initValue, value, gcd); 
  });
  // console.log("lcm", lcm);
  
  return lcm;
}