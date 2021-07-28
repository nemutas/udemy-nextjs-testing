import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

type PropsType = {
	title?: string
}

export const Layout: React.FC<PropsType> = props => {
	const { children, title = 'Next.js' } = props

	return (
		<div className="flex justify-center items-center flex-col min-h-screen font-mono">
			<Head>
				<title>{title}</title>
			</Head>

			<header>
				<nav className="bg-gray-800 w-screen">
					<div className="flex items-center pl-8 h-14">
						<div className="flex space-x-4">
							<NavItem link="/" testId="home-nav" text="Home" />
							<NavItem link="/blog-page" testId="blog-nav" text="Blog" />
							<NavItem link="/comment-page" testId="comment-nav" text="Comment" />
							<NavItem link="/context-page" testId="context-nav" text="Context" />
							<NavItem link="/task-page" testId="task-nav" text="Todos" />
						</div>
					</div>
				</nav>
			</header>

			<main className="flex flex-1 justify-center items-center flex-col w-screen">{children}</main>

			<footer className="w-full h-12 flex justify-center items-center border-t">
				<a
					className="flex items-center"
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer">
					Powered by
					<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
				</a>
			</footer>
		</div>
	)
}

type NavItemPropsType = {
	link: string
	testId: string
	text: string
}

const NavItem: React.FC<NavItemPropsType> = props => {
	const { link, testId, text } = props

	return (
		<Link href={link}>
			<a data-testid={testId} className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
				{text}
			</a>
		</Link>
	)
}
