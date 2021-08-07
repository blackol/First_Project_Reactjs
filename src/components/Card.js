import React from 'react';

const Card = (props) => {
    const { country } = props;

    const numbersFormat = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");//regex qui demande de faire un espace si le nombre est de 3 chiffres
    }
   
    return (
        <div>
            <li className="card">
                <img src={country.flag} alt={country.name} />
                <div className="data-container">
                    <ul>
                        <li>Nom :{country.name}</li>
                        <li>Capital :{country.capital}</li>
                        <li> Pop :{numbersFormat(country.population)}</li>
                    </ul>
                </div>
            </li>
        </div>
    );
};

export default Card;