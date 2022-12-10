interface Navigation {
    href: String | undefined
    label: String | undefined
}

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