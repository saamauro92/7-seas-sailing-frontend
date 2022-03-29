import Link from 'next/link'
import React, { useState } from 'react'

function ActionSection() {

    const [loading, setLoading] = useState(false);
    return (
        <>

            <div className="uk-section uk-width-1-1">

                <div className="uk-card uk-width-2-4 uk-width-1-1@m uk-text-center uk-height-medium">

                    <div className="uk-section" >
                        <h2> <strong> For info and bookings</strong></h2>
                        <Link href="/contact" passHref>
                            <a className='uk-button uk-button-danger' href="" onClick={() => setLoading(true)}> {loading ?

                                <>

                                    Loading
                                    <span className="dot1">.</span>
                                    <span className="dot2">.</span>
                                    <span className="dot3">.</span>
                                </>


                                : "Contact us"} </a>
                        </Link>



                    </div>



                </div>
            </div>

        </>
    )
}

export default ActionSection
