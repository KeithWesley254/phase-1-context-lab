/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

const createEmployeeRecord = function (allRecords) {
    const eRecord = {
        firstName: `${allRecords[0]}`,
        familyName: `${allRecords[1]}`,
        title: `${allRecords[2]}`,
        payPerHour: allRecords[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return eRecord
}

const createEmployeeRecords = function (eStats) {
    const eArray = []
    eStats.map(rada => eArray.push(createEmployeeRecord(rada)))
    return eArray
}

const createTimeInEvent = function(timeIn) {
    const likeCheeks = timeIn.split(' ')
    const date = likeCheeks[0]
    const time = likeCheeks[1]
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(time),
        date: `${date}`
    })
    return this
}

const createTimeOutEvent = function(timeOut) {
    const likeCheeks = timeOut.split(' ')
    const date = likeCheeks[0]
    const time = likeCheeks[1]
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(time),
        date: `${date}`
    })
    return this
}

const hoursWorkedOnDate = function (date) {
    const timeIn = this.timeInEvents.find(dora => dora.date === date)
    const timeOut = this.timeOutEvents.find(george => george.date === date)

    return Math.abs(timeOut.hour - timeIn.hour) / 100
}

const wagesEarnedOnDate = function (date) {
    const hours = hoursWorkedOnDate.call(this, date)
    const mrCrabs = this.payPerHour
    return hours * mrCrabs
}

const findEmployeeByFirstName = function (collection, firstNameString) {
    const the1st = collection.find(lostArk => lostArk.firstName = firstNameString)
    return the1st
}

const calculatePayroll = function (ranOutOfNames) {
    const total = ranOutOfNames.reduce(function(potato, ngwashe){
        return potato + allWagesFor.call(ngwashe)
    }, 0)
    return total
}