'use client'

import { usePathname } from 'next/navigation';
import DynamicBackground from "@/components/dynamicBackground";
import ContactBackground from "@/components/contactBackground";

const BackgroundManager = () => {
  
  const pathname = usePathname();
  const isContactPage = pathname === '/contato';
  <h1>testando</h1>
  return isContactPage ? <ContactBackground /> : <DynamicBackground />;

};

export default BackgroundManager;