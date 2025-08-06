import React, { useState, useEffect } from "react";

const allImages = Array.from({ length: 4 }, (_, j) =>
	Array.from(
		{ length: 25 },
		(_, i) =>
			`https://picsum.photos/300/${
				Math.round(Math.random() * 3 + 2) * 100
			}?random=${i + 25 * j}`
	)
);

function Column({ id }: { id: number }) {
	const [loadedCount, setLoadedCount] = useState(0);
	const images = allImages[id];

	useEffect(() => {
		setLoadedCount(0); // Reset when id changes
	}, [id]);

	useEffect(() => {
		if (loadedCount < allImages[id].length) {
			const img = new Image();
			img.src = allImages[id][loadedCount];
			img.onload = () => setLoadedCount(c => c + 1);
		}
	}, [loadedCount, id]);


	return (
		<div className="flex flex-col">
			{images.slice(0, loadedCount).map((src, i) => (
				<img
					key={i}
					src={src}
					alt="."
					className="w-full border-gray-500 border-[1px] mb-6 rounded-2xl cursor-pointer hover:scale-105 hover:rounded-lg transition-transform"
					loading="lazy"
				/>
			))}
		</div>
	);
}

export function Memories() {
	return (
		<div className="overflow-scroll h-full p-4">
			<span className="text-center font-bold p-4 block text-2xl">You might need to reload 😅</span>
			<div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
				{Array.from({ length: 4 }, (_, i) => (
					<Column key={i} id={i} />
				))}
			</div>
		</div>
	);
}