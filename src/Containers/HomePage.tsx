import { useRef } from "react";
import { BoxOffice, HeaderHome, News, Slider } from "../Components";
import Footer from "../Components/Footer/Footer";

export default function HomePage() {
	const refSlider = useRef(null);
	const refBoxOffice = useRef(null);
	const refNews = useRef(null);
	const refFooter = useRef(null);

	return (
		<>
			<HeaderHome
				refSlider={refSlider}
				refBoxOffice={refBoxOffice}
				refNews={refNews}
				refFooter={refFooter}
			/>
			<Slider ref={refSlider} />
			<BoxOffice ref={refBoxOffice} />
			<News ref={refNews} />
			<Footer ref={refFooter} />
			
		</>
	);
}
