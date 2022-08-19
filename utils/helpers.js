export default function sort(arr) {

    arr.sort((a, b) => {
        return b.id - a.id;
    })

}   