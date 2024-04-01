module.exports = {
    // format_date will take in a timestamp and return a string with only the date
    // like MM/DD/YYYY
    format_date: (date) => {
        return date.toLocaleDateString();
    }
}