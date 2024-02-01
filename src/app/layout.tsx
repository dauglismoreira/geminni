import type { Metadata } from 'next'
import './globals.css'
import { Header } from './components/header'
import { Footer } from './components/footer'
import fetchData from './helpers/fetchData';
import {ChatWhatsapp} from "@/app/components/chatWhatsapp";
import {ReactNode} from "react";

export default async function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  const data = await fetchData('configs')

  return (
    <html lang="en">
      <body className={`font-novelinLight font-novelinRegular font-novelinBold font-novelinHeavy`}>
        <Header
          data={data.data}
        />
        {children}
        <Footer
          data={data.data}
          menu1={data.data[2]?.configs.filter((item:any) => item.key === 'footer-menu')[0].enumeration.items}
          menu2={data.data[2]?.configs.filter((item:any) => item.key === 'footer-links')[0].enumeration.items}
        />

      <ChatWhatsapp.Link phone={data.data[0]?.configs.filter((item:{key:string}) => item.key === 'phone')[0]?.description}>
        <ChatWhatsapp.Button/>
      </ChatWhatsapp.Link>
      </body>
    </html>
  )
}
