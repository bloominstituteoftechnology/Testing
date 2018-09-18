module.exports = {
	createItem,
};

function createItem(level = 0, durability = 100, failCount = 0) {
	return {
		level,
		durability,
		failCount,
	};
}
