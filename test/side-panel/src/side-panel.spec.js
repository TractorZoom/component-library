import SidePanel from '../../../packages/side-panel/src';
import React from 'react';
import renderer from 'react-test-renderer';

describe('Side Panel', () => {
    it('should render the side panel empty', () => {
        // given

        // when
        const component = renderer.create(<SidePanel />);
        let tree = component.toJSON();

        // then
        expect(tree).toMatchSnapshot();
    });

    it('should render the side panel with a child', () => {
        //given

        //when
        const component = renderer.create(
            <SidePanel>
                <div>Child</div>
            </SidePanel>
        );
        let tree = component.toJSON();

        //then
        expect(tree).toMatchSnapshot();
    });
});
