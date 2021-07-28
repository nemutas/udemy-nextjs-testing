import axios from 'axios';
import { GetStaticProps } from 'next';
import useSWR from 'swr';
import { Layout } from '../components/Layout';
import { getAllTasksData } from '../lib/fetch';
import { TaskType } from '../types/Types';

type PropsType = {
	staticTasks: TaskType[]
}

const axiosFetcher = async () => {
	const result = await axios.get<TaskType[]>(
		'https://jsonplaceholder.typicode.com/todos/?_limit=10'
	)
	return result.data
}

const TaskPage: React.FC<PropsType> = ({ staticTasks }) => {
	const { data: tasks, error } = useSWR('todosFetch', axiosFetcher, {
		initialData: staticTasks,
		revalidateOnMount: true
	})

	if (error) return <span>Error!</span>

	return (
		<Layout title="Todos">
			<p className="text-4xl mb-10">todos page</p>
			<ul>
				{tasks &&
					tasks.map(task => (
						<li key={task.id}>
							{task.id}
							{': '}
							<span>{task.title}</span>
						</li>
					))}
			</ul>
		</Layout>
	)
}
export default TaskPage

export const getStaticProps: GetStaticProps = async () => {
	const staticTasks = await getAllTasksData()
	return {
		props: { staticTasks }
	}
}
