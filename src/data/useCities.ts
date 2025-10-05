import { CityFilters, supabaseService } from "../supabase/supabaseServices";
import { useFetchData } from "./useFetchData";

export function useCities(filters: CityFilters) {
  return useFetchData(
    () => supabaseService.findAll(filters),
  [filters.name, filters.categoryId]
  );
}
