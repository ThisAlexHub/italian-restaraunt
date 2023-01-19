import { render, screen } from "@testing-library/react";
import BookingForm from '../components/BookingForm';
import '@testing-library/jest-dom/extend-expect';

import {fetchAPI, submitAPI} from '../APIs/random';

let availableTimes = fetchAPI(new Date(new Date().toLocaleDateString()));

test('Renders the BookingForm labels properly', () => {
    render(<BookingForm availableTimes={availableTimes}/>);

    const dateLabel = screen.getByText("Choose date");
    expect(dateLabel).toBeInTheDocument();

    const timeLabel = screen.getByText("Choose time");
    expect(timeLabel).toBeInTheDocument();

    const guestsLabel = screen.getByText("Occasion");
    expect(guestsLabel).toBeInTheDocument();

    const occasionLabel = screen.getByText("Choose date");
    expect(occasionLabel).toBeInTheDocument();

})


