const getFoodItems = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, name: "Vada Pav", description: "Spicy potato fritter served in a bun with chutney", price: 50 },
                { id: 2, name: "Prawn Balchao", description: "Spicy Goan prawn pickle with tangy flavors", price: 300 },
                { id: 3, name: "Mutton Rogan Josh", description: "Slow-cooked lamb curry in aromatic spices", price: 350 }
            ]);
        }, 115);
    });
};

const getFoodLocations = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, locations: ["Mumbai", "Pune"] },
                { id: 2, locations: ["Panaji", "Vasco"] },
                { id: 3, locations: ["Delhi", "Lucknow", "Jaipur"] }
            ]);
        }, 120000); 
    });
};

const getNutritionalData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, calories: 250, protein: "5g", fat: "10g" },
                { id: 2, calories: 180, protein: "22g", fat: "8g" },
                { id: 3, calories: 320, protein: "30g", fat: "20g" }
            ]);
        }, 300);
    });
};

const getOutOfStockItems = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([2]); 
        }, 100);
    });
};

module.exports = { getFoodItems, getFoodLocations, getNutritionalData, getOutOfStockItems };
