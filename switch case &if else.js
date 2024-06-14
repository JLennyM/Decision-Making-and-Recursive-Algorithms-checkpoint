//Leap year
function isLeapYear(year) {
    if (year % 400 === 0) {
      return true; // Leap year
    } else if (year % 100 === 0) {
      return false; // Not a leap year
    } else if (year % 4 === 0) {
      return true; // Leap year
    } else {
      return false; // Not a leap year
    }
  }
  
  const year = 2024;
  console.log(`${year} is a leap year: ${isLeapYear(year)}`);
  
  //Ticket pricing
  function getTicketPrice() {
    const age = parseInt(prompt("Enter your age: "), 10);
    let price;
  
    switch (true) {
      case (age <= 12):
        price = 10;
        break;
      case (age >= 13 && age <= 17):
        price = 15;
        break;
      case (age >= 18):
        price = 20;
        break;
      default:
        console.log("Invalid age entered.");
        return;
    }
  
    console.log(`The ticket price is $${price}.`);
  }
  
  getTicketPrice();
  