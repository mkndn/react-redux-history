import {useCallback, useState} from "react";

export const useMemento = <T>(initialState: T) => {
    const [state, setState] = useState<T>(initialState)
    const [history, setHistory] = useState<T[]>([initialState])
    const [index, setIndex] = useState<number>(0)

    const saveState = useCallback((newState: T) => {
        setHistory([...history, newState])
        setIndex(index + 1)
        setState(newState)
    }, [history, index])

    const undo = useCallback(() => {
        if (index > 0) {
            const newIndex = index - 1
            setIndex(newIndex)
            setState(history[newIndex])
        }
    }, [history, index])

    const redo = useCallback(() => {
        if (index < history.length - 1) {
            const newIndex = index + 1
            setIndex(newIndex)
            setState(history[newIndex])
        }
    }, [history, index])

    return [state, saveState, { undo, redo }] as const
}