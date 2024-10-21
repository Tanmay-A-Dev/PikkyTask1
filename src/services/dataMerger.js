const { getFoodItems, getFoodLocations, getNutritionalData, getOutOfStockItems } = require('./dataFetchHelper');

const mergeFoodData = async () => {
    const [foodItems, locations, nutritionalData, outOfStockItems] = await Promise.all([
        getFoodItems(),
        getFoodLocations(),
        getNutritionalData(),
        getOutOfStockItems()
    ]);

    const locationMap = new Map(locations.map(item => [item.id, item.locations]));
    const nutritionMap = new Map(nutritionalData.map(item => [item.id, item]));

    const consolidatedData = foodItems.map(food => ({
        id: food.id,
        name: food.name,
        description: food.description,
        price: food.price,
        locations: locationMap.get(food.id) || [],
        nutrition: nutritionMap.get(food.id) || {},
        isOutOfStock: outOfStockItems.includes(food.id)
    }));

    return { items: consolidatedData };
};

module.exports = { mergeFoodData };
