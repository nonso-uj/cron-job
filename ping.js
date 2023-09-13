const ping = async () => {
    const res = await fetch('https://hngx-task2-kzd4.onrender.com/ping')
    const data = await res.json()
    console.log(data)
    // return data
}




setInterval(() => {
    console.log('HELLO GEEK');
    ping()
  }, 300000);


