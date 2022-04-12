import "./styles.css"

export default function Cart({currentSale}){

    const reduce = currentSale.reduce((acu, item) =>(acu + item.price), 0)

    return(
        <>
        <header className="header_carrinho">
            <h1 className="h1_titulo_carrinho">Carrinho de compras</h1>
        </header>
            <div className="div_carrinho">
                <span>{reduce}</span>
            </div>
        </>
    )
}