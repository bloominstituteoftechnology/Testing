module.exports = {
	enhance,
	fail,
	romanNumeralize,
};

function enhance(item, rnd) {
	let { level, durability, failCount } = item;

	if (typeof durability !== "number" || typeof failCount !== "number") {
		return "Unexpected datatypes";
	}

	if (rnd < 15) {
		fail(item);
	}

	if (level >= 20) {
		return "This level is already maxed out";
	}
	newLevel = romanNumeralize(level + 1);

	return { ...item, level: newLevel, failCount: 0 };
}

function fail(item) {
	let augment = 0;

	level = numeralize(item.level);

	if (level > 15) {
		augment = level - 15;
	}

	return {
		...item,
		durability: item.durability - 5,
		failCount: item.failCount + 1 + augment,
	};
}

function romanNumeralize(number) {
	switch (number) {
		case 16:
			return "I";
		case 17:
			return "II";
		case 18:
			return "III";
		case 19:
			return "IV";
		case 20:
			return "V";
		default:
			return number;
	}
}

function numeralize(romNum) {
	switch (romNum) {
		case "I":
			return 16;
		case "II":
			return 17;
		case "III":
			return 18;
		case "IV":
			return 19;
		case "V":
			return 20;
		default:
			return romNum;
	}
}
