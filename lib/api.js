import qs from "qs"

export function getStrapiURL(path = "") {
    return `${
        // server setup
        process.env.NEXT_PUBLIC_STRAPI_API_URL
        }${path}`;
}
/* 
// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
    const requestUrl = getStrapiURL(path);
    const response = await fetch(requestUrl);
    const data = await response.json();
    return data;
}

export async function postAPI(path) {
    const requestUrl = getStrapiURL(path);
    const response = await fetch(requestUrl);
    const data = await response.json();
    return data;
} */


export async function fetchAPI(path, urlParamsObject = {}, options = {}) {
    // Merge default and user options
    const mergedOptions = {
        headers: {
            "Content-Type": "application/json",
            "Cache-Control": "public, max-age=31536000, immutable"
        },
        ...options,
    }



    // Build request URL
    const queryString = qs.stringify(urlParamsObject)
    const requestUrl = `${getStrapiURL(
        `/api${path}${queryString ? `?${queryString}` : ""}`
    )}`

    // Trigger API call
    const response = await fetch(requestUrl, mergedOptions)


    // Handle response
    if (!response.ok) {
        console.error(response.statusText)
        throw new Error(`An error occured please try again`)
    }
    const data = await response.json()
    return data
}