import User from "../models/User";

export const getJoin = (req, res) => res.render("join",{pageTitle:"Join"})
export const postJoin = async (req,res) =>{
    const {name,username,email,password,password2,location} = req.body;
    const pageTitle = "Join"
    if(password !==password2){
        return res.render("join",{pageTitle,errorMessage:"password confirmation does not matched"})
    }
    const exists = await User.exists({$or: [{username},{email}]});
    if (exists){
        return res.render("join",{pageTitle,errorMessage:"This username/email is already exist."})
    }
    
    await User.create({
        name,
        username,
        email,
        password,
        location,
    })
    return res.redirect("/login");
}
export const edit = (req, res) => res.send('Edit User')
export const remove = (req, res) => res.send('Remove User')
export const login = (req, res) => res.send('Login User')
export const logout = (req, res) => res.send('Log Out')
export const see = (req, res) => res.send('See')
