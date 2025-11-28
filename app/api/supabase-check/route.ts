import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function GET() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  const result: Record<string, unknown> = {
    hasSupabaseUrl: !!url,
    hasSupabaseAnonKey: !!anon,
  };

  if (!url || !anon) {
    return NextResponse.json(result);
  }

  try {
    const supabase = createClient(url, anon);

    // Make a minimal, non-destructive request. We try to select zero/one row
    // from a likely public table. This only verifies that the client can reach
    // Supabase and that the key is accepted for reads. We do NOT return any
    // secrets or real data (only a numeric sample count).
    const { data, error } = await supabase.from('viewpoint_reviews').select('id').limit(1);

    if (error) {
      result.supabaseReachable = false;
      // provide only safe error text for debugging (no secrets)
      result.supabaseError = error.message;
    } else {
      result.supabaseReachable = true;
      result.sampleRows = Array.isArray(data) ? data.length : 0;
    }
  } catch (e) {
    result.supabaseReachable = false;
    result.exception = String(e instanceof Error ? e.message : e);
  }

  return NextResponse.json(result);
}
