import {useState} from 'react';

const Carousel = ({user}) => {
    const images = user.images
    const [index, setIndex] = useState(0)
    function back(){
        if (index >= 1) setIndex(index-1) 
        if (index < 1) setIndex(images.length-1)
    }
    function forward(){
        if (index < images.length-1) setIndex(index+1)
        if (index===images.length-1) setIndex(0)
    }
    return (
        <div className='Carousel' style={{backgroundImage:`url(${images[index]})`}}>
            <div onClick={back}>⬅️</div>
            <div onClick={forward}>➡️</div>
        </div>
    );
};

export default Carousel;