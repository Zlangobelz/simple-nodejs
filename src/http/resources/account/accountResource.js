export default function (account) {
    return {
        email: account.email,
        profile: {
            firstname: account.profile.firstname,
            lastname: account.profile.lastname,
            username: account.profile.username,
        }
    }
}