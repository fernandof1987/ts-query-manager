import { Body, Post, Route } from "tsoa";

interface LoginResponse {
    message: string;
}

interface User{
    username: string,
    password: string
}

@Route("login")
export default class LoginController {
    @Post("/")
    public async auth( @Body() requestBody: User ): Promise<LoginResponse> {
        return { message: "usuario ou senha incorretos" };
    }
}