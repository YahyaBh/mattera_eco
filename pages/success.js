import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { BsBagCheckFill } from 'react-icons/bs'
import { useRouter } from 'next/router'
import { useStateContext } from '../context/StateContext'
import { runFireworks } from '../lib/utils'


function success() {

    const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
    const [order, setOrder] = useState(null)

    useEffect(() => {
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
        runFireworks(2);
    } , [])

    return (
        <div className='success-wrapper'>
            <div className='success'>
                <div className='icon'>
                    <BsBagCheckFill />
                </div>
                <h2>Payment Successfull</h2>
                <p className='email-msg'>Check you email index for the reciept.</p>
                <p className='description'>Having any questions <a className='email' href='mailto:yahyabouhsine@yahoo.com'>EMAIL US</a></p>
                <Link href='/'>
                    <button type='button' className='btn' width={300}>
                        Continue Shopping
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default success