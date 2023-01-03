const sortByOptions = [{
    name: "Date",
    value: "createdAt"
},
{
    name: "Title",
    value: "title"
},
{
    name: "Content",
    value: "content"
}]

const orderByOptions = [
    {
        name: "Descending",
        value: "desc"
    },
    {
        name: "Ascending",
        value: "asc"
    }
]

const typeOptions = [
    {
        name: "All not deleted",
        value: "all-not-deleted"
    },
    {
        name: "Not completed",
        value: "not-completed"
    },
    {
        name: "Completed",
        value: "completed"
    },
    {
        name: "All",
        value: "all"
    },
    {
        name: "Recently deleted",
        value: "recently-deleted"
    }
]

export default sortByOptions

export { orderByOptions, sortByOptions, typeOptions }
