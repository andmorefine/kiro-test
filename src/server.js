const express = require('express');
const path = require('path');
const Calculator = require('./calculator');

const app = express();
const PORT = process.env.PORT || 3000;

// ミドルウェア
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Calculator インスタンス
const calc = new Calculator();

// ルート
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// API エンドポイント
app.post('/api/calculate', (req, res) => {
  try {
    const { operation, a, b } = req.body;
    
    if (typeof a !== 'number' || typeof b !== 'number') {
      return res.status(400).json({ 
        error: '引数は数値である必要があります' 
      });
    }

    let result;
    switch (operation) {
      case 'add':
        result = calc.add(a, b);
        break;
      case 'subtract':
        result = calc.subtract(a, b);
        break;
      case 'multiply':
        result = calc.multiply(a, b);
        break;
      case 'divide':
        result = calc.divide(a, b);
        break;
      default:
        return res.status(400).json({ 
          error: '無効な演算です' 
        });
    }

    res.json({ result, operation, a, b });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// ヘルスチェック
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// サーバー起動
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 サーバーが起動しました: http://localhost:${PORT}`);
  console.log(`📊 ヘルスチェック: http://localhost:${PORT}/health`);
  console.log(`🧮 計算API: POST http://localhost:${PORT}/api/calculate`);
});