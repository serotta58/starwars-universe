export function localizeNumeric(origStr) {
    // Add commas to numeric string, unless NaN
    return isNaN(origStr) ? origStr : Number(origStr).toLocaleString();
}
