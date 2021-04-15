import { PlacesSelect } from '../../../packages/places-select/src';
import React from 'react';
import renderer from 'react-test-renderer';

describe('PlacesSelect', () => {
    it('should render without suggestions', () => {
        // given
        const props = {
            address: undefined,
            setAddress: jest.fn(),
        };

        // when
        const component = renderer.create(<PlacesSelect {...props} />);
        const tree = component.toJSON();

        // then
        expect(tree).toMatchSnapshot();
    });
});
