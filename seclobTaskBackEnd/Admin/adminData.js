import argon2 from 'argon2';

const adminData = async () => {
    const hashedPassword = await argon2.hash("admin123");
    return {
        Name: "Admin",
        Email: "admin@gmail.com",
        Password: hashedPassword
    };
};

export default adminData;
