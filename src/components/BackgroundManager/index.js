'use client'

import { usePathname } from 'next/navigation';
import DynamicBackground from "@/components/dynamicBackground/index.js";
import ContactBackground from "@/components/contactBackground/index";

const BackgroundManager = () => {
  const pathname = usePathname();
  const isContactPage = pathname === '/contato';

  return isContactPage ? <ContactBackground /> : <DynamicBackground />;
};

export default BackgroundManager;