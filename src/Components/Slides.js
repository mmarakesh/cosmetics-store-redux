import {useState} from 'react';
import { dataSlides } from "../data/dataSlides";

function Slides() {
    const [photo, setPhoto] = useState(0);
    const {image} = dataSlides[photo];
    console.log(dataSlides[photo])

    const previousPhoto = () => {
        setPhoto ( photo => {
            photo --;
            if (photo < 0) {
                photo = dataSlides.length -1;
            }
            return photo;
        }
        )
    }

    const nextPhoto = () => {
        setPhoto (photo => {
            photo ++;
            if (photo > dataSlides.length - 1) {
                photo = 0;
            }
            return photo;
        })
    }

    return(
        <div className='daySale'>
            <div className='textSale'>
            <h2>{('Shop More Skincare Deals')}</h2>
            <p>{(`Don't miss out on these one-day sales`)}. 
            {(' Get up to 50% off top Skincare')}. <br/> 
            {(' New deals through 3/17')}.
            {(' No code needed')}.</p>
            </div>

        <div className='boxSlides'>
            <div>
                <button className='slideBtn' onClick={previousPhoto}>◁</button>
            </div>

            <div>
            <img className='slidesSale' src={image} width='700px' height='200px' alt='slides'/>
            </div>

           <div>
            <button className='slideBtn' onClick={nextPhoto}>▷</button>
            </div> 
        </div>
        </div>
    )
}
export default Slides ;