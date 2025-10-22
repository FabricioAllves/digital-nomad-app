import { useAppQuery } from "@/src/infra/operations/useAppQuery";
import { useRepository } from "@/src/infra/RepositoryProvider";

export function useCategoryFindAll() {
  const { category } = useRepository();

  return useAppQuery(
    () => category.findAll(),
  );
}
