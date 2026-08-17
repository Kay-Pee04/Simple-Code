const text = REQUIRE ('./simplecodes.json');

// text to object
//const person = JSON.parse(text);
//console.log(person.name="Karma");

// Object to text
//const back = JSON.stringify(person,null,2);
//console.log(back);

const data = JSON.parse(text);

data.books.title
data.books.year
data.items[0].sku
data.items.length

for (const item of data.items) {
    console.log(item.qty);
}




