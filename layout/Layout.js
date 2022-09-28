import { View, Text } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Layout(props) {
  return (
    <>
        <Header />
            {props.children}
        <Footer />
    </>
  )
}