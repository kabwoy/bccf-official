import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://gnkloatdlrumbeqrpzot.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdua2xvYXRkbHJ1bWJlcXJwem90Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE1NzQ4MjIsImV4cCI6MjAwNzE1MDgyMn0.QYDJoKju259N5u34YMkGRoVX5mNVgeUBrFCajPek8T8"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})