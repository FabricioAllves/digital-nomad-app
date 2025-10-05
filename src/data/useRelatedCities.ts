import { supabaseService } from "../supabase/supabaseServices"
import { useFetchData } from "./useFetchData"

export function useRelatedCities(cityId: string){
  return useFetchData(() => supabaseService.getRelatedCities(cityId))
}
