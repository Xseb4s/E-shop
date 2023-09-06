import { createContext, useState } from "react";

/* creo el contexto del filtro */
export const FilterContext = createContext()

/* permite acceder al estado del filtro, y se lo da a los componentes hijos. */
export function FilterProvider({children}) {

    const [filter, setFilter] = useState({
        category: 'all'
    })

    return (
        
        <FilterContext.Provider value={{
            filter,
            setFilter
        }}>

        {children}

        </FilterContext.Provider>
    )
}
