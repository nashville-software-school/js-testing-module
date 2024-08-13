import {render, screen} from '@testing-library/react';
import App from "./App";

it("should say hello world", ()=> {
    render(<App/>);
    const message = screen.queryByText("Hello World");
    expect(message).not.toBeNull(); 
});