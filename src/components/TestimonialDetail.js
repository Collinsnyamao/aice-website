import React from 'react';
import '../assets/css/testimonials.css'

const TestiMonialsDetails = ({testiMonialDetail}) => {
    const {name, description, img} = testiMonialDetail;
    console.log("testiMonialDetail"+testiMonialDetail)
    return (
        <div class="item px-2 mx-auto mt-4">
            <div class="shadow-effect mx-4">
                <img class="rounded-full img-circle mx-auto" alt='img' src={img} />
                <p style={{ color:'#46C3C7',fontWeight:'bold'}}>{name}</p>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default TestiMonialsDetails;