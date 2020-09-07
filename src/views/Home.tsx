import React, { useEffect } from 'react'
import Header from '../components/Header'
import Feed from '../components/Feed'

interface IHomeProps {
    handleButtonText: () => void
}

const Home = (props: IHomeProps) => {

    useEffect(() => {
        props.handleButtonText()
    }, [props])
    return (
        <div>
            <Header />
            <Feed />
        </div>

    )
}

export default Home;