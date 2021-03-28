const express = require ('express');

const faker = require ('faker');

const app = express()

const port = 3000;
                                                                                         
app.get('/', (req, res) => { res.send(
    {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        gender: faker.name.gender(),
        address: {
            city: faker.address.city(),
            country: faker.address.country(),
            phone: faker.phone.phoneNumber(),
            state: faker.address.stateAbbr(),
            street: faker.address.streetName(),
            zipCode: faker.address.zipCode()
        },
        birthday: faker.date.past(),
        email: faker.internet.email(),
        userName: faker.internet.userName(),
        password: faker.internet.password(),
    }
  );
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
});
