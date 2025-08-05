import { JSX } from "react/jsx-runtime";

const grid = <div id="grid" className="w-full *:bg-violet-500 *:rounded-lg hover:*:bg-violet-600 *:cursor-pointer">
	<div style={{gridArea: '1 / 2 / span 1 / span 3'}}></div>
	<div style={{gridArea: '1 / 6 / span 1 / span 5'}}></div>
	<div style={{gridArea: '2 / 1 / span 1 / span 2'}}></div>
	<div style={{gridArea: '2 / 5 / span 1 / 10'}}></div>
	<div style={{gridArea: '3 / 4 / span 1 / span 1'}}></div>
	<div style={{gridArea: '3 / 10 / span 1 / span 1'}}></div>
	<div style={{gridArea: '4 / 1 / span 1 / 11'}}></div>
</div>

const getLast10Days: () => JSX.Element[] = () => {
	const days = [];

	for (let i = 9; i >= 0; i--) {
		const date = new Date();
		date.setDate(date.getDate() - i);
		days.push(date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' }));
	}

	return days.map((day, i) => <span key={i}>{day}</span>);
};

export const Goals = (
	<div className="p-6">
		<h1 className="text-4xl font-extrabold">Habits</h1>
		<div id="stat-table">
			<div className="grid grid-rows-4 gap-[10px] *:flex *:items-center">
				<span>Coding</span>
				<span>Exercise</span>
				<span>Content creation</span>
				<span>Eyedrops</span>
			</div>
			{grid}
			<div/>
			<div className="grid grid-cols-10 gap-[10px] *:text-center">
				{getLast10Days()}
			</div>
		</div>
	</div>
);
