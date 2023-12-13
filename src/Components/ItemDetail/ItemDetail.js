import React, {useState} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { useCartContext } from '../Context/CartContext';


const ItemDetail = ({item}) => {

  const[goToCart, setGoToCart] = useState(false);
  const {addProduct} = useCartContext()
  const onAdd = (quantity) =>{
   setGoToCart(true);
   addProduct(item, quantity);
  }

  return (
    <div className>
     <div className='col-md-4 offset-md-4'>
        <img src={item.imagen} className='img-fluid'alt={item.nombre}/>
        <h2>{item.nombre}</h2>
        <p>{item.descripcion}</p>
        <p> $ {item.precio}</p>
        <p> Cantidad: {item.stock}</p>
     </div>
     <div>
      {goToCart ? <Link to='/cart'>Terminar compra</Link> :<ItemCount stock={10} initial={0} onAdd={onAdd} />}
     </div>
     </div>
  )
}

export default ItemDetail