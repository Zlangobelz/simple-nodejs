export default function (account) {
    return {
        email: account.email,
        token: account.token,
        profile: {
            firstname: account.profile.firstname,
            lastname: account.profile.lastname,
            username: account.profile.username,
        }
    }
}