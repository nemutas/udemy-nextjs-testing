/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect';
import { getPage, initTestHelpers } from 'next-page-tester';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

initTestHelpers()

describe('Navigation by Link', () => {
	it('Should route to selected page in navbar', async () => {
		const { page } = await getPage({
			route: '/index'
		})
		render(page)
		// to blog page
		userEvent.click(screen.getByTestId('blog-nav'))
		expect(await screen.findByText('blog page')).toBeInTheDocument()
		// to comment page
		userEvent.click(screen.getByTestId('comment-nav'))
		expect(await screen.findByText('comment page')).toBeInTheDocument()
		// to context page
		userEvent.click(screen.getByTestId('context-nav'))
		expect(await screen.findByText('context page')).toBeInTheDocument()
		// to task page
		userEvent.click(screen.getByTestId('task-nav'))
		expect(await screen.findByText('todos page')).toBeInTheDocument()
		// back to home page
		userEvent.click(screen.getByTestId('home-nav'))
		expect(await screen.findByText('Welcom to Nextjs')).toBeInTheDocument()
	})
})
