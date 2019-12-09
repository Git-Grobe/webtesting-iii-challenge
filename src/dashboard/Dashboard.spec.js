// Test away

import React from 'react';
import * as rtl from "@testing-library/react";

import Dashboard from './Dashboard';

test ('Dashboard renders correctly', () => {
    expect(rtl.render(<Dashboard/>)).toMatchSnapshot();
});
