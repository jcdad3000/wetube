import User from "../models/User";

export const getJoin = (req, res) => res.render("join",{pageTitle:"Join"})
export const postJoin = async (req,res) =>{
    const {name,username,email,password,password2,location} = req.body;
    const pageTitle = "Join"
    if(password !==password2){
        return res.status(400).render("join",{pageTitle,errorMessage:"password confirmation does not matched"})
    }
    const exists = await User.exists({$or: [{username},{email}]});
    if (exists){
        return res.status(400).render("join",{pageTitle,errorMessage:"This username/email is already exist."})
    }
    try{
        await User.create({
            name,
            username,
            email,
            password,
            location,
        })
        return res.redirect("/login");
    } catch(error){
        return res.status(400).render("join",{
            pageTitle:"Join",
            errorMessage:error._message,
        })
    }

}

export const getLogin = (req, res) => res.render('login',{pageTitle:"Login"})

export const postLogin =async (req,res) =>{
    const {username,password} = req.body;
    const exists = await User.exists({username})

    if(!exists){
        return res.status(400).render("login",{pageTitle:"Login",errorMessage:"An Account with this username doesn't exists"})
    }
    
    res.end();
}
export const edit = (req, res) => res.send('Edit User')
export const remove = (req, res) => res.send('Remove User')

export const logout = (req, res) => res.send('Log Out')
export const see = (req, res) => res.send('See')
