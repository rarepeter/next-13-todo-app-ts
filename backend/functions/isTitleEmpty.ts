const isTitleEmpty = (title: string): string | "Untitled" => {
    if (title === "") {
        return "Untitled"
    }

    return title
}

export default isTitleEmpty