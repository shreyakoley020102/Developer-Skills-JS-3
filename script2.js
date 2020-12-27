///Temperature Conversion

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    //Fix
    value: Number(prompt('Degree celsius:')),
  };

  console.log(measurement);
  //console.table(measurement);

  //console.log(measurement.value);
  //console.warn(measurement.value);
  //console.error(measurement.value);

  const kevin = measurement.value + 273;
  return kevin;
};

// A)Identify
console.log(measureKelvin());
