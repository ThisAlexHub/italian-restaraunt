import { render, screen } from "@testing-library/react";
import App from '../App'
import '@testing-library/jest-dom/extend-expect';

import {fetchAPI, submitAPI} from '../APIs/random';

import {updateTimes, initializeTimes} from '../App'

let availableTimes = fetchAPI(new Date(new Date().toLocaleDateString()));

test('updateTimes function is working properly', () => {


})