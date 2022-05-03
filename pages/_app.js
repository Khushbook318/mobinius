import './style.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from '../Component/Layout';
// import "bootstrap/dist/js/bootstrap.min.js"
// import "../styles/Home.module.css"

function MyApp({ Component, pageProps }) {
  return (
  <>
    <Layout className="app-body">
      <Component {...pageProps} />
    </Layout>
  </>
  )
}

export default MyApp
