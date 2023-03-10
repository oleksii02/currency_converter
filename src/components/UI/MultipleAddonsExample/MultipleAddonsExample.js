import Form from 'react-bootstrap/Form';
import './MultipleAddonsExample.scss'
import {FormGroup} from "react-bootstrap";

function MultipleAddonsExample({Cash, NewCash}) {
    function addNumber(event) {
        NewCash(event.nativeEvent.data)
    }

    return (
        <div className={'input'}>
            <FormGroup>
                <Form.Control aria-label="Dollar amount (with dot and two decimal places)"
                              value={Cash}
                              onChange={(event) => addNumber(event)}
                />
            </FormGroup>
        </div>
    );
}

export default MultipleAddonsExample;