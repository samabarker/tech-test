// payDate function - accepts date as input, will default to todays date if no input
const payDay = (userInput = new Date()) => {

  // Assign variables for use in function.
    const inputDate = userInput;
    const payDate = new Date(+inputDate);
    
    //If month  is December, set payday to 14th, otherwise set payday to 27th
    payDate.setDate(payDate.getMonth() === 11 ? 14 : 27);
  
    // Check if we have surpassed the payday this month. If we have, set pay day to next months pay day. Double check whether 14th or 27th
    if (inputDate > payDate) {
      payDate.setMonth(payDate.getMonth() + 1);
      payDate.setDate(payDate.getMonth() === 11 ? 14 : 27);
    }
  
    // Check if payday is on a Sunday. If it is, subtract 2 days to make payday the Friday
    if (payDate.getDay() === 0) {
      payDate.setDate(payDate.getDate() - 2);
    }
  
   // Check if payday is on a Saturday. If it is, subtract 1 day to make payday the Friday
    if (payDate.getDay() === 6) {
      payDate.setDate(payDate.getDate() - 1);
    }
  
    // Console log the results and return payDate variable
    // console.log(`Current Date is ${inputDate}`);
    // console.log(`Next Pay Day is ${payDate}`);
  
    return payDate;
  };
  
  module.exports = payDay;