document.addEventListener("DOMContentLoaded", () => {
	const audioPlayer = document.getElementById("audioPlayer");
	let audioHasPlayed = false;

	// Handle scrolling to play audio
	const handleScroll = () => {
		if (!audioHasPlayed) {
			audioPlayer
				.play()
				.then(() => {
					audioHasPlayed = true;
					console.log("Audio played on scroll.");
				})
				.catch((error) => {
					console.error("Audio playback error:", error);
				});
		}
	};

	// Add scroll event listener with `once` to trigger only on first scroll
	window.addEventListener("scroll", handleScroll, { once: true });

	// Set up GSAP animation and ScrollTrigger
	gsap.registerPlugin(ScrollTrigger);

	gsap
		.timeline({
			scrollTrigger: {
				trigger: ".image-container",
				start: "top top",
				end: "+=100%",
				pin: true,
				scrub: true,
			},
		})
		.to(
			".light-overlay",
			{
				opacity: 0,
				duration: 1.5,
				ease: "power1.inOut",
			},
			0,
		)
		.to(
			".fenetre",
			{
				scale: 20,
				transformOrigin: "center center",
				duration: 1.5,
				ease: "power1.inOut",
			},
			"<",
		);
});
