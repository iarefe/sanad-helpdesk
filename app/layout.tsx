import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'سند | الدعم الفني',description:'مساحة بسيطة لتنظيم تذاكر الدعم الفني ومتابعتها.',icons:{icon:'/favicon.svg'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ar" dir="rtl"><body>{children}</body></html>}
