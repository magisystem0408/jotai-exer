import {atom} from "jotai";

export const countAtom = atom(0)
//countAtomを呼び出せる
export const doubleCountAtom = atom((get) => get(countAtom) * 2)

export const isCountEven = atom((get) => (get(countAtom) % 2 === 0))

export const incrementCountAtom = atom((get) => get(countAtom),
    (get, set, _arg) => set(countAtom, get(countAtom) + 1))
