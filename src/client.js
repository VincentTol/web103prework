import { createClient } from '@supabase/supabase-js';

const URL = "https://kafazejaobhjkesyyvra.supabase.co";
const API_KEY = "csdfsdfsdf";

export const supabase = createClient(URL, API_KEY);
