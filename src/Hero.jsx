import heroImg from "./assets/hero.svg";
const Hero = () => {
	return (
		<section className="hero">
			<div className="hero-center">
				<div className="hero-title">
					<h1>Contentful CMS</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. In
						praesentium reiciendis, nihil soluta voluptatem itaque labore
						dolores quo commodi amet accusantium a provident molestiae deserunt
						aspernatur expedita, ex sapiente saepe!
					</p>
				</div>
				<div className="img-container">
					<img src={heroImg} alt="woman and the browser" />
				</div>
			</div>
		</section>
	);
};

export default Hero;
