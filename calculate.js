function generateSchedule(start, end, step) {
  const result = [];
  for (let i = start; i <= end; i += step) {
    result.push(i);
  }
  return result;
}

function main(roundtrip, maintenance) {
  const operationalCycle = roundtrip + maintenance

  // max number of trucks within 30 days are 30. 1 trucks per day if operational cycle if high
  const numOfTrucks = Math.min(2 * Math.ceil(operationalCycle/2) , 30) 
  console.log("\n")
  
  const truckSchedule = Array(numOfTrucks).fill([]).map((_, idx) => {
    const truckNumber = idx + 1
    const schedule = generateSchedule(idx + 1, 30, numOfTrucks)
    console.log(`\tTruck ${truckNumber}: ${schedule.join(", ")}`)
    
    return {
      truckNumber,
      schedule
    }
  })

  const result = `\n\tTOTAL Trucks: ${numOfTrucks}\n`
  console.log(`\x1b[1m${result}\x1b[0m`)

  return truckSchedule
}


module.exports = main