export const pageview = (url) => {
    if (window && window.gtag) {
        window.gtag('config', 'G-7K5WWJY30P', {
            page_path: url,
        })
    }
}

export const event = ({ action, params }) => {
    window.gtag('event', action, params)
}