const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  console.log("Welcome to Car Auto Sales");
  
  console.log("=========================");
  
  const cars = [
    {
      name: "Toyota Camry",
      price: 200,
    },
    {
      name: "LX 570",
      price: 100,
    },
    {
      name: "LX 350",
      price: 150,
    },
    {
      name: "Rav 4",
      price: 100,
    },
    {
      name: "Honda",
      price: 500,
    },
    {
      name: "Ford Escape",
      price: 250,
    },
  ];
  
  const carsToBuy = [];
  
  const ask = (msg) =>
    new Promise((resolve) => rl.question(msg, (response) => resolve(response)));
  
  const formatObj = (carObj) => {
    console.log(`We have ${carObj.name} for N${carObj.price}`);
    console.log("                         ");
  };
  
  const findInObj = (c) => {
    let car = cars.find((val) => val.name === c.trim());
  
    if (car) {
      carsToBuy.push(car);
    } else {
      console.log(`${c} is not in price list`);
    }
  };
  
  const totalPrice = (tp) => {
    let total = 0;
    for (let i = 0; i < tp.length; i++) {
      total += tp[i].price;
    }
    return total;
  };
  
  const payResponse = (res) => {
    if (res.trim() === "YES") {
      console.log(
        "Congratulations on ur new whip, to be delivered in the next 12 hours"
      );
    }
    if (res.trim() === "NO") {
      console.log("Ouch you declined");
    }
  };
  
  async function main() {
    console.log("We have the following cars available");
    console.log("                         ");
    console.log("=========================");
  
    cars.forEach((c) => formatObj(c));
  
    const c1 = await ask(
      "Which cars do you want? input them this way e.g (Lx 350, Rx 400, Lx 570)"
    );
    let arr = c1.split(",");
    arr.forEach((x) => {
      findInObj(x);
    });
  
    console.log("=========================");
  
    console.log(`Total amount to pay is ${totalPrice(carsToBuy)}`);
  
    console.log("=========================");
  
    const pay = await ask("Should we pay (YES/NO)");
  
    console.log("                         ");
    console.log("=========================");
  
    payResponse(pay);
    console.log("=========================");
  
    rl.close();
  }
  
  main();
  