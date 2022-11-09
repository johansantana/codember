function validateInput(input) {
    const usersArray = input.trim().split('\n\n');
    const result = usersArray.map(user => {
        if (!user)
            return;
        const currentUser = user.trim().split(/[\s\n]+/);
        const parsedUser = {};
        currentUser.forEach(data => {
            const key = data.split(':')[0];
            let value = data.split(':')[1];
            if (key === 'age' || key === 'fll')
                value = Number(value);
            parsedUser[key] = value;
        });
        return parsedUser;
    });
    return result;
}
function isValidUser(obj) {
    return 'usr' in obj && 'eme' in obj && 'psw' in obj && 'age' in obj && 'loc' in obj && 'fll' in obj;
}
const getResult = async () => {
    try {
        const data = await fetch('https://codember.dev/users.txt').then(res => res.text());
        const users = validateInput(data);
        const validUsers = users.filter(isValidUser);
        const validCount = validUsers.length;
        const lastValidUser = validUsers[validUsers.length - 1].usr;
        return `${validCount}${lastValidUser}`;
    }
    catch (err) {
        console.error(err);
    }
};
export const result = await getResult();
//# sourceMappingURL=index.js.map