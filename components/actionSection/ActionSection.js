import Link from 'next/link'
import React from 'react'

function ActionSection({ children }) {
    return (
        <>

            <div className="uk-section uk-width-1-1">

                <div className="uk-card uk-width-2-4 uk-width-1-1@m uk-text-center uk-height-medium">

                    <div className="uk-section" >
                        <h2> <strong> For info and bookings</strong></h2>
                        <Link href="https://7seassailing.com/booking-form.html" passHref>
                            <button className='uk-button uk-button-danger'> {children} </button>
                        </Link>

                    </div>
                </div>
            </div>

        </>
    )
}

export default ActionSection
