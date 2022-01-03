const baseApiUrl = process.env.NODE_ENV === "production"
    ? 'http://localhost:1337'
    : 'http://localhost:1337';

/*  https://seven-seas-sailing.herokuapp.com' */

export default baseApiUrl;