function solution(phone_book) {
  phone_book.sort();

  for (let i = 0; i < phone_book.length - 1; i++) {
  // 현재 번호와 다음 번호의 시작 부분이 같으면 접두어이므로 false를 반환.
      const value = phone_book[i];
      const nextValue = phone_book[i + 1];
      if (value === nextValue.substring(0, value.length)) {
        return false;
      }
  }
return true;
}