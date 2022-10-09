import Layout from '../components/Layout'
import '../styles/globals.css'
import { AppProvider } from '../utils/AppContext'
import { AuthProvider } from '../utils/AuthContext'

function MyApp({ Component, pageProps }) {
  return <div>
    <AuthProvider >
      <AppProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppProvider>
    </AuthProvider>
  </div>
}

export default MyApp
