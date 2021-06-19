// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

if (module.hot) {
    module.hot.accept();
}

// Create a react component
const App = () => {
    const buttonText = "Click me!";
    const labelName = "Enter name:";
    return (
        <div>
            <label className="label" htmlFor="name">{labelName}</label>
            <input id="name" type="text" />
            <button style={{ backgroundColor: 'blue', color: 'white' }}>
                {buttonText}
            </button>
        </div>
    );
};

// Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);