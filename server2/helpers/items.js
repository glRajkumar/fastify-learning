function range(length) {
    return Array.from(
        { length },
        (_, i) => ({ id: `${i}`, name: `Item ${i}`, value: 2 * i })
    )
}

let items = range(10)

module.exports = items