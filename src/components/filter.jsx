import "./filter.css"
import { useFetch } from "../api/useFetch"
import { useId } from "react"
import { useFilter } from "../hooks/useFilter";

/* uso un select para para filtrar*/
export function Filter() {
    
    /* utilizo el contexto para actualizar la categoría seleccionada. */
    const {setFilter} = useFilter()

    const { data  } = useFetch("http://fakestoreapi.com/products/categories")
    
    const categoryFilterId = useId()

    const changeCategory = (event) => {
        setFilter(firstState => ({
            ...firstState,
            category: event.target.value
        }))
    }

    return(
        <section className="filter">
            <div>
                <label htmlFor={categoryFilterId}>Categories</label>
                <select id={categoryFilterId} onChange={changeCategory}>
                    <option value="all">All categories</option>

                    {data?.map((category, id) => (
                        <option value={category} key={id}>{category}</option>
                    ))}

                </select>
            </div>
        </section>
    )
}