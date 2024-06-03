/**
 * PCCP 기출문제 1번
 * 붕대감기
 * @param {array} bandage [시전 시간, 초당 회복량, 추가 회복량]
 * @param {number} health
 * @param {array} attacks attacks[i] [공격 시간, 피해량]
 * @returns
 */

function solution(bandage, health, attacks) {
  const [cooltime, recoveryPerSec, addRecovery] = bandage;
  let index = 0;
  let curHealth = health;
  let continuity = 0;

  // 마지막 공격 시간을 가져옵니다.
  let lastPang = attacks[attacks.length-1][0];

  for(let i = 0; i <= lastPang; i++) {
    // 연속 성공 시간이 시전 시간과 같으면 추가 회복
    if (continuity === cooltime) {
        curHealth += addRecovery;
        continuity = 0;
    }

    // 체력이 최대 체력을 넘을 수 없도록 제한
    if (curHealth > health) {
        curHealth = health;
    }
    console.log(i, '초, 현재 체력:', curHealth, '연속 공격: ', continuity);

    // 현재 시간에 공격이 있는지 확인
    const [sec, attack] = attacks[index] || [];
    const isDead = curHealth <= 0;
    if (sec === i) {
      curHealth -= attack;
      continuity = 0;
      index++;
      console.log('남은 체력: ', curHealth);
      if (curHealth <= 0) {
          return -1;
      }
    } else {
        continuity++;
        curHealth += recoveryPerSec;
    }
  }

  return curHealth <= 0 ? -1 : curHealth; 
}