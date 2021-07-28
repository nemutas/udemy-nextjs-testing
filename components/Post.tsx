import Link from 'next/link';
import { PostType } from '../types/Types';

export const Post: React.FC<PostType> = ({ id, title }) => {
	return (
		<div>
			<span>{id}</span>
			{' : '}
			<Link href={`/posts/${id}`}>
				<a className="cursor-pointer border-b border-gray-500 hover:bg-gray-300">{title}</a>
			</Link>
		</div>
	)
}
