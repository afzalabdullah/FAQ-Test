class ApiResponse {
    static success(res, message, data = null) {
        res.status(200).json({ message, data });
    }

    static error(res, message, error = null) {
        res.status(500).json({ message, error });
    }
}

module.exports = ApiResponse;
