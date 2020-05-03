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
  async put( url, data ){
    const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },

        body: JSON.stringify(data)
      });

    const resData = await response.json();
    return resData;
  }

 // HTTP DELEE Request
 async delete(url) {
  const response = await fetch(url, {
      method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        }
    });

    const resData = await 'Resource Deleted!';
    return resData;

}


} // end of class


