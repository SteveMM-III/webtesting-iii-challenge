import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from './Dashboard';

test( 'Dashboard renders correctly', () => {
    expect( render( <Dashboard /> ) ).toMatchSnapshot();
} );

test( 'is displaying controls component', () => {
    const { queryByTestId } = render( <Dashboard /> );

    const element = queryByTestId( 'controlsTest' );
    expect( element ).toBeTruthy();
} );

test( 'is displaying display component', () => {
    const { queryByTestId } = render( <Dashboard /> );

    const element = queryByTestId( 'displayTest' );
    expect( element ).toBeTruthy();
} );
