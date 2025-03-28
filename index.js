const express = require('express');
// create an express app
const app = express();

// use Render's port or fallback to 3000
const PORT = process.env.PORT || 3000;

//route
app.get('/ping', (req, res) => {
	res.json({ message: 'pong' });
});

app.get('/vibes', (req, res) => {
	const vibes = [
		'You’re vibing like a 2009 Tumblr blog.',
		'Caffeinated and dangerously optimistic.',
		'Running on 3 hours of sleep and pure ambition.',
		'Vibes are immaculate. Carry on.',
		'Mid-tier vibes. Needs lo-fi and hydration.',
		'404 Vibes Not Found.',
	];

	const randomVibe = vibes[Math.floor(Math.random() * vibes.length)];
	res.json({ vibe: randomVibe });
});

// start the server
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
