CREATE TABLE measures (
  id SERIAL PRIMARY KEY,
  measure_id UUID DEFAULT gen_random_uuid(),
  measure_num NUMERIC,
  date DATE,
  time TIME,
  dias NUMERIC,
  sys NUMERIC,
  pulse NUMERIC,
  arm VARCHAR(255)
);