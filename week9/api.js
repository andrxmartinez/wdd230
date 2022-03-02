const url = 'https://learnwebcode.github.io/json-example/animals-1.json';

// const results = fetch(url);

// console.log(results);

// function convertToJs(results){
//     if (results.ok){
//         return results.json();
//     }
// }

// const result = fetch(url).then(convertToJs);
// console.log(result);

fetch(url).then((result)=>{
    if(result.ok){
        return result.json();
    } else{
        alert('Data not available');
    }
})

    .then((data)=>{
        let h1 = document.querySelector('h1');
        h1.textContent= (data[0].foods.likes[1])
        console.log(data[0].food.likes[1]);

    });


