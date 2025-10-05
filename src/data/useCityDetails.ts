import { useEffect, useState } from "react";

import { City } from "../types";
import { supabaseService } from "../supabase/supabaseServices";
import { useFetchData } from "./useFetchData";

export function useCityDetails(id: string) {
  return useFetchData(() => supabaseService.findById(id));
}