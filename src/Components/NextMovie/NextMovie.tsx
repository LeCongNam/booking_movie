import React, { useState } from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import BtnPlay from "../BtnPlay/BtnPlay";
import PlayYoutube from "../PlayYoutube/PlayYoutube";

export default function NextMovie() {
	const [isShow, setShow] = useState(false);

	const handleTrailerVideo = () => {
		setShow(false);
	};

	return (
		<div
			id="NextMovie"
			className="mt-3"
		>
			<Container>
				<Row>
					<Col lg={3}>
						<Card
							border="success"
							className="w-60 relative"
							onClick={() => setShow(true)}
						>
							<img
								src="images/film-1.jpg"
								alt=""
								className="w-60 top-0 left-0 right-0 bottom-0"
							/>
							<BtnPlay />
						</Card>
					</Col>
				</Row>
			</Container>

			{isShow ? (
				<PlayYoutube
					url={"https://www.youtube.com/watch?v=XRm1P7oGpMQ&ab_channel=CJEntertainmentVietnam"}
					onShowTrailer={handleTrailerVideo}
				/>
			) : (
				""
			)}
		</div>
	);
}
