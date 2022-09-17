const { URL_SERVICE_COURSE } = process.env;
const apiAdapter = require("../../apiAdapter");
const api = apiAdapter(URL_SERVICE_COURSE);

module.exports = async (req, res, next) => {
    //
    try {
        const id = req.params.id;
        const config = {
            "Content-Type": "application/json; charset UTF-8",
            Accept: "application/json",
        };
        const response = await api.get(`/api/v1/courses/${id}`, config);
        return res.status(response.status).json(response.data);
    } catch (error) {
        if (error.code === "ECONNREFUSED") {
            return res.status(500).json({
                meta: {
                    status: "error",
                    message: "service course unavailable",
                },
                data: [],
            });
        }
        const { status, data } = error.response;
        return res.status(status).json(data);
    }
};
