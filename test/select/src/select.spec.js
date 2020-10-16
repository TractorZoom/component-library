import Select from '../../../packages/select/src';
import React from 'react';
import renderer from 'react-test-renderer';

describe('Select', () => {
    it('should render empty', () => {
        // given
        const options = [];

        // when
        const component = renderer.create(
            <Select label='test' onChange={() => {}} selectedOption={''} options={options} />
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
            <Select label='test' onChange={() => {}} selectedOption={options[10]} options={options} />
        );
        const tree = component.toJSON();

        // then
        expect(tree).toMatchSnapshot();
    });

    it('should render with required', () => {
        // given
        const options = [];

        // when
        const component = renderer.create(
            <Select label='test' onChange={() => {}} required selectedOption={''} options={options} />
        );
        const tree = component.toJSON();

        // then
        expect(tree).toMatchSnapshot();
    });

    it('should render with error', () => {
        // given
        const options = [];

        // when
        const component = renderer.create(
            <Select error label='test' onChange={() => {}} selectedOption={''} options={options} />
        );
        const tree = component.toJSON();

        // then
        expect(tree).toMatchSnapshot();
    });

    it('should render with helper text', () => {
        // given
        const options = [];

        // when
        const component = renderer.create(
            <Select
                helperText='some helper text'
                label='test'
                onChange={() => {}}
                selectedOption={''}
                options={options}
            />
        );
        const tree = component.toJSON();

        // then
        expect(tree).toMatchSnapshot();
    });

    it('should render with add new option', () => {
        // given
        const options = [];

        // when
        const component = renderer.create(
            <Select label='test' onChange={() => {}} onAddNew={() => {}} selectedOption={''} options={options} />
        );
        const tree = component.toJSON();

        // then
        expect(tree).toMatchSnapshot();
    });
});
