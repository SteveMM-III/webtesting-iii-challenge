import React from 'react';
import { render } from '@testing-library/react';
import Display from './Display';

test( 'Display renders correctly', () => {
    expect( render( <Display /> ) ).toMatchSnapshot();
} );


test( 'displays green led class', () => {
    const { getByText } = render(
        <Display locked={ false } closed={ false } />
    );

    const unlocked = getByText( /unlocked/i );
    expect( unlocked.className ).toMatch( "green-led" );

    const open = getByText( /open/i );
    expect( open.className ).toMatch( "green-led" );
} );

test( 'displays red led class', () => {
    const { getByText } = render(
        <Display locked={ true } closed={ true } />
    );

    const locked = getByText( /locked/i );
    expect( locked.className ).toMatch( "red-led" );

    const closed = getByText( /closed/i );
    expect( closed.className ).toMatch( "red-led" );
} );

test( 'displays unlocked and closed text', () => {
    const { findByText } = render(
        <Display locked={ false } open={ false } />
    );

    const unlockedMessage = findByText( /unlocked/i );
    expect( unlockedMessage ).toBeTruthy();

    const closedMessage = findByText( /closed/i );
    expect( closedMessage ).toBeTruthy();
} );

test( 'displays unlocked and open text', () => {
    const { findByText } = render(
        <Display locked={ false } open={ true } />
    );

    const unlockedMessage = findByText( /unlocked/i );
    expect( unlockedMessage ).toBeTruthy();

    const openMessage = findByText( /open/i );
    expect( openMessage ).toBeTruthy();
} );

test( 'displays locked and closed text', () => {
    const { findByText } = render(
        <Display locked={ true } open={ false } />
    );

    const lockedMessage = findByText( /locked/i );
    expect( lockedMessage ).toBeTruthy();

    const closedMessage = findByText( /closed/i );
    expect( closedMessage ).toBeTruthy();
} );
