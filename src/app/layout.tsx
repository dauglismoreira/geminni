import type { Metadata } from 'next'
import './globals.css'
import { Header } from './components/header'
import { Footer } from './components/footer'
import {footer,
  footerMenu1,
  footerMenu2,
  headerInfo,
  headerMenu} from './mock';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`font-novelinLight font-novelinRegular font-novelinBold`}>
        <Header data={headerInfo} menu={headerMenu}/>
        {children}
        <Footer data={footer} menu1={footerMenu1} menu2={footerMenu2}/>
      </body>
    </html>
  )
}
