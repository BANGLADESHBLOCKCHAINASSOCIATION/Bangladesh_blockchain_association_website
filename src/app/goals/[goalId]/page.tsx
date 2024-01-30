import goals from '@/../public/data/goals.json';
import Image from 'next/image';

type GoalsParams = { goalId: string };

const GoalsPage = ({ params }: { params: GoalsParams }) => {
	const goal = goals[Number(params.goalId)];

	const goalIndex = Number(params.goalId);
	return (
		<div className="py-20 w-8/12 mx-auto flex justify-between gap-10 h-full">
			<div className="w-1/2">
				<p className="lg:text-2xl font-semibold">{goal.title}</p>
				<p className="mt-10 text-sm lg:text-lg font-light">{goal.desc}</p>
			</div>

			<div className="p-14 h-60 w-60 border border-[#58BF77] rounded-full my-auto">
				<Image className="w-full h-full object-contain" src={goals[Number(goalIndex)]?.icon || '/icons/graduation-cap.png'} height={80} width={80} alt={goals[goalIndex]?.title + ' icon'} />
			</div>
		</div>
	);
};

export default GoalsPage;
