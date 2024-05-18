const express=require("express");
const app=express();
const users=require("./routes/user.js");
//const posts=require("./routes/post.js");
const session=require("express-session");
//const session = require("express-session");
// const cookieParser=require("cookie-parser");
const flash=require("connect-flash");  
const path=require("path");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

const sessionOptions={
    secret:"mysupersecretstring" ,
    resave:false ,
    saveUninitialized:true
};

app.use(session(sessionOptions));
app.use(flash());

app.use((req,res,next)=>{
    res.locals.successMsg=req.flash("success");
    res.locals.errorMsg=req.flash("error");
    next();
});

app.get("/register",(req,res)=>{
    let{name="friend"}=req.query;
    req.session.name=name;
    if(name==="friend"){
        req.flash("error","user welcome not possible!");
    }else{
        req.flash("success","user welcome done!");
    }
    res.redirect("/hello");
});
app.get("/hello",(req,res)=>{
    res.render("page.ejs",{name:req.session.name});
});

// app.get("/reqCount",(req,res)=>{
//     if(req.session.count){
//         req.session.count++;
//     }else{
//         req.session.count=1;
//     }
//     res.send(`you have sent this request ${req.session.count} times `);
// })

// app.get("/test",(req,res)=>{
//     res.send("test successful!");
// });

app.listen(3000,()=>{
    console.log("server is listening to port 3000");
})


// app.use("/posts",posts);
// app.use("/users",users);



// app.use(cookieParser("secretcode"));

// app.get("/getsignedcookie",(req,res)=>{
//     res.cookie("color","red",{signed:true});
//     res.send("Done!");
// });

// app.get("/verify",(req,res)=>{
//     console.log(req.signedCookies);
//     res.send("verified");
// })

// app.get("/",(req,res)=>{
//     console.dir(req.cookies);
//     res.send("HI I AM PRINJAL JAIN");
// });

//uses of cookie!
// app.get("/greet",(req,res)=>{
//     let {name="jain"}=req.cookies;
//     res.send(`Hello ${name}`);
// });

//agar cookieparser me secretcode nhi likha to koi bhi aake cookies me changes kr skta hai isliye upar vala code likha hai!
// app.use(cookieParser());
// app.get("/getcookies",(req,res)=>{
//     res.cookie("greetings","namaste");
//     res.cookie("MadeIn","Kalinjara");
//     res.send("cookie page welcomes you");
// });
