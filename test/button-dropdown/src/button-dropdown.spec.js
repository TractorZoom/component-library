import { render, screen } from '@testing-library/react';
import ButtonDropdown from '../../../packages/button-dropdown/src';
import React from 'react';

describe('button dropdown', () => {
    it('should render empty', () => {
        // given
        const props = {
            onChange: jest.fn(),
            options: [],
            selectedOption: '',
        };

        // when
        render(<ButtonDropdown {...props} />);

        // then
        expect(screen).toMatchSnapshot();
    });

    it('should render with label and options', () => {
        // given
        const options = chance.n(chance.word, chance.d6());
        const props = {
            label: chance.word(),
            onChange: jest.fn(),
            options,
            selectedOption: options[0],
        };

        // when
        render(<ButtonDropdown {...props} />);

        // then
        expect(screen).toMatchSnapshot();
    });

    it('should render with disabled', () => {
        // given
        const options = chance.n(chance.word, chance.d6());
        const props = {
            disabled: chance.bool(),
            label: chance.word(),
            onChange: jest.fn(),
            options,
            selectedOption: options[0],
        };

        // when
        render(<ButtonDropdown {...props} />);

        // then
        expect(screen).toMatchSnapshot();
    });

    it('should render with loading spinner', () => {
        // given
        const options = chance.n(chance.word, chance.d6());
        const props = {
            disabled: false,
            isLoading: true,
            label: chance.word(),
            onChange: jest.fn(),
            options,
            selectedOption: options[0],
        };

        // when
        render(<ButtonDropdown {...props} />);

        // then
        expect(screen).toMatchSnapshot();
    });
});
