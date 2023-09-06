import { Filter } from "./filter";
import "./header.css";

export function Header(){
    return(
        <header>
            <h1>E-shop</h1>
            <Filter />
        </header>
    )
}