import {render, screen,fireEvent} from '@testing-library/react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Login from './../Component/Login';

test('renders react component', () => {
    render(
        <BrowserRouter>
            <Routes>   
                <Route path="/" element= {<Login />}/>
            </Routes>
        </BrowserRouter>);
});


test('OnClick submitButton', () => {
    render(
        <BrowserRouter>
            <Routes>   
                <Route path="/" element= {<Login dataCheck={true} />}/>
            </Routes>
        </BrowserRouter>);
    const button = screen.getByTestId("submit-form");
    fireEvent.click(button);
  });
