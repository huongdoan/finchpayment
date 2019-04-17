let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../app');
let should = chai.should();
chai.use(chaiHttp);

const defaultUser = { id: 1, username: 'test', password: 'test', firstName: 'Test', lastName: 'User' };
export const loginWithDefaultUser = async () => {
    let user = await getDefaultUser();
    return chai.request(server)
        .post("/authenticate")
        .send({ "username": defaultUser.username, "password": defaultUser.password })
        .expect(200);
};

const getDefaultUser = async () => {
    // let users = await User.find({ "username" : defaultUser.username });
    // let users  = users.find()
    // if (users.length === 0) {
    //     await createUser();
    //     return getDefaultUser();
    // } else {
    //     return users[0];
    // }
    return getDefaultUser();
};

const createUser = async () => {
    // const UserModel = new User(defaultUser);
    // await UserModel.save();
};

export const cleanExceptDefaultUser = async () => {
    // let user = await getDefaultUser();
    // await User.deleteMany({ "username": {$ne: user.username}});
};
