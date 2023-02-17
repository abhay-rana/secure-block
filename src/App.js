import Routes from "routes/routes";

import ModalProvider from "provider/portal-provider";

import Container from "components/container/container";
import ErrorBoundary from "components/container/error-boundary";

function App() {
	return (
		<ModalProvider>
			<ErrorBoundary>
				<Container>
					<Routes />
				</Container>
			</ErrorBoundary>
		</ModalProvider>
	);
}

export default App;
