import React from 'react';
import { CommentType } from '../types/Types';

export const Comment: React.FC<CommentType> = ({ id, name, body }) => {
	return (
		<li className="mx-10">
			<p className="">
				{id}
				{': '}
				{body}
			</p>
			<p className="text-center mt-3 mb-10">
				{'by '}
				{name}
			</p>
		</li>
	)
}
