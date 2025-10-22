import { Repositories } from "@/src/domain/Repositories";
import { InMemoryAuthRepo } from "../InMemory/InMemoryAuthRepo";
import { SupabaseCategoryRepo } from "./SupabaseCategoryRepo";
import { SupabaseCityRepo } from "./SupabaseCityRepo";

export const SupabaseRepositories: Repositories = {
  auth: new InMemoryAuthRepo(),
  city: SupabaseCityRepo,
  category: SupabaseCategoryRepo,
}