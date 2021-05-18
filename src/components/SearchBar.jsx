import { useState } from 'react';
import { Navbar, Container, Form, FormControl, Button } from 'react-bootstrap';
const SearchBar = () => {
  const [fields, setFields] = useState({ postion: '', area: '' });
  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    setFields({ ...fields, [field]: value });
  };
  return (
    <Navbar bg='dark' variant='dark'>
      <Container className='justify-content-end'>
        <Form className='d-flex'>
          <FormControl
            onChange={handleChange}
            value={fields.position}
            type='text'
            placeholder='Insert Position'
            className='mr-2'
            name='position'
          />
          <FormControl
            onChange={handleChange}
            value={fields.area}
            type='text'
            placeholder='Insert Area'
            className='mx-2'
            name='area'
          />
          <Button variant='outline-info' className='ml-2'>
            Search
          </Button>
        </Form>
      </Container>
    </Navbar>
  );
};

export default SearchBar;
