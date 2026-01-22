import { Form, InputGroup, Button } from "react-bootstrap";
import 'boostrap/dist/css/boostrap.min.css';
import 'boostrap-icons/font/boostrap-icons.css'

const SearchBar = () => {
    <form className="d-flex flex-grow mx-3">
        <InputGroup>
            <Form.Control type='search' placeholder="Search Product"/>
            <Button variant='outline-primary' >
                <i className="bi bi-search"></i>
            </Button>
        </InputGroup>
    </form>
};

export default SearchBar;