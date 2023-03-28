// Add your code here

  
function submitData(userName, userEmail ){
           const formData = {
            name: userName,
            email: userEmail
          }
          fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData)
      })
      .then((resp)=>resp.son())
      .then((data) => {
          
              let p = document.createElement('p')
              p.textContent = data.id;
              document.querySelector('body').appendChild(p)
          })
      .catch((error)=>{
          let p= document.createElement('p');
          p.textContent = error.message;
          document.querySelector('body').appendChild(p);
      
      })
          
    
    
    
}
    

