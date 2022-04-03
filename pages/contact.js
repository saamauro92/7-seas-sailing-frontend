import dynamic from 'next/dynamic'


const ContactForm = dynamic(() => import('../components/ContactForm/ContactForm'), {
    loading: () => <div className='uk-background-muted uk-flex  uk-flex-around ' uk-height-viewport="offset-bottom: 20">

        <div className='loading-box uk-text-center uk-text-bold'>
            Loading {" "}
            <span className="dot1">.</span>
            <span className="dot2">.</span>
            <span className="dot3">.</span>

        </div>
    </div>

})



const FormContact = ({ homepage }) => {
    const imgBanner = homepage.attributes.hero.banner.data.attributes.url;


    return imgBanner ? (

        <div>
            <ContactForm />

        </div>

    ) : <>...</>
}

export default FormContact


