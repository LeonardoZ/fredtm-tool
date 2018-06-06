import { Decimal } from 'decimal.js'
Decimal.set({ precision: 2 })

export const MILISECONDS = {
    'display': 'Miliseconds (ms)',
    'unit': 'ms',
    'convert': (ms) => new Decimal(ms).toNumber(),
    'format': (ms) => new Decimal(ms).toNumber() + 'ms'
}

export const SECONDS = {
    'display': 'Seconds (s)',
    'unit': 's',
    'convert': (ms) => new Decimal(ms).dividedBy(1000).toNumber(),
    'format': (ms) => new Decimal(ms).dividedBy(1000).toNumber() + 's'
}

export const MINUTES = {
    'display': 'Minutes (m)',
    'unit': 'm',
    'convert': (ms) => new Decimal(ms).dividedBy(1000).dividedBy(60).toNumber(),
    'format': (ms) => new Decimal(ms).dividedBy(1000).dividedBy(60).toNumber() + 'm'
}

export const HOURS = {
    'display': 'Hours (h)',
    'unit': 'h',
    'convert': (ms) => new Decimal(ms).dividedBy(1000).dividedBy(60).dividedBy(60).toNumber(),
    'format': (ms) => new Decimal(ms).dividedBy(1000).dividedBy(60).dividedBy(60).toNumber() + 'h'
}


export const timeFormatFactoryByUnit = (unit) => {
    switch (unit) {
        case MILISECONDS.unit:
            return MILISECONDS
        case SECONDS.unit:
            return SECONDS
        case MINUTES.unit:
            return MINUTES
        case HOURS.unit:
            return HOURS;
        default:
            return MILISECONDS;
    }
}

export const FORMATS = [MILISECONDS, SECONDS, MINUTES, HOURS]
