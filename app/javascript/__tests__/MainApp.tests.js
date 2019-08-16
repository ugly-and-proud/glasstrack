import React from 'react';
import ReactDOM from 'react-dom';
import MainApp from '../components/MainApp';
import Home from '../components/Home';
import BarPos from '../components/BarPos';
import InventoryTable from '../components/InventoryTable';
import AboutPage from '../components/AboutPage';


const mockSuccessResponse = {};
const mockJsonPromise = Promise.resolve(mockSuccessResponse)
const mockFetchPromise = Promise.resolve({ // 3
    json: () => mockJsonPromise,
});

global.fetch = () => mockFetchPromise

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MainApp />, div);
});

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Home />, div);
});

it('renders without crashing', () => {
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise)
    const div = document.createElement('div');
    ReactDOM.render(<BarPos />, div);
});

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<InventoryTable />, div);
});

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AboutPage />, div);
});
