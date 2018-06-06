// credits to https://derickbailey.com/2014/09/21/calculating-standard-deviation-with-array-map-and-array-reduce-in-javascript/
// adpted to ES6+
import { Decimal } from 'decimal.js'

Decimal.set({ precision: 2 })

export function standardDeviation(values) {
    const avg = average(values);

    const squareDiffs = values.map(value => {
        const preciseValue = new Decimal(value)
        const diff = preciseValue.sub(avg);
        const sqrDiff = diff.times(diff);
        return sqrDiff;
    });

    const avgSquareDiff = average(squareDiffs);

    const stdDev = avgSquareDiff.sqrt();
    return stdDev;
}

function average(data) {
    const sum = data.reduce((sum = new Decimal(0), value) => sum.plus(value), new Decimal(0));

    const avg = sum.dividedBy(data.length);
    return avg;
}