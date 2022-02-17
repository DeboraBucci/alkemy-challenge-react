import React from "react";
import { Form, InputGroup } from "react-bootstrap";

const SearchDropdown = ({ onClick, dropdownOpt, label, text }) => {
  return (
    <InputGroup>
      <Form.Label visuallyHidden>{label}</Form.Label>
      <InputGroup.Text>{text}</InputGroup.Text>
      <Form.Select onChange={onClick} aria-label={`${label}`}>
        {dropdownOpt.map((opt) => (
          <option value={opt} key={`${opt} cuisine`}>
            {opt}
          </option>
        ))}
      </Form.Select>
    </InputGroup>
  );
};

export default SearchDropdown;
