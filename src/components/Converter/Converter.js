import React, {useEffect, useState} from 'react';
import './converter.scss'
import Select from "../UI/Select/Select";
import MultipleAddonsExample from "../UI/MultipleAddonsExample/MultipleAddonsExample";
import arrows from '../imgs/21300.png'

const Numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']


function Converter({getCurrency}) {
    const [to, setTo] = useState('UAH')
    const [from, setFrom] = useState('USD')
    const [cashTo, setCashTo] = useState('')
    const [cashFrom, setCashFrom] = useState('')
    const [revers, setRevers] = useState(false)

    useEffect(() => {
        getCurrency(to, from, cashFrom, setCashTo)
    }, [to, from])


    function ConvertCash(event, get, set, set_two, to, from) {
        let number = get
        if (event === null) {
            set(get.slice(0, get.length - 1))
            number = number.slice(0, number.length - 1)

        } else if (Numbers.includes(event)) {
            set((perv) => perv + String(event))
            number = get + String(event)
        }
        getCurrency(to, from, number, set_two)

    }

    function Revers() {
        setTo(from)
        setFrom(to)
        setRevers(!revers)
    }

    return (<div className={'converter'}>
        <div>
            <Select
                Value={from}
                NewValue={(event) => setFrom(event)}/>
            <MultipleAddonsExample
                Cash={cashFrom}
                NewCash={(event) => {
                    ConvertCash(event, cashFrom, setCashFrom, setCashTo, to, from)
                }}
            />
        </div>
        <div className={`arrows ${(revers) ? 'revers' : null}`}><img src={arrows} alt={'arrows'} onClick={Revers}/>
        </div>
        <div>
            <Select
                Value={to}
                NewValue={(event) => setTo(event)}/>
            <MultipleAddonsExample
                Cash={cashTo}
                NewCash={(event) => {
                    ConvertCash(event, cashTo, setCashTo, setCashFrom, from, to)
                }}
            />
        </div>
    </div>);
}

export default Converter;