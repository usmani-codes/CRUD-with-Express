const notFound = (req, res, next) => {
    res.status(404).json({
        msg: 'Not Found'
    })
    next()
}

export default notFound