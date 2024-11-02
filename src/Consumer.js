import { Random } from "@woowacourse/mission-utils";

class Consumer {
  #lottoTickets = [];

  constructor(price) {}

  isNumber() {
    // 보너스 번호 검사도 trim()사용해서 여기서 함
    if (!/^[0-9]+$/.test(price)) {
      throw new Error(ERROR_MESSAGE.IS_NUMBER);
    }
  }

  isUnitOfPrice() {
    if (!(price % 1000 === 0)) {
      throw new Error(ERROR_MESSAGE.PRICE_INCORRECT);
    }
  }

  minPrice() {
    if (price < 1000) {
      throw new Error(ERROR_MESSAGE.MIN_PRICE);
    }
  }

  maxPrice() {
    if (100000 < price) {
      throw new Error(ERROR_MESSAGE.MAX_PRICE);
    }
  }

  lottoCount() {
    lottoNumber = price / 1000;
  }

  getOrderLotto() {
    for (i = 0; i < a; i++) {
      randomNumber = Random.pickUniqueNumbersInRange(1, 45, 6);
      lotto = new Lotto(randomNumber);
      this.#lottoTickets.push(lotto);
    }
  }
  ///당첨번호 유효성
  CheckWinningNumberInput() {
    if (!/^[0-9]+(,\s*[0-9]+)*$/.test(winningNumber)) {
      throw new Error(WINNING_NUMBER_ERROR_MESSAGE.ONLY_NUMBER_COMMA);
    }
  }

  isWinningNumberLength() {
    const maxNum = 6;
    if (winningNumber.length !== maxNum) {
      throw new Error(WINNING_NUMBER_ERROR_MESSAGE.INCORRECT_COUNT_NUMBER);
    }
  }

  numberRangeCheck() {
    // 보너스 번호 범위도 여기서 함
    if (winningNumber < 1 || 45 < winningNumber) {
      throw new Error(NUMBER_INPUT_ERROR_MESSAGE.NUMBER_RANGE);
    }
  }

  isduplicateNumber() {
    checkduplicate = new set(winningNumber);
    if (checkduplicate.size !== winningNumber.length) {
      throw new Error(WINNING_NUMBER_ERROR_MESSAGE.DUPLICATE_NUMBER);
    }
  }

  // 보너스 번호 유효성 검사
  checkBonusNumber() {
    if (!/^[0-9\s]+$/.test(bonusNumber)) {
      throw new Error();
    }
  }
}
