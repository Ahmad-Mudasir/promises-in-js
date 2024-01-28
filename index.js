let stroke = {
  fruits: ["apple", "banana", "cheery"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  topping: ["chocolate", "peanut"],
};

let shop_is_open = true;
let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (shop_is_open) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log("our shop is closed"));
    }
  });
};

order(2000, () => console.log(`${stroke.fruits[0]} was salected`))
  .then(() => {
    return order(1000, () => console.log("production has been start"));
  })

  .then(() => {
    return order(2000, () => console.log("the fruit was choped"));
  })

  .then(() => {
    return order(1000, () =>
      console.log(`${stroke.liquid[0]} and ${stroke.liquid[1]} was salected`)
    );
  })

  .then(() => {
    return order(1000, () => console.log("machinee was started"));
  })

  .then(() => {
    return order(2000, () =>
      console.log(`ice cream placed on ${stroke.holder[0]}`)
    );
  })

  .then(() => {
    return order(3000, () => console.log(`${stroke.topping[0]} was salected`));
  })

  .then(() => {
    return order(2000, () => console.log("ice cream was served"));
  });

