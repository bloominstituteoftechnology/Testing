module.exports = {
	repair,
};
function repair(item) {
	let { durability } = item;

	if (durability > 90) {
		return "This item is fine.  Break it some more and come back later";
	}

	return { ...item, durability: item.durability + 10 };
}
