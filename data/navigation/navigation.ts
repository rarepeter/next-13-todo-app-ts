interface Navigation {
    href: String | undefined
    label: String | undefined
}

const CLIENT_URL = "http://localhost:3000"
const SERVER_URL = "http://localhost:3000/api"

const navigation: Navigation[] = [
    {
        href: "/",
        label: "Home"
    },
    {
        href: "/appointments",
        label: "Appointments"
    },
    {
        href: "/deleted-recently",
        label: "Recently deleted todos"
    },
]

export default navigation
export { SERVER_URL, CLIENT_URL }