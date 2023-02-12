import Routes from "routes/routes";

import Container from "components/container/container";
import ErrorBoundary from "components/container/error-boundary";

function App() {
	return (
		<ErrorBoundary>
			<Container>
				<Routes />
			</Container>
		</ErrorBoundary>
	);
}

export default App;
