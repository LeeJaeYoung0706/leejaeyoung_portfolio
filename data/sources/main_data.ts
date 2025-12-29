
const MainImageArray = [
    {
        src: '/top_arrow.png',
        alt: 'top_arrow',
        sizes: '100px'
    }
]

export async function getData() {
    return {
        mainImage: MainImageArray
    };
}