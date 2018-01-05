module.exports.templateTags = [{
    name: 'randomphone',
    displayName: 'Random Phone',
    description: 'Generate a random phone number',
    args: [],
    async run (context) {
        min = 0
        max = 10000000
        prefix = 152;
        randomNumber = (Math.floor(Math.random() * (max - min)) + min);
        return (randomNumber + prefix * 100000000).toString();
    }
}];
