import Product from "../Product/Product";
import "./styles.css"

export default function ProductsList({handleClick, currentSale, filteredProducts}){

  return(
      <div className='div_produtos'>
          <Product handleClick={handleClick} currentSale={currentSale} filteredProducts={filteredProducts}/>
      </div>
  )

}