const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(bodyParser.json());


app.post('/bfhl', (req, res) => {
    const { data } = req.body;

 
    let evenNumbers = [];
    let oddNumbers = [];
    let alphabets = [];
    let specialCharacters = [];
    let sum = 0;
    let concatString = '';

    data.forEach(item => {
        if (!isNaN(item)) {
            const num = parseInt(item);
            sum += num;
            if (num % 2 === 0) {
                evenNumbers.push(item);
            } else {
                oddNumbers.push(item);
            }
        } else if (/^[a-zA-Z]+$/.test(item)) {
            alphabets.push(item.toUpperCase());
            concatString += item;
        } else {
            specialCharacters.push(item);
        }
    });

    const userId = "anees_kumar_21042006"; 
    const email = "aneeskumar96362@gmail.com"; 
    const rollNumber = "2210991261"; 

 
    concatString = concatString.split('').reverse().map((char, index) => {
        return index % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
    }).join('');


    const response = {
        is_success: true,
        user_id: userId,
        email: email,
        roll_number: rollNumber,
        odd_numbers: oddNumbers,
        even_numbers: evenNumbers,
        alphabets: alphabets,
        special_characters: specialCharacters,
        sum: sum.toString(), 
        concat_string: concatString
    };


    res.status(200).json(response);
});

// Start the server

app.get("/bfhl", (req, res) => {
  res.send("Api Shi chal rhi h.");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
