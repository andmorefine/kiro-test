-- 初期データベース設定
CREATE TABLE IF NOT EXISTS calculations (
    id SERIAL PRIMARY KEY,
    operation VARCHAR(20) NOT NULL,
    operand_a DECIMAL(10,2) NOT NULL,
    operand_b DECIMAL(10,2) NOT NULL,
    result DECIMAL(10,2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- サンプルデータ
INSERT INTO calculations (operation, operand_a, operand_b, result) VALUES
('add', 10, 5, 15),
('subtract', 10, 3, 7),
('multiply', 4, 6, 24),
('divide', 20, 4, 5);