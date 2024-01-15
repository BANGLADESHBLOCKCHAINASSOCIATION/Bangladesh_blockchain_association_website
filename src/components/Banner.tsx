export default function Banner() {
	return (
		<div className="flex flex-col justify-center gap-5 -mx-28 px-28 min-h-[75vh] banner-container">
			<p className="whitespace-pre-line text-3xl font-bold leading-10">{'Empowering The Bangladeshi \nBlockchain Ecosystem'}</p>
			<p className="max-w-[65%]">
				We combine, synchronize and leverage blockchain-related activities of European corporations, startups, venture capitalists, and scientific institutes. We serve as a superior, neutral body to
				aggregate and coordinate blockchain activities throughout Europe and to provide Non-European parties access into the European blockchain ecosystem.
			</p>
			<div className="primary-btn">View Engagements</div>
		</div>
	);
}
