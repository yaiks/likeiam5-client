import { h } from "preact";
import style from "./Hero.css";

const Hero = () => (
	<div class={style.hero}>
		<picture class={style.hero_picture}>
			<source
				media='(max-width: 799px)'
				srcset='assets/images/hero-mobile.png'
			/>
			<img
				class={style.hero_image}
				src='assets/images/hero.png'
				alt='people sitting having a lecture'
			/>
		</picture>
		<div class={style.hero_content}>
			<h1>Learn hard concepts in a simple manner</h1>
			<p class={style.hero_subtitle}>
				Some things are complex, but with the right approach and explaination,
				anyone can learn anything!
			</p>
			<button class={style.hero_button}>More about us</button>
			<p class={style.hero_link}>
				Know much about something? <a href=''>start writing and monetize</a>
			</p>
		</div>
	</div>
);

export default Hero;
