const promiseExample = () => {
  return new Promise((resolve) => {
    setTimeout(() => { resolve('Hello') }, 3000);
  });
};

promiseExample()
  .then((res) => res + ' World')
  .then((res) => console.log(res))
  .catch(err => {
    console.log('Failed: ' + err);
  })

console.log('hi');