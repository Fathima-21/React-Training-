import React from 'react'
import Product_data from '../data/Product_data'

const MainContent = () =>{
    console.log(Product_data);
    const listItems =Product_data.map((item)=>
    <div className="card" key={item.id}>
        <div className="card_img">
            <img src={item.image} alt=""/>
             </div>
             <div className="card_header">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <p>{item.type}</p>
                <p className="price">Price : {item.price}</p>
                <p>Rating :{item.rating}</p>
                <button className='btn'>Add to Cart</button>
                <button className='likebtn'>Like</button>
                <button className='sharebtn'>Share</button>
                <button className='purchasebtn'>Purchase</button>
             </div>
    </div>
    );
    return(
        <div className="main_content">
            <h3>Your Products</h3>
            {listItems}
        </div>
    )
}
export default MainContent;
