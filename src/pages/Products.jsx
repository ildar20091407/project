
import React from 'react'

import ProductsVino from "../components/ProductsVino";
import ProductsBeer from "../components/ProductsBeer";
import ProductsVodka from "../components/ProductsVodka";

const Products = () => {

  
  return (
    <>
    
                 {

    <main className="main__botom">
                       <div className="main__top-title">
                         <p>Мои работы</p>
    <nav className="nav">
      <ul className="products__list nav__list">

                        <li><a href="#vino" class="products__nav-link nav__link">Вино</a></li>
                        <li><a href="#beer" class="products__nav-link nav__link">Водка</a></li>
                        <li><a href="#vodka" class="products__nav-link nav__link">Пво</a></li>
                    </ul>


    </nav>
    </div>                       
                                         </main>
                                        }     
    <ProductsVino />
    <ProductsBeer></ProductsBeer>
    <ProductsVodka></ProductsVodka>
    </>
  )
}

export default Products