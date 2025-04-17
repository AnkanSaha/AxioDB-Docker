import Collection from "axiodb/lib/Operation/Collection/collection.operation";
import {StatusCodes} from "outers";
import bcrypt from "../../Helper/bcrypt.helper";

// Interfaces
interface RegisterRequest {
    username: string;
    password: string;
    email: string;
    name: string;
}

// Authentication Class to handle all the authentication related operations
export default class Authentication {

    // Method to handle user registration management
    public static async Register(userData: RegisterRequest, CollectionInstance: Collection) {
        try {
            const { email, username } = userData; // Destructure the userData object

            // check if all fields are filled
            for (const key in userData) {
                if (!userData[key as keyof RegisterRequest]) {
                    throw new Error(`${key} is required`);
                }
            }

            // check if username already exists
            const existingUser = await CollectionInstance.query({email: email, username: username}).exec();
            if(existingUser.statusCode === StatusCodes.OK  && existingUser.status == true && existingUser.data.documents?.length > 0) {
                return {
                    status: false,
                    title: "User Already Exists",
                    message: "User with this email or username already exists",
                }
            }

            // Hash Password
            const hashedPassword = await bcrypt.hashPassword(userData.password);

            // Create User Object
            const user = {
                ...userData,
                password: hashedPassword,
            };

            // Create User in Database
            const createdUser = await CollectionInstance.insert(user);
            if (createdUser?.statusCode !== StatusCodes.OK) {
                return {
                    status: false,
                    title: "Error in Creating User",
                    message: "User could not be created in the database",
                }
            }

            return {
                status: true,
                statusCode: StatusCodes.OK,
                title: "User Created Successfully",
                message: "User has been created successfully, please login with your credentials",
                data: {
                    username: userData.username,
                    password: userData.password,
                },
            }

        }
        catch (error) {
            console.error("Error in Registering User", error);
            return {
                status: false,
                title: "Error in Registering User",
                message: "Error in Registering User when creating user",
                data: error,
            }
        }
    }
}