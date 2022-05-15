import { LoginInfo } from "../../models/loginInfo.model";



export function setUserStateToLocalStorage(loginInfo: LoginInfo) {
    localStorage.setItem("user", JSON.stringify(loginInfo));
    setLoginStateToLocalStorage(true)
}
export function setLoginStateToLocalStorage(state: boolean) {
    localStorage.setItem("loggedIn", JSON.stringify(state));
}
export function getLoginStateFromLocalStorage(): boolean{
    return JSON.parse(localStorage.getItem("loggedIn") || "false")
}
export function getUserStateFromLocalStorage() : LoginInfo {
    return JSON.parse(localStorage.getItem("user") || JSON.stringify(new LoginInfo()));
}
export function getCurrentNameFromLocalStorage() : string {
   return getUserStateFromLocalStorage().name;
}