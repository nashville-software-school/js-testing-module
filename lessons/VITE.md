# Testing React with Vite

If you have any trouble with this process, you can refer to the **<code>vite_example</code>** folder in the **<code>completed</code>** folder of this repository.

### Create a Sample Vite React App

If you want to try this out with a simple example, start by creating a fresh React app in Vite. Type **<code>npm create vite@latest</code>** in the terminal, then enter a project name, then select React and JavaScript. 

Then, just **<code>cd</code>** into the new folder and type **<code>npm i</code>** to create the node_modules folder with all the dependencies.

### Set Up Testing

To set up testing for this boilerplate example or an existing project, first type **<code>npm i -D vitest jsdom @testing-library/react @testing-library/jest-dom</code>** in the terminal (from within the project root folder) to install the necessary dependencies.

Then, in package.json, add **<code>"test": "vitest"</code>** on a new line in the scripts array.

Next, edit the vite.config to include these references and a test config:

```
/// <reference types="vitest"/>
/// <reference types="vite/client"/>
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        environment: 'jsdom'
    }
})
```

### Add Your First Test

in src, add a test file:

```
import {render, screen} from '@testing-library/react';
import App from "./App";

it("should say hello world", ()=> {
    render(<App/>);
    const message = screen.queryByText("Hello World");
    expect(message).not.toBeNull(); 
});
```

This looks a lot like the Jest code we wrote before. What's new here is that we're using React Testing Library's **<code>render</code>** method to set up the component we're testing, and then **<code>screen</code>** object to inspect what would be present in the document. 

React Testing Library provides a lot of options. This lesson is just a basic introduction; you can learn more about using this package in its very organized documentation: https://testing-library.com/docs/react-testing-library/intro/. But even without delving into advanced features, you can use the basic steps outlined here to start getting used to implementing testing in your React projects and for your capstone, if you want.

