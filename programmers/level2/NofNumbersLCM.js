// #programmers, #level2, #LCM, #GCD, #N개의최소공배수

function solution(arr) {
  let getGCD = (a, b) => ((a % b) === 0 ? b : getGCD(b, a % b));
  let getLcm = (a, b) => (a * b) / getGCD(a, b);

  let lcm = 1;
  for(let i = 0; i < arr.length; i++) {
    lcm = getLcm(lcm, arr[i]);
  }
  return lcm;
}