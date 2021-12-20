import React from 'react';
import Navigation from "../components/navigation";
import Countries from "../components/countries";

const home = () => {
    return (
        <div>
            <Navigation />
            <Countries />
            <h1>Accueil</h1>
        </div>
    )
}
export default home;