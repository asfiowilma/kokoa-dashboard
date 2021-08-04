import React from "react";
import Head from "next/head";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout({ children, labelName }) {
  return (
    <div>
      <Head>
        <title>Kokoa</title>}
        <link rel="icon" href={process.env.BACKEND_URL + '/kokoa-favicon.png'} />
      </Head>

      <div className="flex flex-col items-center w-full min-h-screen h-screen bg-neutral">
        <div className="w-full flex-1 drawer drawer-mobile px-4 md:px-8 pt-4 md:pt-8">
          <input id={labelName} type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center pl-0 md:pl-6 scrollbar scrollbar-hidden">
            <Navbar sidebarLabel={labelName} />
            <main className="flex w-full flex-1 items-start">{children}</main>
          </div>
          <div className="drawer-side">
            <label for={labelName} className="drawer-overlay"></label>
            <Sidebar />
          </div>
        </div>
        <footer className="flex items-center justify-center w-full h-8 ">© Caramel Lyth</footer>
      </div>
    </div>
  );
}
