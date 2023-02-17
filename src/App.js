import Routes from "routes/routes";

import Container from "components/container/container";
import ErrorBoundary from "components/container/error-boundary";
import Home from "pages/home";

function App() {
	return (
		<ErrorBoundary>
			{/* <Home /> */}
			<Container>
				<Routes />
			</Container>
		</ErrorBoundary>
	);
}

export default App;
