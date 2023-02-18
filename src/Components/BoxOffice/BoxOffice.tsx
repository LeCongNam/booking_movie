import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ButtonChoose from "../ButtonChoose/ButtonChoose";
import Movie from "../Movie/Movie";
import NextMovie from "../NextMovie/NextMovie";

import style from "./boxoffice.module.scss";

function BoxOffice({ ref }: any) {
	const [btnActive, setBtnActive] = useState(1);

	const chooseFilmContent = (id: any) => {
		setBtnActive(id);
	};

	return (
		<div
			id="BoxOffice"
			className="mt-3"
			ref={ref}
		>
			<Container>
				<Row className="justify-content-center align-items-lg-center no-gutters">
					<Col lg={2}>
						<ButtonChoose
							content="Phim đang chiếu"
							// defaultActive
							handleClick={() => chooseFilmContent(1)}
							id={1}
							idActive={btnActive}
							eventKey="first"
						/>
					</Col>
					<Col lg={2}>
						<ButtonChoose
							content="Phim sắp chiếu"
							handleClick={() => chooseFilmContent(2)}
							id={2}
							idActive={btnActive}
							eventKey="second"
						/>
					</Col>
				</Row>
			</Container>
			{btnActive === 1 ? <Movie /> : <NextMovie />}
		</div>
	);
}

export default BoxOffice;
