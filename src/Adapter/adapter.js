
function getBurgers(){
    return fetch('http://localhost:3001/burgers')
      .then(r=>r.json())
  }

export default getBurgers
