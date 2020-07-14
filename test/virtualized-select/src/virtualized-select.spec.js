import VirtualizedSelect from '../../../packages/virtualized-select/src';
import React from 'react';
import renderer from 'react-test-renderer';

describe('Virtualized Select', () => {
    it('should render empty', () => {
        // given
        const options = [];

        // when
        const component = renderer.create(
            <VirtualizedSelect label='test' onChange={() => {}} selectedOption={''} options={options} />
        );
        const tree = component.toJSON();

        // then
        expect(tree).toMatchSnapshot();
    });

    it('should render with 10000 items', () => {
        // given
        const options = [];
        let index = 0;

        while (index < 10000) {
            options.push(`${index}`);
            index++;
        }

        // when
        const component = renderer.create(
            <VirtualizedSelect label='test' onChange={() => {}} selectedOption={options[10]} options={options} />
        );
        const tree = component.toJSON();

        // then
        expect(tree).toMatchSnapshot();
    });
});
