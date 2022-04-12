import "./styles.css"

export default function Product({handleClick, filteredProducts}){

    return(

        <ul className="ul_produto">
            {filteredProducts.map(item =>(<li className="li_produto" key={item.id}>
                <img className="img_produto" src={item.img} alt={item.name}/>
                <h1 className="h1_nome_produto">{item.name}</h1>
                <p className="p_categoria_produto">{item.category}</p>
                <span className="span_preco_produto">{item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                <button className="btn_add_produto" onClick={() => handleClick(item.id)}>Adicionar</button>
            </li>))}
            
        </ul>

    )

}