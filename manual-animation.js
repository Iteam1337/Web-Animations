import { animateByErik } from "./animate-by-erik";

const IPSUM_LOREM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec enim tellus, dictum ac ligula nec, dignissim efficitur enim. Suspendisse finibus diam in volutpat sollicitudin. Etiam tempor lacus mauris, in rhoncus magna facilisis eget. Ut id ultrices turpis, vel dictum dolor. Integer pulvinar mi dui, sed scelerisque velit dapibus sed. Praesent vitae molestie nunc, id commodo nisi. Mauris fringilla risus nisl, nec finibus enim fringilla nec. Cras efficitur feugiat orci, a dignissim quam ullamcorper non. Duis vel mauris odio. Nunc ex massa, scelerisque et nunc eu, venenatis feugiat risus. Integer congue eros eu fermentum pulvinar. Maecenas non sagittis ante. Praesent sed ex est. Nam pharetra porttitor dapibus. Vivamus in lorem ut turpis pulvinar lacinia.'

document.querySelector('#manualAnimation')
		.addEventListener('click', () => {
    const box = document.querySelector('.box')

    const words = IPSUM_LOREM.split(' ')

    function animateWords(fraction) {
        box.innerText = words
			.slice(0, words.length * fraction)
			.join(' ')
    }
    
    animateByErik(animateWords, 5000, interpolate)
})

function interpolate(value) {
    return value // Linear    
    // return Math.sin(Math.PI / 2 * value)
    // return Math.cos(Math.PI + Math.PI / 2 * value) + 1
    // return easeOutBounce(value)
}

function easeOutBounce(x) {
    const n1 = 7.5625
    const d1 = 2.75
    
    if (x < 1 / d1) {
        return n1 * x * x
    } else if (x < 2 / d1) {
        return n1 * (x -= 1.5 / d1) * x + 0.75
    } else if (x < 2.5 / d1) {
        return n1 * (x -= 2.25 / d1) * x + 0.9375
    } else {
        return n1 * (x -= 2.625 / d1) * x + 0.984375
    }
}

const clamp = (x, min, max) => Math.min(Math.max(x, min), max)

// Shamelessly stolen from https://medium.com/hackernoon/the-bounce-factory-3498de1e5262
function bounceFactory (bounces, threshold) {
	threshold = threshold || 0.001;

	function energy_to_height (energy) {
		return energy; // h = E/mg
	}

	function height_to_energy (height) {
		return height; // E = mgh
	}

	function bounce_time (height) {
		return 2 * Math.sqrt(2 * height); // 2 x the half bounce time measured from the peak
	}

	function speed (energy) {
		return Math.sqrt(2 * energy); // E = 1/2 m v^2, s = |sqrt(2E/m)|
	}

	var height = 1;
	var potential = height_to_energy(height);

	var elasticity = Math.pow(threshold, 1 / bounces);

	// The critical points are the points where the object contacts the "ground"
	// Since the object is initially suspended at 1 height, this either creates an
	// exception for the following code, or you can use the following trick of placing
	// a critical point behind 0 and representing the inital position as halfway though
	// that arc.

	var critical_points = [{
		time: - bounce_time(height) / 2, 
		energy: potential,
	}, 
	{
		time: bounce_time(height) / 2,
		energy: potential * elasticity,
	}];

	potential *= elasticity;
	height = energy_to_height(potential);

	var time = critical_points[1].time;
	for (var i = 1; i < bounces; i++) {
		time += bounce_time(height);
		potential *= elasticity; // remove energy after each bounce

		critical_points.push({
			time: time,
			energy: potential,
		});

		height = energy_to_height(potential);
	}

	var duration = time; // renaming to emphasize it's the total time now

	return function (t) {
		t = clamp(t, 0, 1);

		var tadj = t * duration;

		if (tadj === 0) {
			return 0;
		}
		else if (tadj >= duration) {
			return 1;
		}

		// Find the bounce point we are bouncing from, for very long animations (hours, days),
		// an binary search algorithm might be appropriate.
		var index;
		for (index = 0; index < critical_points.length; index++) {
			if (critical_points[index].time > tadj) {
				break;
			}
		}

		var bouncept = critical_points[index - 1];

		// Bouncing from a bounce point effectively resets time as it is a discontinuity
		tadj -= bouncept.time; 

		var v0 = speed(bouncept.energy);

		// Project position of object from bounce point to the current time
		var pos = v0 * tadj + -0.5 * tadj * tadj;

		return 1 - pos;
	};
};
