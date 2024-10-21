const { mergeFoodData } = require('../services/dataMerger');

const fetchFoodData = async (req, res) => {
    try {
        const data = await mergeFoodData();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Failed to retrieve food data." });
    }
};

module.exports = { fetchFoodData };
