import { standardDeviation } from './StandardDeviation';
import { Decimal } from 'decimal.js'

export const UNPRODUCTIVE = 0
export const AUXILIARY = 1
export const PRODUCTIVE = 2

Decimal.set({ precision: 2 })

export function getStandardDeviation(collect) {
    const values = collect.times.map(time => new Decimal(time.timed))
    return standardDeviation(values)
}

export function getTimeByActivityTime(collect, type) {
    return collect.times
        .filter(time => time.activity.activityType === type)
        .map(time => new Decimal(time.timed))
        .reduce((sum = new Decimal(0), element) => sum.plus(element), new Decimal(0))
}

export function totalTimed(collect) {
    return collect.times 
        .map(time => new Decimal(time.timed))
        .reduce((sum = new Decimal(0), element) => sum.plus(element), new Decimal(0))
}

export function mean(collect) {
    let sum = totalTimed(collect)
    let length = collect.times.length
    return sum.dividedBy(length);
}

export function standardTime(collect) {
    let normalTimeC = normalTime(collect)
    let toleranceFactorC = toleranceFactor(collect)
    return (normalTimeC.times(toleranceFactorC))
}

function toleranceFactor(collect) {
    let workedTime = normalTime(collect)
    let intervalTime = collect.times
        .filter(time => time.activity.idleActivity)
        .map(time => new Decimal(time.timed))
        .reduce((sum = new Decimal(0), element) => sum.plus(element), new Decimal(0))
    if (intervalTime == 0 || workedTime == 0) return 1;
    let p = intervalTime.dividedBy(workedTime);
    let value = new Decimal(1).dividedBy(new Decimal(1).sub(p));
    return value

}
export function normalTime(collect) {
    let speedPercent = new Decimal(collect.generalSpeed).dividedBy(100);
    let nonIdleTimeTotal = collect.times
        .filter(time => !time.activity.idleActivity)
        .map(time => new Decimal(time.timed))
        .reduce((sum = new Decimal(0), element) => sum.plus(element), new Decimal(0))
    return nonIdleTimeTotal.times(speedPercent)
}

export function operationalEfficiency(collect) {
    let productiveTime = getTimeByActivityTime(collect, PRODUCTIVE).dividedBy(1000 * 60 * 60)
    let unproductiveTime = getTimeByActivityTime(collect, UNPRODUCTIVE).dividedBy(1000 * 60 * 60)
    let totalTime = totalTimed(collect).dividedBy(1000 * 60 * 60)
    let value = unproductiveTime.plus(totalTime)

    if (value === 0)
        return productiveTime
    return productiveTime.dividedBy(value)
}

export function utilizationEfficiency(collect) {
    let productiveTime = getTimeByActivityTime(collect, PRODUCTIVE).dividedBy(1000 * 60 * 60)
    let auxiliaryTime = getTimeByActivityTime(collect, AUXILIARY).dividedBy(1000 * 60 * 60)
    let totalTime = totalTimed(collect).dividedBy(1000 * 60 * 60) 

    if (totalTime === 0)
        totalTime = 1
    return (productiveTime.sub(auxiliaryTime)).dividedBy(totalTime)
}

export function productivity(collect) {
    let production = totalProduction(collect)
    let totalTime = totalTimed(collect)

    if (totalTime === 0)
        totalTime = 1
    return production.dividedBy((totalTime.dividedBy(1000)))
}

export function totalProduction(collect) {
    return collect.times
        .filter(time => time.activity.quantitative)
        .map(time => new Decimal(time.collectedAmount))
        .reduce((sum = new Decimal(0), element) => sum.plus(element), new Decimal(0))
}
