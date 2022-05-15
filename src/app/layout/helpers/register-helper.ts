import { Login } from "src/app/shared/models/login.model";
import { Register } from "src/app/shared/models/register.model";


export function setLoginInfo(loginInfo : Login, newUser : Register){
    loginInfo.username = newUser.username;
    loginInfo.password = newUser.password;
    return loginInfo;
}