/**
 * EasyHTTP Library
 * Library for making HTTP requests
 *
 * @version 3.0.0
 * @author  Wan @ Malaynium Lab
 * @license MIT
 *
 **/

class EasyHTTP {
  
  // HTTP Get Request
 async get(url) {
   const response = await fetch(url);
   const resData = await response.json();
   return resData;
  }

  // // HTTP Post Request
  async post( url, data ){
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },

        body: JSON.stringify(data)
      });

      const resData = await response.json();
      return resData;

  }

  // HTTP Put Request
  // put( url, data ){
  //   return new Promise((resolve, reject) => {
  //     fetch(url, {
  //       method: 'PUT',
  //       headers: {
  //         'Content-type': 'application/json'
  //       },

  //       body: JSON.stringify(data)
  //     })

  //     .then(res => res.json())
  //     .then(data => resolve(data))
  //     .catch(err => reject(err));
  //   });
  // }

 // HTTP DELEE Request
//  delete(url) {
//   return new Promise((resolve, reject) => {
//     fetch(url, {
//       method: 'DELETE',
//         headers: {
//           'Content-type': 'application/json'
//         },
//     })

//     .then(res => res.json())
//     .then(() => resolve('Resource Deleted...'))
//     .catch(err => reject(err)); 
//   });
// }

} // end of class


