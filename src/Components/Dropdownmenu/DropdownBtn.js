import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function DropdownBtn() {
    return (
      <DropdownButton id="dropdown-basic-button" title="Location" variant="light">
        <Dropdown.Item href="#/action-1">Chennai</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Mumbai</Dropdown.Item>
        <Dropdown.Item href="#/action-3">New Delhi</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Hydrabad</Dropdown.Item>

      </DropdownButton>
    );
  }
export default DropdownBtn;