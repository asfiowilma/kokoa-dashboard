import Sidebar from './Sidebar'
import { Toaster } from 'react-hot-toast'

export default function Layout({ children }) {
  return (
    <div>
      <div className="flex flex-col items-center w-full min-h-screen h-screen bg-neutral">
        <div className="w-full flex-1 flex px-4 md:px-8 pt-4 md:pt-8 gap-4 md:gap-6">
          <aside className="relative">
            <Sidebar />
          </aside>
          <div
            className="flex-1 flex flex-col items-center overflow-auto scrollbar scrollbar-hidden"
            style={{ maxHeight: 'calc(100vh - 4rem)' }}
          >
            <main className="flex w-full flex-1 items-start">{children}</main>
          </div>
        </div>
        <Toaster
          position="bottom-right"
          toastOptions={{
            success: {
              className: 'alert alert-success',
            },
            error: {
              style: {
                background: 'red',
              },
            },
          }}
        />
        <footer className="flex items-center justify-center w-full h-8 ">
          © Caramel Lyth
        </footer>
      </div>
    </div>
  )
}
