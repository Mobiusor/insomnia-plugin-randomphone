module.exports.templateTags = [{
    name: 'randomphone',
    displayName: 'Random Phone',
    description: 'Generate a random phone number',
    args: [],
    async run (context) {
        min = 0
        max = 10000000
        if (max.toString().length > length && length !== 0) {
            throw new Error("Length has to be bigger than the max number's length");
        }

        if (min > max) {
            throw new Error("Max has to be bigger than min");
        }
        prefix = 152;

        randomNumber = (Math.floor(Math.random() * (max - min)) + min);
        return (randomNumber + prefix * 100000000).toString();
    }
}];
