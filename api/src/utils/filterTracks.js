const filterTracks = (tracks, timeFrame, serie, genre) => {
	const filterByYear = (tracks) => {
		const filtered = timeFrame
			? tracks.filter(
					(track) => track.year <= timeFrame[1] && track.year >= timeFrame[0]
			  )
			: tracks;

		return filtered;
	};
	const filterByWord = (tracks, prop, word) => {
		const filtered = word
			? tracks.filter((track) =>
					track[prop].toLowerCase().includes(word.toLowerCase())
			  )
			: tracks;

		return filtered;
	};
	const result = filterByYear(
		filterByWord(filterByWord(tracks, 'serie', serie), 'genre', genre)
	);
	return result;
};

module.exports = filterTracks;
