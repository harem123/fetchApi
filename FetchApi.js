import React from 'react'
 
function FetchApi() {
    const [data,setData] = React.useState([])
  

    React.useEffect(()=>{
  
        document.title='Goal-Lab'
        const user= 2728
        const fetchdata = async () => {
        const url = 'https://us-central1-python-fire-be2e4.cloudfunctions.net/app/api/results/'+ user
        //const url= 'https://jsonplaceholder.typicode.com/users'
         fetch(url)
         const response = await fetch (url)
         const json = await response.json()
         setData(json)}

        fetchdata()
      } ,[])
return  <ul>
  {
    data.score
  }
</ul>
}

export default FetchApi