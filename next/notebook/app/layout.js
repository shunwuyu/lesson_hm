import Sidebar from '@/components/Sidebar';
import './style.css';
export default async function RootLayout({
  children
}) {
  // 请求数据 SEO 

  return (
    <html lang="en">
      <body>
        <div className="container">
          <div className="main">
            <Sidebar />
            <section className="col note-viewer">
            {children}
            </section>
          </div>
        </div>
      </body>
    </html>
  )
}