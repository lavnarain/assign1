export class Constant {
    public static EMAIL_REGEX = '^([a-zA-Z0-9_\\-\\.]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([a-zA-Z0-9\\-]+\\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\\]?)$'; 
    public static PASSWORD_REGEX ='(?=.*[a-z])(?=.*[A-Z])(?=.*[0-6]).{6,}';

    public static INVALID_ENTRY ="Invalid Entry";
    public static LOGIN_SUCCESSFULLY ="Good to Go";
    public static ERROR_IN_LOGIN ="Invalid Login";

    public static COOKIE_KEY_NAME ="usertkn";

    public static SECRET_KEY ="2d2d2d2d2d424547494e205253412050524956415445204b45592d2d2d2d2d0a4d4949456a77494241414b422f679";

}
