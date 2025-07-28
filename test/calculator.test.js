const Calculator = require('../src/calculator');

// 簡単なテストフレームワーク
function test(description, testFn) {
  try {
    testFn();
    console.log(`✅ ${description}`);
  } catch (error) {
    console.log(`❌ ${description}: ${error.message}`);
  }
}

function assertEqual(actual, expected) {
  if (actual !== expected) {
    throw new Error(`期待値: ${expected}, 実際の値: ${actual}`);
  }
}

function assertThrows(fn, expectedMessage) {
  try {
    fn();
    throw new Error('例外が発生しませんでした');
  } catch (error) {
    if (!error.message.includes(expectedMessage)) {
      throw new Error(`期待されるエラーメッセージ: ${expectedMessage}, 実際: ${error.message}`);
    }
  }
}

// テスト実行
console.log('🧪 Calculator テスト開始\n');

const calc = new Calculator();

test('加算: 2 + 3 = 5', () => {
  assertEqual(calc.add(2, 3), 5);
});

test('減算: 5 - 3 = 2', () => {
  assertEqual(calc.subtract(5, 3), 2);
});

test('乗算: 4 * 3 = 12', () => {
  assertEqual(calc.multiply(4, 3), 12);
});

test('除算: 10 / 2 = 5', () => {
  assertEqual(calc.divide(10, 2), 5);
});

test('ゼロ除算エラー', () => {
  assertThrows(() => calc.divide(10, 0), 'ゼロで割ることはできません');
});

test('無効な引数エラー（文字列）', () => {
  assertThrows(() => calc.add('a', 2), '引数は数値である必要があります');
});

console.log('\n🎉 テスト完了！');