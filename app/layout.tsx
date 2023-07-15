import './globals.css'
import dotenv from "dotenv";
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

dotenv.config();

const inter = Inter({ subsets: ['latin'] })
 
export const metadata = { 
  title: {
    default:'bishtblogs',
    template:'%s',
  },
  description: 'Explore the fascinating world of technology with BishtBlogs, your ultimate destination for insightful articles on ReactJS, Node.js, full-stack development, AI, the future of AI, JavaScript, and much more. Stay up-to-date with the latest trends, advancements, and expert opinions as our passionate team of tech enthusiasts shares their knowledge and experiences. Whether you are a seasoned developer or a tech enthusiast, BishtBlogs is your go-to resource for valuable insights and inspiration. Join our thriving community and unlock the endless possibilities of the ever-evolving tech landscape.',
  keywords:["BishtBlogs",
  "bisht blogs",
  "bishtblogs",
  "tech blogs",
  "technology blogs",
  "blogs",
  "frontend",
  "backend",
  "fullstack",
  "full stack",
  "full-stack",
  "front-end",
  "back-end",
  "js",
  "react",
  "node js",
  "node",
  "ai",
  "how to start",
  "roadmaps",
  "technology articles",
  "ReactJS",
  "Node.js",
  "full-stack development",
  "AI",
  "future of AI",
  "JavaScript",
  "web development",
  "front-end development",
  "back-end development",
  "server-side development",
  "software engineering",
  "tech trends",
  "tech advancements",
  "expert opinions",
  "developer community",
  "tech enthusiasts",
  "insights",
  "inspiration",
  "tech landscape",
  "programming",
  "software development",
  "tech news",
  "innovation",
  "coding",
  "artificial intelligence",
  "machine learning",
  "data science",
  "web technologies",
  "software architecture",
  "cloud computing",
  "mobile app development",
  "UI/UX design",
  "data analysis",
  "cybersecurity",
  "internet of things",
  "digital transformation",
  "big data",
  "cloud-native",
  "e-commerce",
  "blockchain",
  "agile methodologies",
  "responsive design",
  "tech tutorials",
  "technology resources",
  "coding tips",
  "web development frameworks",
  "programming languages",
  "technology insights",
  "developer tools",
  "programming best practices"],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <html lang="en">
      <head>
        <meta name='viewport' content='width=device-width , initial-scale=1.0' />
        <link rel="stylesheet" href="/t.css" />
      </head>
      <body style={{backgroundColor:"black"}} className={inter.className}>
        <div className='container mx-auto font-sans px-5 lg:px-14'>
          <Navbar/>
          <main> 
              {children}
          </main>
          <Footer/>
        </div>
      </body>
    </html>
    </>
  )
}
