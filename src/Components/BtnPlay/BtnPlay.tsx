import React from "react";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import style from "./BtnPlay.module.scss";

function BtnPlay() {
	return (
		<div className={clsx(style.BtnPlay)}>
			<FontAwesomeIcon
				icon={faPlay}
				className={clsx(style.iconPlay, "play_icon")}
			/>
		</div>
	);
}

export default BtnPlay;
