export default function sort(arr) {

    arr.sort((a, b) => {
        return new Date(b.attributes.date) - new Date(a.attributes.date);
    })

}