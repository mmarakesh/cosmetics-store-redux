import {useState} from 'react';
import { dataPromotion } from '../data/dataPromotion';

function Promotion() {

const [promotion, setPromotion] = useState(dataPromotion);
const [showText, setShowText] = useState(false);

const removePromotion = (id) => {
let newPromotion = promotion.filter(item => item.id !== id);
setPromotion(newPromotion);
  }

const showTextClick = (item) => {
  item.showMore = !item.showMore
  setShowText(!showText)
}
return(
  <div>
    {promotion.map(item => {
      const{id, productName, description, image, showMore} = item;

     return(
      <div>
      <div className='container'>
      <h2>{(productName)}</h2>
      </div>
 
      <div className='container'>
      <p>{(showMore ? description : description.substring(0,170) + ' ....')}
        <button className='btnShow' onClick={() => showTextClick(item)}>
        {(showMore ? 'show less' : 'show more')}
        </button>
        </p>
        </div>

      <div className='container'>
        <img className='imgPromotion' src={image} alt="promotion" width='500px'/>
      </div>

      <div className='container'>
        <button className='remove' onClick={() => removePromotion(id)}>{("not interested")}</button>
      </div>
     </div>
     )
    })}
    
    <div className='container'>
        <button className='remove' onClick={() => setPromotion([])}>delete all</button>
    </div>
    </div>
)
}

export default Promotion;