import { PropTypes } from "prop-types"
import React, {useState} from "react";
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";


const GifExpertApp = () =>{

    const [categories, setCategories] = useState(['Lilo And Stitch'])

    /* const handleAdd = () =>{
        //setCategories([...categories, 'Breacking bad'])
        setCategories(cats => [...cats, 'Breacking bad'] )
    } */

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory setCategories={setCategories} />
            <hr />

            <ol>
                { categories.map(category  => 
                    <GifGrid
                        key={category} 
                        category={category} 
                    />
                )}
            </ol>
        </>
    )
}

export default GifExpertApp
