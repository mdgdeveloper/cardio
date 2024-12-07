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