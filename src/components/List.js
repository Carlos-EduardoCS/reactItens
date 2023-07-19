import Item from "./Item";

function List() {
    return(
        <div>
            <h1> Minha lista </h1>
            <ul>
                <Item marca="Ferrari" />
                <Item marca="Fiat" />
                <Item marca="Renault" />
            </ul>   
        </div>
    )
}

export default List;