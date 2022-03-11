function getSplitName(personName) {
  // kondisi jenis data
  if (typeof (personName) == 'string') {
      const fullNameSplit = personName.split(" ");
      const name = {
          firstName: fullNameSplit[0],
      }
      // kondisi panjang data
      if (fullNameSplit.length === 1) {
          dataName = {
              middleName: null,
              lastName: null,
          }
      } else if (fullNameSplit.length === 2) {
          dataName = {
              middleName: null,
              lastName: fullNameSplit[1],
          }
      } else if (fullNameSplit.length === 3) {
          dataName = {
              firstName: fullNameSplit[0],
              middleName: fullNameSplit[1],
              lastName: fullNameSplit[2],
          }
      } else {
          return console.log('ERROR: This function is only for 3 characters name')
      }
      fullName = {
          ...name,
          ...dataName
      }
      return console.log(fullName)

  } else {
      return console.log('ERROR: data type is ' + typeof (personName))
  }
}

console.log(getSplitName("Aldi Daniela Pranata"));
console.log(getSplitName("Dwi Kuncoro"));
console.log(getSplitName("Aurora"));
console.log(getSplitName("Aurora Aureliya Sukma Darma"));
console.log(getSplitName(0));