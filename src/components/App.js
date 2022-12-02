import React from "react"
import Signup from "./Signup"
import {AuthProvider} from "../contexts/AuthContext"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import Profile from "./Profil"
import Actuality from "./Actuality"
import Actualitytest from "./CVVProgramme"
import MediaDoc from "./MediaDoc"
import Animation from "./Animation"
import Contact from "./Contact"
import Partenaires from "./Partenaires";
import admin from "./admin"

import HomeMyInfo from "./page/HomeMyInfo";
import Add from "./page/Add";
import Edit from "./page/Edit";
import Notfound from "./page/404";

import '../asset/css/header.css'
import '../asset/css/style.css'
import '../asset/css/footer.css'
import ClassCVVProgramme from "./CVVProgramme";
import ClassCVVAdmin from "./page/adminpage/CVVadminpage";
import AdminMediadoc from "./page/adminpage/AdminMediadoc";


function App() {
    return (
        <div className="login-html">
                <Router>
                    <AuthProvider>
                        <Switch>
                            <PrivateRoute exact path="/" component={Actuality}/>
                            <PrivateRoute path="/Actuality" component={Actuality}/>
                            <PrivateRoute path="/CVVProgramme" component={ClassCVVProgramme}/>
                            <PrivateRoute exact path="/MediaDoc" component={MediaDoc}/>
                            <PrivateRoute exact path="/Animation" component={Animation}/>
                            <PrivateRoute exact path="/Partenaires" component={Partenaires}/>
                            <PrivateRoute exact path="/Partenaire" component={Partenaires}/>
                            <PrivateRoute path="/profil" component={Profile}/>
                            <PrivateRoute path="/Contact" component={Contact}/>

                            <PrivateRoute exact path="/update-profile" component={UpdateProfile}/>
                            <Route path="/signup" component={Signup}/>
                            <Route path="/login" component={Login}/>
                            <Route path="/forgot-password" component={ForgotPassword}/>

                            <PrivateRoute path="/0999924020e835056ce61af3f6e38cc3cdfc08e8e6d0e5897e1f125e4cd013a8" component={admin}/>
                            <PrivateRoute path="/0999924020e835056ce61af3f6e38cc3cdfc08e8e6d0e5897e1f125e4cd013a9" component={ClassCVVAdmin}/>
                            <PrivateRoute path="/0999924020e835056ce61af3f6e38cc3cdfc08e8e6d0e5897e1f125e4cd013a10" component={AdminMediadoc}/>

                            <PrivateRoute exact path="/add" component={Add} />
                            <PrivateRoute exact path="/edit/:rowIndex" component={Edit} />
                            <PrivateRoute exact path="/myinfo" component={HomeMyInfo} />

                            <Route path="*" component={Notfound} />
                        </Switch>
                    </AuthProvider>
                </Router>
            </div>
    )
}

export default App
