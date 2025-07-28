// 計算機クラス
class Calculator {
  add(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('引数は数値である必要があります');
    }
    return a + b;
  }

  subtract(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('引数は数値である必要があります');
    }
    return a - b;
  }

  multiply(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('引数は数値である必要があります');
    }
    return a * b;
  }

  divide(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('引数は数値である必要があります');
    }
    if (b === 0) {
      throw new Error('ゼロで割ることはできません');
    }
    return a / b;
  }
}

module.exports = Calculator;