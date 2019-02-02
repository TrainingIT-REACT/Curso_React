import Link from 'next/link';
import Head from 'next/head';
import 'isomorphic-unfetch';

const Index = ({ stars }) => <div>
  <Head>
    <title>NextJS!</title>
  </Head>
  <h1>Hola desde NextJS!</h1>
  <p>Las estrellas del repositorio de React son: { stars } ⭐️</p>
  <p>
    <Link href="/about" prefetch><a>Sobre este ejemplo</a></Link>
  </p>
  <img src="/static/images/logo.png" alt="Logo de la aplicación de React" />
  <style jsx>{`
    h1 {
      color: blue;
    }
    img {
      width: 64px;
    }
  `}</style>
  <style jsx global>{`
    body {
      font-family: sans-serif;
    }
  `}</style>
</div>

// Obtenemos la información en el método getInitialProps
Index.getInitialProps = async () => {
  const res = await fetch('https://api.github.com/repos/facebook/react')
  const json = await res.json()
  return { stars: json.stargazers_count }
}

export default Index;