import { createClient } from '@supabase/supabase-js';

const URL = "https://kafazejaobhjkesyyvra.supabase.co";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImthZmF6ZWphb2Joamtlc3l5dnJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQxODkwMDMsImV4cCI6MjAzOTc2NTAwM30.W-JKsHi5hT4mIGZ1WVt7lslTD_GUmLymH2iZLXN2pVQ";

export const supabase = createClient(URL, API_KEY);
