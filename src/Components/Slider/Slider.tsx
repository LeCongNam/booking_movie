import { useState, forwardRef } from "react";
import SlickSlider from "react-slick";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

import { settings, imgs } from "./constant";
import style from "./Slider.module.scss";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./customSlider.scss";
import PlayYoutube from "../PlayYoutube/PlayYoutube";

function Slider({ ref }: any) {
	const [isShow, setShow] = useState(false);
	const [video, setVideo] = useState("");

	const handleTrailerVideo = () => {
		setShow(false);
	};

	return (
		<div
			 id="Slider"
			ref={ref}
			className={clsx(style.slider)}
		>
			<SlickSlider {...settings}>
				{imgs.map((img) => (
					<div
						className={clsx(style.playTrailer, "flex")}
						key={img.path}
					>
						<img
							src={img.path}
							alt={img.alt}
							className={clsx(style.bannerImg)}
						/>
						<div
							className={clsx(style.btnPlay, "flex")}
							onClick={() => {
								setShow(true);
								setVideo(img.url);
							}}
						>
							<FontAwesomeIcon icon={faPlay} />
						</div>
					</div>
				))}
			</SlickSlider>
			{isShow ? (
				<PlayYoutube
					url={video}
					onShowTrailer={handleTrailerVideo}
				/>
			) : (
				""
			)}
		</div>
	);
}

export default forwardRef(Slider);
