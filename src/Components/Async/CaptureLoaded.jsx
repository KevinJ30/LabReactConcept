import {useEffect} from 'react';
import React, { AsyncCallLoaded } from './AsyncCallLoaded';

export function CaptureLoaded() {

    console.log(1111)

    return (<AsyncCallLoaded>
        <CaptureLoaded />
    </AsyncCallLoaded>);
}