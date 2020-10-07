
import {Sequelize} from "sequelize";
import passport from "passport";
import passportLocal from "passport-local";

import bcrypt from "bcrypt";
import { User } from "../api/models/User";

const LocalStrategy = passportLocal.Strategy;

// Need to check why i need to declare the passport type
export const auth  = (passport: any) => {
    passport.use(
      new LocalStrategy({ usernameField: 'username' }, async (username, password, done) => {
        
        // Match user
        const user: User = await User.findOne({
          where:{username: username}
        })
          if (!user) {
            return done(null, false, { message: 'That username is not registered' });
          }
  
          // Match password
          console.log(user)
          bcrypt.compare(password, user.hashpw, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
              return done(null, user);
            } else {
              return done(null, false, { message: 'Password invalid' });
            }
          });      
      })
    );
    passport.serializeUser((user: any, done: any) => {
        done(null, user.id);
      });
    
      passport.deserializeUser((id: number, done: any) => {
        User.findById(id, (err: any, user: any) => {
          done(err, user);
        });
      });
}