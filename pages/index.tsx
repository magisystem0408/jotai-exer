import type {NextPage} from 'next'
import {useAtom, Provider} from "jotai";
import {countAtom, doubleCountAtom} from '../atoms';
import Count from "./Count";


const Home: NextPage = () => {
    const [count, increment] = useAtom(countAtom)
    const [doubleCount] = useAtom(doubleCountAtom)

    return (
        //それぞれで状態をもつ
        <>
            <Provider>
                <div>{count}</div>
                <div>dubbleCount：{doubleCount}</div>
                <Count/>
            </Provider>

            <Provider>
                <div>{count}</div>
                <div>dubbleCount：{doubleCount}</div>
                <Count/>
            </Provider>
        </>
    )
}

export default Home
