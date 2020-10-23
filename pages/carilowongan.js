import React from 'react'
import Head from 'next/head'
import Header from '../components/layouts/Header'
import Sidebar from '../components/layouts/dashboard/Sidebar'
import CariLowonganPage from '../components/dashboard/CariLowonganPage'

export default function carilowongan() {
  return (
    <>
      <Head>
        <title>Cari Lowongan</title>
      </Head>
      <Header />
      <main>
        <div className="container">
          <div className="row">
            <Sidebar active={"active"} />
            <CariLowonganPage />
          </div>
        </div>
      </main>
    </>
  )
}
