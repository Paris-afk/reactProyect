import React from 'react';

const BlablacarRetour = props =>{
    console.log(`ESTE ES EL REGRESO `)
   /*  console.log(props) */

            if(props.datosRetour !== undefined){
              /*   console.log(props.datosRetour.trips[1].arrival_place.city_name)
                console.log(props.datosRetour.trips[1].arrival_place.address)
                console.log('----------------------')
                console.log(props.datosRetour.trips[1].departure_place.city_name)
                console.log(props.datosRetour.trips[1].departure_place.address) */
                return (
                    <ul className="list-unstyled">
                       {props.datosRetour.trips.map((Viajes , i )=>{
                           
                           return(
                               
                               <li key={i}
                               > 
                                    <h1>Retour</h1>
                                  <div className="alert alert-info">
                                    <h3>ARRIVE À</h3>
                                    <h4>{Viajes.arrival_place.city_name}</h4>
                                    <p>{Viajes.arrival_place.address}</p>
                                    <h4>{`Prix : ${Viajes.price_with_commission.string_value}`}</h4>
                                    <h4>{`places disponibles ${Viajes.seats_left}`}</h4>
                                    <p>{`Duration : ${Math.round(Viajes.duration.value /60 /60 * 100) /100} h `}</p>
                                    </div>
                                    <div className="alert alert-dark">
                                    <h3>PARTIE DE </h3>
                                    <h4>{Viajes.departure_place.city_name}</h4> 
                                    <p>{Viajes.departure_place.address}</p>
                                    <h5>Heure de la partie</h5>
                                    <h4>{`${Viajes.departure_date}`}</h4>
                                    
                                    </div>
                                    <hr/>
                               </li>
                           )
                       })}
            
            
                    </ul>
                )
            }else{

                return(
                    <div>
                        <h1>Vous n'avez pas chois un retour</h1>
                    </div>
                )
            }
            
        
   
}



export default BlablacarRetour;