import React from 'react'

function ActionSection({ children }) {
    return (
        <>

            <div className="uk-section uk-width-1-2">

                <div className="uk-card uk-width-2-4 uk-width-1-1@m uk-text-center uk-height-medium">
                    <h3>For info and bookings</h3>

                    <div className="uk-section" >

                        <button className='uk-button uk-button-danger'> {children} </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ActionSection
