import { Decimal } from 'decimal.js'
import {
    totalTimed, mean, normalTime, operationalEfficiency,
    utilizationEfficiency, productivity, standardTime,
    totalProduction, getStandardDeviation
} from './CollectsCalculus'
import { valueToPercentNumber } from '../logic/CollectsFormatter'

Decimal.set({ precision: 2 })

function generateDataForChartsData(collects, calcFn, timeFormat = null) {
    return collects.map((collect, idx) => {
        return {
            'name': 'Collect ' + (idx + 1),
            'value': timeFormat ? timeFormat.convert(calcFn(collect, timeFormat))
                : valueToPercentNumber(calcFn(collect))
        }
    })
}

export function getStandardDeviationData(collects, timeFormat) {
    return generateDataForChartsData(collects, getStandardDeviation, timeFormat)
}

export function totalTimedData(collects, timeFormat) {
    return generateDataForChartsData(collects, totalTimed, timeFormat)
}

export function meanData(collects, timeFormat) {
    return generateDataForChartsData(collects, mean, timeFormat)
}

export function standardTimeData(collects, timeFormat) {
    return generateDataForChartsData(collects, standardTime, timeFormat)
}

export function normalTimeData(collects, timeFormat) {
    return generateDataForChartsData(collects, normalTime, timeFormat)
}

export function operationalEfficiencyData(collects) {
    return generateDataForChartsData(collects, operationalEfficiency)
}

export function utilizationEfficiencyData(collects) {
    return generateDataForChartsData(collects, utilizationEfficiency)
}

export function productivityData(collects) {
    return generateDataForChartsData(collects, productivity)
}

export function totalProductionData(collects) {
    return generateDataForChartsData(collects, totalProduction)
}
