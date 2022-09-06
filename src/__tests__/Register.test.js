import {render, screen,fireEvent} from '@testing-library/react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Register from './../Component/Register';


const setup = () => {
    const utils =   render(<BrowserRouter>
        <Routes>   
            <Route path="/" element= {<Register />}/>
        </Routes>
    </BrowserRouter>
      )
    const username = utils.getByLabelText('username-input')
    const email = utils.getByLabelText('email-input')
    const password = utils.getByLabelText('password-input')
    const repassword = utils.getByLabelText('repassword-input')
    return {
        username,email,password,repassword,
      ...utils,
    }
  }

test('renders react component', () => {
  render(<BrowserRouter>
    <Routes>   
        <Route path="/" element= {<Register />}/>
    </Routes>
</BrowserRouter>

  )  
});


test('OnClick registerButton', () => {
    render(
        <BrowserRouter>
            <Routes>   
                <Route path="/" element= {<Register/>}/>
            </Routes>
        </BrowserRouter>);
    const button = screen.getByTestId("submit-form");
    fireEvent.click(button);
  });

  test('Input Name Change', () => {
    const {username,email,password,repassword} = setup()
    fireEvent.change(username, {target: {value: 'Govind'}})
    fireEvent.change(email, {target: {value: 'govind123@gmail.com'}})
    fireEvent.change(password, {target: {value: '123'}})
    fireEvent.change(repassword, {target: {value: '123'}})
  })  