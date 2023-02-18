import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ButtonChoose from "../ButtonChoose/ButtonChoose";
import NewsCinema from "./NewsCinema/NewsCinema";
import ReviewFilm from "./ReviewFilm/ReviewFilm";
import SaleOff from "./SaleOff/SaleOff";

function News({ ref }: any) {
	const [active, setActive] = useState(1);

	const chooseFilmContent = (id: any) => {
		setActive(id);
	};

	const handleRenderContent = (idTabActive: number | undefined) => {
		if (idTabActive === 1) {
			return <NewsCinema />;
		}

		if (idTabActive === 2) {
			return <ReviewFilm />;
		}

		if (idTabActive === 3) {
			return <SaleOff />;
		}
	};

	return (
		<div
			id="News"
			className="mt-3"
		>
			<Container>
				<Row className="justify-center g-0">
					<Col lg={2}>
						<ButtonChoose
							content="Điện ảnh 24h"
							id={1}
							idActive={active}
							handleClick={() => chooseFilmContent(1)}
							eventKey={"1"}
						/>
					</Col>
					<Col lg={2}>
						<ButtonChoose
							content="Review"
							id={2}
							idActive={active}
							handleClick={() => chooseFilmContent(2)}
							eventKey={"1"}
						/>
					</Col>
					<Col lg={2}>
						<ButtonChoose
							content="Khuyến mãi"
							id={3}
							idActive={active}
							handleClick={() => chooseFilmContent(3)}
							eventKey={"1"}
						/>
					</Col>
				</Row>
			</Container>
			{handleRenderContent(active)}
		</div>
	);
}

export default News;
