import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://ilwcmsuvszhboybnkedd.supabase.co";
const SUPABASE_API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlsd2Ntc3V2c3poYm95Ym5rZWRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIzOTgzNDcsImV4cCI6MjA3Nzk3NDM0N30.2pbDxtjdx5xQp0j308fSRKtQJ8_PoFktAQr406Yp5Lg";

export const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY);
