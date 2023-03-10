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
            <option value="EUR" id={'1'}>πͺπΊ&emsp;EUR</option>
            <option value="GBP">π¬π§&emsp;GBP</option>
            <option value="USD">πΊπΈ&emsp;USD</option>
            <option value="UAH">πΊπ¦&emsp;UAH</option>
        </Form.Select>
    );
}

export default Select;