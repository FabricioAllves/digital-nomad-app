import { ScrollView } from "react-native"
import { Box } from "../components/Box"
import { CategoryPill } from "../components/CategoryPill"
import { SearchInput } from "../components/SearchInput"
import { Category } from "../types"

type CityFilterProps = {
  categories: Category[]
  cityName: string
  onChangeCityName: (cityName: string) => void
  selectedCategoryId: string | null
  onChangeCategoryId: (categoryId: string | null) => void
}

export function CityFilter({
  categories,
  cityName,
  onChangeCityName,
  selectedCategoryId,
  onChangeCategoryId,
}: CityFilterProps) {
  return (
    <Box>
      <Box paddingHorizontal="padding">
        <SearchInput
          placeholder="Qual o seu destino?"
          value={cityName}
          onChangeText={onChangeCityName}
        />
      </Box>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Box mt="s16" flexDirection="row" gap="s8" paddingHorizontal="padding">
          {categories.map((category) => (
            <CategoryPill
              key={category.id}
              category={category}
              active={selectedCategoryId === category.id}
              onPress={() =>
                onChangeCategoryId(
                  category.id === selectedCategoryId ? null : category.id
                )
              }
            />
          ))}
        </Box>
      </ScrollView>
    </Box>
  )
}
