import BasicDialog from '../../../packages/basic-dialog/src';
import React from 'react';
import renderer from 'react-test-renderer';

describe('Basic Dialog', () => {
    it('should render with required props when closed', () => {
        // given
        const mockData = {
            close: jest.fn(),
            dataTour: 'data-tour',
            isOpen: false,
            title: 'some dialog title',
        };

        // when
        const component = renderer.create(<BasicDialog {...mockData} />);
        let tree = component.toJSON();

        // then
        expect(tree).toMatchSnapshot();
    });
});
