import { ICategoryRepo } from "@/src/domain/category/ICategoryRepo";
import { Category, CategoryCode } from "../../../../domain/category/Category";
import { supabase } from "./subabase";

async function findAll(): Promise<Category[]> {
  const { data, error } = await supabase.from("categories").select("*");
  if (error) {
    throw new Error("error trying to list categories");
  }

  return data.map((row) => ({
    id: row.id,
    description: row.description,
    name: row.code,
    code: row.code as CategoryCode,
  }));
}

export const SupabaseCategoryRepo: ICategoryRepo = {
  findAll,
};
