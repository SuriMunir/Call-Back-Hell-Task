const timer = document.querySelector('.timer-container');
const image = document.querySelector('.img-container');

let count10 = (callback) => {
  timer.innerText = 10;
  setTimeout(() => {
    callback();
  }, 2000);
};

let count9 = (callback) => {
  timer.innerText = 9;
  setTimeout(() => {
    callback();
  }, 2000);
};

let count8 = (callback) => {
  timer.innerText = 8;
  setTimeout(() => {
    callback();
  }, 2000);
};

let count7 = (callback) => {
  timer.innerText = 7;
  setTimeout(() => {
    callback();
  }, 2000);
};

let count6 = (callback) => {
  timer.innerText = 6;
  setTimeout(() => {
    callback();
  }, 2000);
};

let count5 = (callback) => {
  timer.innerText = 5;
  setTimeout(() => {
    callback();
  }, 2000);
};

let count4 = (callback) => {
  timer.innerText = 4;
  setTimeout(() => {
    callback();
  }, 2000);
};

let count3 = (callback) => {
  timer.innerText = 3;
  setTimeout(() => {
    callback();
  }, 2000);
};

let count2 = (callback) => {
  timer.innerText = 2;
  setTimeout(() => {
    callback();
  }, 2000);
};

let count1 = (callback) => {
  timer.innerText = 1;
  setTimeout(() => {
    callback();
  }, 2000);
};

let count0 = (callback) => {
  timer.innerText = 0;
  setTimeout(() => {
    callback();
  }, 2000);
};

count10(() => {
   count9(() => {
      count8(() => {
         count7(() => {
            count6(() => {
               count5(() => {
                  count4(() => {
                     count3(() => {
                        count2(() => {
                           count1(() => {
                              timer.classList.add('vanish');
                              image.classList.add('display')
                           })
                        })
                     })
                  })
               })
            })
         })
      })
   })
});