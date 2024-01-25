
export const checkValidData = (name,email,password,confirmPassword)=>{
    
    const nameRegex = /^[A-Za-z]+(?: [A-Za-z]+)*$/ && /^.{1,50}$/;
    const isNameValid = (name) => {
        return name.length <= 50 && nameRegex.test(name);
};
    const isEmailValid = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(email);
    const isPasswordValid = /^.{6,}$/.test(password);
    const isPasswordMatch = (password, confirmPassword) => {
        return password === confirmPassword;
    };
    
    if(!isNameValid) return "Invalid Name";

    if(!isEmailValid) return "Invalid E-mail";

    if(!isPasswordValid) return "Invalid Password";

    if(!isPasswordMatch) return "Password doesn't match"

    return false;
    
}