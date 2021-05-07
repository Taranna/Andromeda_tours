import React from 'react';
import CardItem from "./CardItem";
import "./Cards.css"

function Cards() {
    return (
        <div className="cards">
            <h1>Check </h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                    <CardItem 
                    src="images/img-9.jpg"
                    text="Travel to Papua New Guinea A
                     country of immense cultural and biological diversity, 
                     it’s known for its beaches and coral reefs."
                     label="Destination"
                     path="/services"

                    />

                    <CardItem 
                    src="images/img-8.jpg"
                    text="The entire state is settled on the golden sands of the Thar Desert which is also known as
                     the Great Indian Desert "
                     label="Destination"
                     path="/services"

                    />
                   
                    </ul>
                    <ul  className="cards__items" >
                    <CardItem 
                    src="images/img-6.jpg"
                    text="Abbey Road is a thoroughfare in  the
                     City of Westminster in London running roughly northwest to southeast through St. John's Wood "
                     label="Destination"
                     path="/services"

                    />
                     <CardItem 
                    src="images/img-4.jpg"
                    text="The Henningsvær Idrettslag Stadion can hardly be called a stadium, it has got no stands
                    ,surrounded by stunning views consisting of dramatic mountains,open sea and sheltered bays "
                     label="Destination"
                     path="/services"

                    />
                      <CardItem 
                    src="images/img-3.jpg"
                    text=" The dark sea water and white sands are enticing more and more tourists to come and hang out on the beach "
                     label="Destination"
                     path="/services"

                    />
                   


                    </ul>

                </div>
                </div>  
            
        </div>
    )
}

export default Cards
