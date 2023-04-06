import { createContext, ReactNode, useState, useContext } from 'react'
import courses from '../courses.json'


interface FilterProviderProps {
  children: ReactNode
}

interface Course {
  id: number,
  name: string,
  description: string,
  image: string,
  type: string[],
  price: number,
  isLive: boolean,
  popularity: number
}

interface CourseFiltersContext {
  filterByPrice: (priceArr: number[]) => void
  filterByPopularity: (popularityStars: number) => void
  filterByCategory: (category: string) => void
  price: Course[]
}

export const newFilterContext = createContext({} as CourseFiltersContext);

export function useFilters() {
  return useContext(newFilterContext)
}

function FilterContext({children}: FilterProviderProps) {
  const [price, setPrice] = useState<Course[]>(courses);

  const filterByPrice = (priceArr: number[] = [4000,18000]) => {
    let minPrice = priceArr[0];
    let maxPrice = priceArr[1];

    return setPrice(courses.filter(course => course.price >= minPrice && course.price <= maxPrice));
  }

  const filterByPopularity = (popularityStars: number = 5.0) => {
    return setPrice(courses.filter(course => course.popularity <= popularityStars));
  }

  const filterByCategory = (category: string = 'all') => {
    return setPrice(courses.filter(course => course.type.includes(category)));
  }

  return (
    <newFilterContext.Provider value={{filterByPrice, filterByPopularity, filterByCategory, price}}>
      {children}
    </newFilterContext.Provider>
  )
}

export default FilterContext