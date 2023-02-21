import React from 'react'
import { DarkMode } from './DarkMode'
import { Footer } from './Footer'
import { Header } from './Header'
import { ScrollBtn } from './ScrollBtn'

export const Layout = ({children}) => {
    return (
        <div>
            <DarkMode />

            <div className="wrapper">
                {/* <!-- header section --> */}
                <Header />

                {children}

                {/* <!-- footer section --> */}
                <Footer />

                {/* <ScrollBtn /> */}

            </div >
        </div>
    
  )
}
