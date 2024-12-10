CREATE TABLE measures (
  id SERIAL PRIMARY KEY,
  date DATE,
  time TIME,
  dia1 NUMERIC,
  sys1 NUMERIC,
  pulse1 NUMERIC,
  dia2 NUMERIC,
  sys2 NUMERIC,
  pulse2 NUMERIC,
  dia3 NUMERIC,
  sys3 NUMERIC,
  pulse3 NUMERIC,
  arm VARCHAR(255)
);


-- Insert data into the measures table  
INSERT INTO measures (date, time, dia1, sys1, pulse1, dia2, sys2, pulse2, dia3, sys3, pulse3, arm) VALUES  
('2024-12-06', '09:00:00', 108, 82, 85, 108, 80, 81, 107, 79, 84, 'right'),  
('2024-12-06', '17:00:00', 98, 72, 76, 99, 72, 75, 100, 73, 83, 'left'),  
('2024-12-07', '09:00:00', 119, 90, 78, 114, 89, 79, 110, 84, 71, 'right'),  
('2024-12-07', '17:00:00', 120, 90, 70, 120, 86, 64, 120, 86, 66, 'left'),  
('2024-12-08', '09:00:00', 110, 82, 76, 110, 81, 81, 106, 79, 78, 'right'),  
('2024-12-08', '17:00:00', 117, 81, 79, 114, 82, 82, 116, 82, 84, 'left'),  
('2024-12-09', '09:00:00', 117, 83, 93, 106, 79, 85, 104, 77, 83, 'right');  