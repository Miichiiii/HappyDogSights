// lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

// тимчасові значення, щоб Next.js стартував
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);