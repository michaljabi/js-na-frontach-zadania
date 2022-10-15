import {
    startFirstMission,
    startSecondMission,
    startThirdMission,
    startFourthMission
} from './missions.js'

// Misja ratunkowa nr 1:
try {
    startFirstMission()
} catch (err) {
    if (err instanceof Error) {
        console.log(err.message)
    } else {
        console.error('Unexpected error occurred!')
    }
}

// Misja ratunkowa nr 2:
try {
    startSecondMission()
} catch (err) {
    if (err instanceof Error) {
        console.log(err.message)
    } else {
        console.error('Unexpected error occurred!')
    }
}

// Misja ratunkowa nr 3:
try {
    startThirdMission()
} catch (err) {
    if (err instanceof Error) {
        console.log(err.message)
    } else {
        console.error('Unexpected error occurred!')
    }
}

// Misja ratunkowa 4:
try {
    startFourthMission()
} catch (err) {
    if (err instanceof Error) {
        console.log(err.message)
    } else {
        console.error('Unexpected error occurred!')
    }
}
