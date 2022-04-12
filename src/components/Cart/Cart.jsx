import "./styles.css"

export default function Cart({currentSale}){

    const reduce = currentSale.reduce((acu, item) =>(acu + item.price), 0)

    return(
        <>
        <header className="header_carrinho">
            <h1 className="h1_titulo_carrinho">Carrinho de compras</h1>
        </header>
            <div className="div_carrinho">
                <div className="div_info_carrinho_vazio">
                    <h1 className="h1_info_carrinho">Sua sacola está vazia</h1>
                    <p className="p_info_carrinho">Adicione itens</p>
                </div>
                <div className="div_total">
                    <p className="p_total">Total:</p>
                    <span className="span_preco_total">{reduce.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                </div>
            </div>
        </>
    )
}