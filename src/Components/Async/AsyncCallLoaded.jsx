import React, {useState, useEffect} from 'react';

export function AsyncCallLoaded() {
    const [isLoaded, setLoaded] = useState(false);

    /**
     * Change l'état du composant au bout de deux seconde d'attente
     **/
    useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
        }, 2000);
    }, [])

    return <div>
        <p>{ isLoaded ? 'Async Composant is loaded' : 'Composant is not loaded' }</p>
    </div>;
}

