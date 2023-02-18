import Routes from 'routes/routes'

import AuthProvider from 'provider/auth-providers'
import ModalProvider from 'provider/portal-provider'

import Container from 'components/container/container'
import ErrorBoundary from 'components/container/error-boundary'

function App() {
    return (
        <ModalProvider>
            <AuthProvider>
                <ErrorBoundary>
                    <Container>
                        <Routes />
                    </Container>
                </ErrorBoundary>
            </AuthProvider>
        </ModalProvider>
    )
}

export default App
