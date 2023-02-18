import clsx from "clsx";
import { Container, Row, Col } from "react-bootstrap";
import { cinemaList } from "./constant";
import style from "./movie.module.scss";
import "./scrollbar.scss";

export default function Movie() {
	return (
		<div
			id="movie"
			className="bg-indigo-900  text-stone-500"
		>
			<Container>
				<Row className="justify-content-center g-0 mt-3">
					<Col lg={1}>
						<div className={clsx(style.wrapper, "flex justify-center")}>
							<ul id="cinema-logo-list">
								{cinemaList.map((cinema) => (
									<li className="pt-2 pb-2 cursor-pointer">
										<img
											src={cinema.url}
											alt={cinema.alt}
											className={clsx(style.cinemaLogo, "w-14")}
										/>
									</li>
								))}
							</ul>
						</div>
					</Col>
					<Col lg={3}>
						<div className={style.wrapper}>
							<ul className={style.cinemaCluster}>
								<li className={clsx("w-full flex pt-2 pb-2 cursor-pointer", style.cinemaPlaceItem)}>
									<img
										src="images/rap-bhd.jpg"
										alt="rap-bhd.jpg"
										className="w-14 ml-3 mr-3"
									/>
									<div className="ciname_inf">
										<div className="cinema_name text-sm font-bold mb-2">
											BHD Star Cineplex - 3/2
										</div>
										<div className="cinema_addr text-xs">
											<span className="font-bold">Địa chỉ:</span> L5-Vincom 3/2, 3C Đường 3/2,
											Q.10
										</div>
										<span className="underline decoration-sky-500 text-red-800 text-xs hover:text-orange-500">
											Chi tiết
										</span>
									</div>
								</li>
								<li className={clsx("w-full flex pt-2 pb-2 cursor-pointer", style.cinemaPlaceItem)}>
									<img
										src="images/rap-bhd.jpg"
										alt="rap-bhd.jpg"
										className="w-14 ml-3 mr-3"
									/>
									<div className="ciname_inf">
										<div className="cinema_name text-sm font-bold">BHD Star Cineplex - 3/2</div>
										<div className="cinema_addr text-xs">L5-Vincom 3/2, 3C Đường 3/2, Q.10</div>
										<span className="underline decoration-sky-500 text-red-800 text-xs hover:text-orange-500">
											Chi tiết
										</span>
									</div>
								</li>
								<li className={clsx("w-full flex pt-2 pb-2 cursor-pointer", style.cinemaPlaceItem)}>
									<img
										src="images/rap-bhd.jpg"
										alt="rap-bhd.jpg"
										className="w-14 ml-3 mr-3"
									/>
									<div className="ciname_inf">
										<div className="cinema_name text-sm font-bold">BHD Star Cineplex - 3/2</div>
										<div className="cinema_addr text-xs">L5-Vincom 3/2, 3C Đường 3/2, Q.10</div>
										<span className="underline decoration-sky-500 text-red-800 text-xs hover:text-orange-500">
											Chi tiết
										</span>
									</div>
								</li>
								<li className={clsx("w-full flex pt-2 pb-2 cursor-pointer", style.cinemaPlaceItem)}>
									<img
										src="images/rap-bhd.jpg"
										alt="rap-bhd.jpg"
										className="w-14 ml-3 mr-3"
									/>
									<div className="ciname_inf">
										<div className="cinema_name text-sm font-bold">BHD Star Cineplex - 3/2</div>
										<div className="cinema_addr text-xs">L5-Vincom 3/2, 3C Đường 3/2, Q.10</div>
										<span className="underline decoration-sky-500 text-red-800 text-xs hover:text-orange-500">
											Chi tiết
										</span>
									</div>
								</li>
								<li className={clsx("w-full flex pt-2 pb-2 cursor-pointer", style.cinemaPlaceItem)}>
									<img
										src="images/rap-bhd.jpg"
										alt="rap-bhd.jpg"
										className="w-14 ml-3 mr-3"
									/>
									<div className="ciname_inf">
										<div className="cinema_name text-sm font-bold">BHD Star Cineplex - 3/2</div>
										<div className="cinema_addr text-xs">L5-Vincom 3/2, 3C Đường 3/2, Q.10</div>
										<span className="underline decoration-sky-500 text-red-800 text-xs hover:text-orange-500">
											Chi tiết
										</span>
									</div>
								</li>
								<li className={clsx("w-full flex pt-2 pb-2 cursor-pointer", style.cinemaPlaceItem)}>
									<img
										src="images/rap-bhd.jpg"
										alt="rap-bhd.jpg"
										className="w-14 ml-3 mr-3"
									/>
									<div className="ciname_inf">
										<div className="cinema_name text-sm font-bold mb-3">
											BHD Star Cineplex - 3/2
										</div>
										<div className="cinema_addr text-xs">L5-Vincom 3/2, 3C Đường 3/2, Q.10</div>
										<span className="underline decoration-sky-500 text-red-800 text-xs hover:text-orange-500">
											Chi tiết
										</span>
									</div>
								</li>
							</ul>
						</div>
					</Col>
					<Col lg={5}>
						<div className={style.wrapper}>
							<ul className="movieList block w-100 overflow-y-scroll h-full">
								<li className="movieItem pt-1 pb-1 pl-2 pr-2 border-b-2 border-b-zinc-400">
									<div className="filmTitle flex align-middle">
										<img
											src="images/film-8.jpg"
											alt="film-8.jpg"
											className={clsx("w-12 mr-2 mt-1")}
										/>
										<div className="filmNameShort flex  align-middle flex-col">
											<div className="flex mt-1">
												<img
													src="ESRB/ESRB_2013_Teen.svg.png"
													alt=""
													className="w-10 h-10 mr-1"
												/>
												<span className="font-bold align-top">LỪA ĐỂU GẶP LỪA ĐẢO 5</span>
											</div>
											<p className="text-stone-500 text-sm font-medium mt-3">
												120 phút -FOX 9.4 -IMDb 8.7
											</p>
										</div>
									</div>
									<div className="filmShowtime mt-3">
										<button className="bg-white border-2  font-bold text-sky-900 border-gray-600 pt-2 pb-2 pl-5 pr-5 rounded-md hover:border-sky-500 hover:text-sky-500 m-2">
											07:00 - 08:00
										</button>
										<button className="bg-white border-2  font-bold text-sky-900 border-gray-600 pt-2 pb-2 pl-5 pr-5 rounded-md hover:border-sky-500 hover:text-sky-500 m-2">
											07:00 - 08:00
										</button>
										<button className="bg-white border-2  font-bold text-sky-900 border-gray-600 pt-2 pb-2 pl-5 pr-5 rounded-md hover:border-sky-500 hover:text-sky-500 m-2">
											07:00 - 08:00
										</button>
										<button className="bg-white border-2  font-bold text-sky-900 border-gray-600 pt-2 pb-2 pl-5 pr-5 rounded-md hover:border-sky-500 hover:text-sky-500 m-2">
											07:00 - 08:00
										</button>
										<button className="bg-white border-2  font-bold text-sky-900 border-gray-600 pt-2 pb-2 pl-5 pr-5 rounded-md hover:border-sky-500 hover:text-sky-500 m-2">
											07:00 - 08:00
										</button>

										<button className="bg-white border-2  font-bold text-sky-900 border-gray-600 pt-2 pb-2 pl-5 pr-5 rounded-md hover:border-sky-500 hover:text-sky-500 m-2">
											07:00 - 08:00
										</button>
										<button className="bg-white border-2  font-bold text-sky-900 border-gray-600 pt-2 pb-2 pl-5 pr-5 rounded-md hover:border-sky-500 hover:text-sky-500 m-2">
											07:00 - 08:00
										</button>
										<button className="bg-white border-2  font-bold text-sky-900 border-gray-600 pt-2 pb-2 pl-5 pr-5 rounded-md hover:border-sky-500 hover:text-sky-500 m-2">
											07:00 - 08:00
										</button>
										<button className="bg-white border-2  font-bold text-sky-900 border-gray-600 pt-2 pb-2 pl-5 pr-5 rounded-md hover:border-sky-500 hover:text-sky-500 m-2">
											07:00 - 08:00
										</button>
									</div>
								</li>
							</ul>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
