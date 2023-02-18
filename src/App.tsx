import { Route, Routes } from "react-router-dom";
import "./App.scss";
import DetailPage from "./Containers/DetailPage";
import HomePage from "./Containers/HomePage";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route
					path="/"
					element={<HomePage />}
				/>
				<Route
					path="/details"
					element={<DetailPage />}
				/>
			</Routes>
		</div>
	);
}

export default App;
