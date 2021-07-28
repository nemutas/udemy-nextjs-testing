/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

it('Should render hello text', () => {
	render(<Home />)
	// screen.debug()
	expect(screen.getByText('Welcom to Nextjs')).toBeInTheDocument()
})
