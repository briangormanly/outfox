import passport from 'passport';
import passportLocal from 'passport-local';
import bcrypt from 'bcrypt';
import User, { UserInstance} from '../api/models/User'
const LocalStrategy = passportLocal.Strategy;

passport.use(new LocalStrategy({ usernameField: 'username' },
    async (username, password, done) => {
        // Match user
        const user = await User.findOne({
            where: { username: username }
        })
        if (!user) {
            return done(null, false);
        }

        // Match password
        bcrypt.compare(password, user.hashpw, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        });
    })
);

passport.serializeUser((user: any, done: any) => {
    done(null, user.id);
});

passport.deserializeUser((id: number, done: any) => {
    User.findByPk(id).then((user: any) => {
        if (user) {
            done(null, user.get());
        } else {
            done(null, null);
        }
    })
});

export default passport;