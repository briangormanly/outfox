import passport from "passport";
import passportLocal from "passport-local";
import bcrypt from "bcrypt";
import User from "../models/User";
import Done from "../interfaces/DoneSignature";

const LocalStrategy = passportLocal.Strategy;

passport.use(
  new LocalStrategy(
    { usernameField: "username" },
    async (username: string, password: string, done: Done): Promise<void> => {
      // Match user
      const user = await User.findOne({
        where: { username: username },
      });

      if (!user) {
        done(null, false);
      }

      // Match password
      if(user) {
        const isMatch = bcrypt.compareSync(password, user.hashpw);
        if (isMatch) {
          done(null, user);
        } else {
          done(null, false);
        }
      }
      else {
        done(null, false);
      }
    }
  )
);

passport.serializeUser((user: User, done: Done): void => {
  done(null, user.id);
});

passport.deserializeUser(
  async (id: number, done: Done): Promise<void> => {
    try {
      const user = await User.findByPk(id);
      if (user) {
        done(null, user.get());
      } else {
        done(null, null);
      }
    } catch (error) {
      done(null, null);
    }
  }
);

export default passport;
