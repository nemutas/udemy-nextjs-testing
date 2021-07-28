import fetch from 'node-fetch';
import { PostType, TaskType } from '../types/Types';

export const getAllPostsData = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts/?_limit=10')
	const posts = (await res.json()) as PostType[]
	return posts
}

export const getAllTasksData = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/todos/?_limit=10')
	const tasks = (await res.json()) as TaskType[]
	return tasks
}

export const getAllPostIds = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts/?_limit=10')
	const posts = (await res.json()) as PostType[]
	return posts.map(post => ({
		params: {
			id: String(post.id)
		}
	}))
}

export const getPostData = async (id: string) => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
	const post = (await res.json()) as PostType
	return post
}
