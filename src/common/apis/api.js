export  function loginApi(email,password){
//    let result= await fetch('localhost:3001/signIn',{
//         method :'POST',
//         headers: {
//             'Content-Type': 'application/json'
//           },
//           body:{
//               email,password
//           }
//     })

// return result.json();

    return {email,password:'admin'};
}

export  function registerApi(username,email,password){
    //    let result= await fetch('localhost:3001/signup',{
    //         method :'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //           },
    //           body:{
    //               email,password
    //           }
    //     })
    
    // return result.json();
    
        return {username,email,password};
    }
    
