import Form from 'react-bootstrap/Form';
import './select.css'


function Select({Value, NewValue}) {

    function setValue(event) {
        NewValue(event, [])
    }


    return (
        <Form.Select aria-label="Default select example" className={'select'}
                     value={Value}
                     onChange={(event) => {
                         setValue(event.target.value)
                     }}>
            <option value="EUR" id={'1'}>🇪🇺&emsp;EUR</option>
            <option value="GBP">🇬🇧&emsp;GBP</option>
            <option value="USD">🇺🇸&emsp;USD</option>
            <option value="UAH">🇺🇦&emsp;UAH</option>
        </Form.Select>
    );
}

export default Select;