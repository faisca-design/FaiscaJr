import DynamicBackground from "@/components/dynamicBackground/index.js";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import styles from "@styles/pages.module.css"
import Script from "next/script";
import "@styles/globals.css"
import { handleJSONfile, handleJSONfiles } from '../utils/functions/jsonHandler.js';

async function getData() {
  const navbarData = await handleJSONfile('./content/navbar/navbar.json');
  const socialMediaData = await handleJSONfiles('./content/footer');

  if (!navbarData || !socialMediaData) {
    throw new Error('Failed to fetch layout data');
  }

  return {
    navbarData,
    socialMediaData
  };
}

export default async function Layout({ children }) {
  const { navbarData, socialMediaData } = await getData();

  return (
    <html lang="pt-br">
      <head>
        <title>Faísca</title>
        <Script
          async
          src="https://identity.netlify.com/v1/netlify-identity-widget.js"
        />
      </head>
      <body style={{ margin: 0, padding: 0, backgroundColor: '#1E181A', minHeight: '100vh' }}>
        <div style={{ position: 'relative', minHeight: '100vh' }}>
          <DynamicBackground />
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