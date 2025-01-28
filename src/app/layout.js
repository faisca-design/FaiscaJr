import BackgroundManager from "@components/background/backgroundManager"
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import styles from "@styles/pages.module.css"
import Script from "next/script";
import "@styles/globals.css"
import { handleJSONfile, handleJSONfiles } from '../utils/functions/jsonHandler';

async function getData() {
  try {
    const navbarData = await handleJSONfile('./content/navbar/navbar.json');
    const socialMediaData = await handleJSONfiles('./content/footer');

    if (!navbarData || !socialMediaData) {
      throw new Error('Failed to fetch layout data');
    }

    return {
      navbarData,
      socialMediaData
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      navbarData: null,
      socialMediaData: []
    };
  }
}

export default async function Layout({ children }) {
  const { navbarData, socialMediaData } = await getData();

  if (!navbarData) {
    return (
      <html lang="pt-br">
        <head>
          <title>Faísca - Erro</title>
        </head>
        <body>
          <div>Error loading layout data</div>
        </body>
      </html>
    );
  }

  return (
    <html lang="pt-br">
      <head>
        <title>Faísca</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Script
          async
          src="https://identity.netlify.com/v1/netlify-identity-widget.js"
          strategy="afterInteractive"
        />
      </head>
      <body style={{ margin: 0, padding: 0, backgroundColor: '#1E181A', minHeight: '100vh' }}>
        <div style={{ position: 'relative', minHeight: '100vh' }}>
          <BackgroundManager />
          <Navbar {...navbarData} />
          <div className={styles.page}>
            {children}
          </div>
          <Footer socialMedia={socialMediaData} />
        </div>
      </body>
    </html>
  );
}