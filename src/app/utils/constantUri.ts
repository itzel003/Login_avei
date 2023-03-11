const baseUrl = 'https://api.themoviedb.org/3';
export class constantUri {
    public static readonly apikey = '26f0a458ccb5061ca35166eebb37fde1';
    public static readonly validateWithLogin = baseUrl+ '/authentication/token/validate_with_login';
    public static readonly tokenNew = baseUrl+ '/authentication/token/new';
}
