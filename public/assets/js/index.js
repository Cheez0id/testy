const rootEL = doeument.querySelector('#root');

const getData = () =>{
  fetch('/api', {
    method:'GET'
  }).then(res => res.json())
  .then((data) => console.log(data));
};

getData();