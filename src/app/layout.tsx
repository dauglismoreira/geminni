import './globals.css'
import {Header} from './components/header'
import {Footer} from './components/footer'
import fetchData from './helpers/fetchData';
import {ChatWhatsapp} from "@/app/components/chatWhatsapp";
import {ReactNode} from "react";
import ScriptInjector from './helpers/scriptInjector';

export default async function RootLayout({children}: { children: ReactNode }) {
  const data = await fetchData('configs')
  const phone = data.data[0]?.configs.filter((item: { key: string }) => item.key === 'phone')[0]?.description

  const dataHeadScript = data?.data[0]?.configs?.filter((config:any) => config.key === 'google-gtm-head')[0]?.description
  const dataBodyScript = data?.data[0]?.configs?.filter((config:any) => config.key === 'google-gtm-body')[0]?.description

  return (
    <html lang="en">
    {/* {dataHeadScript && <head dangerouslySetInnerHTML={{ __html: dataHeadScript }} />} */}
    {dataHeadScript && <ScriptInjector scriptContent={dataHeadScript}/>}
    <body className={`font-novelinLight font-novelinRegular font-novelinBold font-novelinHeavy`}>
    {dataBodyScript && <script dangerouslySetInnerHTML={{ __html: dataBodyScript }} />}
    <Header
      data={data.data}
    />
    {children}
    <Footer
      data={data.data}
      menu1={data.data[2]?.configs.filter((item: any) => item.key === 'footer-menu')[0].enumeration.items}
      menu2={data.data[2]?.configs.filter((item: any) => item.key === 'footer-links')[0].enumeration.items}
    />

    {phone &&
      <ChatWhatsapp.Link phone={phone}>
        <ChatWhatsapp.Button/>
      </ChatWhatsapp.Link>
    }
    </body>
    </html>
  )
}
