import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fryndmhnvssapmrnjqid.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZyeW5kbWhudnNzYXBtcm5qcWlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQxNzkxMzEsImV4cCI6MjA0OTc1NTEzMX0.9YAamsZ_Prhr1Fxe9wbEqB3pYm4VW6zVrI5L9deYRCs';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
