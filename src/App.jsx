import "./App.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function App() {
	const box = useRef(null);
	useEffect(() => {
		const el = box.current;
		gsap.to(el, {
			scrollTrigger: {
				trigger: el,
				// toggleActions: "restart none reverse none",
				start: "top 90%",
				end: "top 60%",
				// start: "top center",
				markers: true,
				scrub: 1,
			},
			x: 100,
			rotation: 720,
			// duration: 2,
		});
	}, []);

	return (
		<>
			<div className='container'>
				<div ref={box} className='box'></div>
			</div>
		</>
	);
}

export default App;
