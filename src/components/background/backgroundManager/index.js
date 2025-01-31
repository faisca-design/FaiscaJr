'use client'

import { usePathname } from 'next/navigation';
import PageBackground from "@/components/background/pageBackground";
import ContactBackground from "@/components/background/contactBackground";

const BackgroundManager = () => {
  
  const pathname = usePathname();
  const isContactPage = pathname === '/contato/';
  <h1>testando</h1>
  return isContactPage ? <ContactBackground /> : <PageBackground />;

};

export default BackgroundManager;