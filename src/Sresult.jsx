import React from 'react';


export const Sresult = (props) => {

    console.log(props.ima);

    const img = `https://source.unsplash.com/600x400/?${props.ima}`;
    return (
        <div>
            <img src={img} alt="gogle" />
        </div>
    )
}
export default Sresult;