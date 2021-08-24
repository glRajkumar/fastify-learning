function range(length) {
    return Array.from(
        { length },
        (_, i) => ({
            id: `${i}`,
            title: `Todo ${i}`,
            description: "just text...",
            archived: false
        })
    )
}

let todos = range(10)

module.exports = todos