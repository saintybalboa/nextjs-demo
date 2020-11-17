
import { render } from "@testing-library/react";
import SingleColumn from '.';

describe('SingleColumn', () => {
    it('should render content in a single column layout', () => {
        const { container, getByText } = render(
            <SingleColumn><div>test content</div></SingleColumn>
        );

        expect(container.querySelector('.row')).toBeInTheDocument();
        expect(container.querySelector('.col')).toBeInTheDocument();
        expect(getByText('test content')).toBeInTheDocument();
    });

    it('should apply custom classnames to column', () => {
        const { container } = render(
            <SingleColumn colClass="test-class" />
        );

        expect(container.querySelector('.test-class')).toBeInTheDocument();
    });
});
