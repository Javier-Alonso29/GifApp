import React, {useState, useEffect} from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
//import { getGifs } from '../helpers/getGifs'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({category}) => {
 
    const {loading, data:imagenes} = useFetchGifs(category);

    /*const [images, setImages] = useState([])

    /**
     * SOLO se ejecuta cuando la informacion es modificada
     
    useEffect(() =>{
        getGifs(category).then(img => setImages(img))
    }, [category]) */


    return (
        <>
            <h3 className='animate__animated animate__fadeIn'>{category}</h3>

            {loading && <p>Loading ...</p>}
            
            <div className='cardGrid'>
                {
                    imagenes.map(img => (
                        
                        <GifGridItem 
                            key={img.id}
                            {...img}
                            />
                    ))
                }
            </div>
        </>
    )
}
