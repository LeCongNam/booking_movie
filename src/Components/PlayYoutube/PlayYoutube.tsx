import { MouseEventHandler } from "react";
import clsx from "clsx";
import ReactPlayer from "react-player";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

import style from "./modal.module.scss";

interface Props {
	onShowTrailer: MouseEventHandler<SVGSVGElement>;
	url: string;
}

export default function PlayYoutube({ onShowTrailer, url }: Props) {
	const Wrapper = ({ children }: any) => <div className={clsx(style.video)}>{children}</div>;

	return (
		<div className={clsx(style.modalForYoutube)}>
			<FontAwesomeIcon
				icon={faClose}
				className={clsx(style.closeVideo)}
				onClick={onShowTrailer}
			/>

			<ReactPlayer
				playing={true}
				width={952}
				height={500}
				url={url}
				wrapper={Wrapper}
				config={{
					youtube: {
						playerVars: {
							showinfo: 1,
							autoPlay: 1,
						},
					},
				}}
				controls={true}
			/>
		</div>
	);
}
