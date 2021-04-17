import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://bfufbgvjvdlyoabzoycp.supabase.co";
const SUPABASE_SECRET_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxODUzNzU3NSwiZXhwIjoxOTM0MTEzNTc1fQ.osjHpVmTaL8xfQRq9rDD9FB7g7a5zKXOfvGum4j_-rY";

export const supabase = createClient(
  SUPABASE_URL || "",
  SUPABASE_SECRET_KEY || ""
);

// export const supabase = createClient(
//   process.env.SUPABASE_URL || "",
//   process.env.SUPBASE_SECRET_KEY || ""
// );
