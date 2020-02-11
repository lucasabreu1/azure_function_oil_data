var randomDate  = require('random-datetime')
var uuidv1      = require('uuid/v1')


function Oil(id, pressure, temperature, timeStamp){
    this.id=id
    this.pressure=pressure
    this.temperature=temperature
    this.timeStamp=timeStamp

}

function generateRandomOil(options){

    let randomOilDataList = []
    let randomQuantity = Math.random()*5
    let i=0
    while(i<randomQuantity){

        let randomId = uuidv1()
        let randomPressure = Math.random()*1000
        let randomTemperature = Math.random()*1000
        let randomTimeStamp = randomDate()

        randomOilDataList.push(new Oil(randomId ,randomPressure, randomTemperature, randomTimeStamp, randomTimeStamp))
        i++
    }

    return randomOilDataList
}

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

        context.res = {
            // status: 200, /* Defaults to 200 */
            body: JSON.stringify(generateRandomOil())
        };
};