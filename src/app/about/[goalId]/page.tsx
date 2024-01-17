import goals from '@/../public/data/goals.json';

export default function page({ params }: { params: { goalId: string } }) {
	const goal = goals[Number(params.goalId)];

	return (
		<div className="py-10 lg:py-16">
			<p className="sectionTitle">{goal.title}</p>
			<p className="mt-5 text-sm lg:text-base px-4 text-center">{goal.desc}</p>
		</div>
	);
}
