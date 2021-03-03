import React, {useState, useEffect} from 'react';

export function useCallAsync() {
    const [isLoaded, setLoaded] = useState(false);

    /**
     * Change l'état du composant au bout de deux seconde d'attente
     **/
    useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
       }, 2000);
    });

    return isLoaded;
}
 

export function AsynCallPage() {
    const isLoaded = useCallAsync();

    useEffect(() => {
        isLoadedCoponent(isLoaded)
    }, [isLoaded])

    function isLoadedCoponent(isLoaded) {
        if(isLoaded) {
            alert("L'api est chargé vous pouver travailler le composant....");
        }
    }

    return <div>
        kevin
    </div>;
}