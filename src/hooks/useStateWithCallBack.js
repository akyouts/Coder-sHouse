import { useState, useRef, useEffect, useCallback } from 'react';
export const useStateWithCallBack = (intialState) => {
    const [state, setState] = useState(intialState);
    const cbRef = useRef(null);

    const updateState = useCallback((newState, cb) => {
        cbRef.current = cb;
        console.log("Setting state")
        setState((prev) =>
            typeof newState === 'function' ? newState(prev) : newState
        );
    }, []);

    useEffect(() => {
        if (cbRef.current) {
            cbRef.current(state);
            cbRef.current = null;
        }
    }, [state]);

    return [state, updateState];
};