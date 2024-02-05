'use client'
import Link from "next/link";
import {ReactNode} from "react";
import {isMobile} from "@/app/helpers/isMobile";
import onlyNumbers from "@/app/helpers/onlyNumbers";

type LinkWhatsProps = {
  children: ReactNode
  phone: string
  initialMessage?: string
}

export default function LinkWhats({children, phone, initialMessage}: LinkWhatsProps) {
  let text = initialMessage ? 'Ol%C3%A1%2C+gostaria+de+informa%C3%A7%C3%B5es+sobre: ' + encodeURIComponent(initialMessage) : 'Ol%C3%A1%2C+gostaria+de+informa%C3%A7%C3%B5es.'

  const link = `https://${isMobile() ? 'api' : 'web'}.whatsapp.com/send?phone=${onlyNumbers(phone)}&text=${text}`

  return <Link href={link} target="_blank">{children}</Link>
}