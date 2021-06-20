import React, { useEffect } from 'react'
import Loader from '../../components/loader/loader'
import { Toaster } from 'react-hot-toast';

import Toast from '../../components/Toast/toast';

function Home(props) {

    useEffect(() => {
        Toast("res.data.message", "success");
    }, [])

    return (
    <div>
        <Loader className="loader-sm" />
        <h1>Home!</h1>
        <Toaster />
    </div>
    )
}

export default Home
