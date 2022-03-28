import Link from 'next/link'
import React from 'react'

function ActionSection({ children }) {
    return (
        <>

            <div className="uk-section uk-width-1-1">

                <div className="uk-card uk-width-2-4 uk-width-1-1@m uk-text-center uk-height-medium">

                    <div className="uk-section" >
                        <h2> <strong> For info and bookings</strong></h2>
                        <Link href="/contact" passHref>
                            <a className='uk-button uk-button-danger' href=""> Contact us </a>
                        </Link>

                    </div>
                </div>
            </div>

        </>
    )
}

export default ActionSection
