import { Decimal } from 'decimal.js'

const PERCENT = '%'
const SEC = 's'

Decimal.set({ precision: 2 })

export function getProducedItem(collect) {
    return collect.times
        .filter(time => time.activity.quantitative)
        .map(time => time.activity.itemName)[0]
}

export function milisecsToSecs(value) {
    return (value.dividedBy(1000).toNumber()) + SEC
}

export function valueToPercentNumber(value) {
    return (value.times(100)).toNumber()
}

export function valueToPercent(value) {
    return valueToPercentNumber(value) + PERCENT
}
