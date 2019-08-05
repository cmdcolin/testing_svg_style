import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {render} from 'react-testing-library'
import 'jest-dom/extend-expect'


it('renders without crashing', () => {
    const div = document.createElement('div');
    const {getByTestId} = render(<App />)
    const x = getByTestId('myrect')
    expect(x).toHaveStyle('fill:green')
    expect(x).not.toHaveStyle('fill:red')
});
