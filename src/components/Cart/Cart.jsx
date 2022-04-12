import "./styles.css"

export default function Cart({currentSale, removeItems}){

    const reduce = currentSale.reduce((acu, item) =>(acu + item.price), 0)

    return(
        <>
        <header className="header_carrinho">
            <h1 className="h1_titulo_carrinho">Carrinho de compras</h1>
        </header>
            <div className="div_carrinho">
                {
                currentSale.length === 0 ?

                    <div className="div_info_carrinho_vazio">
                        <h1 className="h1_info_carrinho">Sua sacola está vazia</h1>
                        <p className="p_info_carrinho">Adicione itens</p>
                    </div>
                        :
                        <div className="div_container_carrinho">
                        <ul className="ul_produto_carrinho">
                            {currentSale.map(item =>(<li className="li_produto_carrinho" key={item.id}>
                                <img className="img_produto_carrinho" src={item.img} alt={item.name}/>
                                <div className="div_info_produto_carrinho">
                                    <h1 className="h1_nome_produto_carrinho">{item.name}</h1>
                                    <p className="p_categoria_produto_carrinho">{item.category}</p>
                                </div>
                                <button className="btn_add_produto_carrinho" onClick={() => removeItems(item.id)}>Remover</button>
                            </li>))}          
                        </ul>
                    </div> 
                }
                <div className="div_total">
                    <p className="p_total">Total:</p>
                    <span className="span_preco_total">{reduce.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                </div>
            </div>
        </>
    )
}