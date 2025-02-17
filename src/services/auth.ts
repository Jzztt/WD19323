import { RegisterSchemaType } from "../components/auth/Register";
import instanceAxios from "../ultis/configAxios"


const register = async (user:RegisterSchemaType) => {
    try {
        const { data } = await instanceAxios.post('/register', user);
        return data
    } catch (error) {
        console.log(error);
    }
}

export const authServices = {
    register,
}