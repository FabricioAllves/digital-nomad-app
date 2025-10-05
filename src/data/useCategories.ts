import { supabaseService } from "../supabase/supabaseServices";
import { useFetchData } from "./useFetchData";

export function useCategories() {
  return useFetchData(() => supabaseService.listCategory());
}
