import { useState, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { clsx } from "clsx";

import style from "./HeaderHome.module.scss";

// refSlider={refSlider}
// 				refBoxOffice={refBoxOffice}
// 				refNews={refNews}
// 				refFooter={refFooter}

export default function HeaderHome({ refBoxOffice, refSlider, refNews, refFooter }: any) {
	const [sticky, setSticky] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY >= 50) {
				setSticky(true);
			} else {
				setSticky(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div
			className={clsx(style.HeaderHome)}
			id="HeaderHome"
		>
			<Navbar
				collapseOnSelect
				expand="lg"
				bg="light"
				variant="light"
				className={clsx("pb-0 pt-1 fixed z-10  top-0 left-0 right-0")}
			>
				<Container>
					<Navbar.Brand>
						<Link to="/">
							<img
								src="/images/Logo_Fox.jpg"
								alt="Logo_Fox.jpg"
								className={clsx(style.logo, { [style.scaleLogo]: sticky })}
							/>
						</Link>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse
						id="responsive-navbar-nav"
						className="justify-content-lg-end"
					>
						<Nav>
							<Nav.Link
								className={clsx(style.itemNav, "font-semibold")}
								onClick={() => refBoxOffice.current.scrollIntoView({ behavior: "smooth" })}
							>
								Lịch chiếu
							</Nav.Link>
							<Nav.Link
								className={clsx(style.itemNav, "font-semibold")}
								onClick={() => {
									const mainRoot = document.getElementById("BoxOffice");
									if (mainRoot) mainRoot.scrollIntoView({ behavior: "smooth" });
								}}
							>
								Cụm rạp
							</Nav.Link>
							<Nav.Link
								className={clsx(style.itemNav, "font-semibold")}
								onClick={() => {
									const mainRoot = document.getElementById("News");
									if (mainRoot) mainRoot.scrollIntoView({ behavior: "smooth" });
								}}
							>
								Tin tức
							</Nav.Link>
							<Nav.Link
								className={clsx(style.itemNav, "font-semibold")}
								onClick={() => refBoxOffice.current.scrollIntoView({ behavior: "smooth" })}
							>
								Ứng dụng
							</Nav.Link>
							<Nav.Link
								className={clsx(style.itemNav, "font-semibold")}
								onClick={() => refFooter.current.scrollIntoView({ behavior: "smooth" })}
							>
								Liên hệ
							</Nav.Link>
							<Nav.Link className={clsx(style.itemNav, "font-semibold")}>Đăng nhập</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
}
