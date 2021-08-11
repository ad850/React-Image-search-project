import React from 'react'
import { useState } from 'react'
import Sresult from './Sresult'

export const Search = () => {

    const [state, setstate] = useState("")

    let data;

    const val = (event) => {

        data = (event.target.value);


        setstate(data);

    }








    return (<>
        <div id="se">


            <input type="text" placeholder="Enter for search" onChange={val} value={state} /><br />



            <div id="contain">

                {(!state) ? null : <Sresult ima={state} />}



            </div>

        </div>

    </>)
}

export default Search;