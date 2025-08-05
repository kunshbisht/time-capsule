import React, { useState, useEffect } from "react";

const images = Array.from(
	{ length: 100 },
	(_, i) =>
		`https://picsum.photos/300/${
			Math.round(Math.random() * 3 + 2) * 100
		}?random=${i}`
);


export function Memories() {
	const [loadedCount, setLoadedCount] = useState(0);
	
	useEffect(() => {
		if (loadedCount < images.length) {
			console.log(loadedCount, images.length)
			const img = new Image();
			img.src = images[loadedCount];
			img.onload = () => setLoadedCount((c) => c + 1);
		}
	}, [loadedCount]);

	return (
		<div className="overflow-scroll h-full p-4">
			<h1 className="font-bold text-center text-lg m-4">You might need to wait to see more images, {loadedCount} of 100 loaded</h1>
			<div className="columns-2 md:columns-4 gap-6 w-full">
				{images.slice(0, loadedCount).map((src, i) => (
					<img key={i} src={src} className="w-full border-gray-500 border-[1px] mb-6 rounded-2xl cursor-pointer hover:scale-105 hover:rounded-lg transition-transform" loading="lazy" />
				))}
			</div>
		</div>
	);
}
