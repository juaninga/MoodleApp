export interface MoodleLoginResponse {
    token: string;
    privatetoken: string;
    errorcode?: string;
    error?: string;
}

export interface SiteInfo {
    firstname: string;
    fullname: string;
    lang: string;
    lastname: string;

    sitename: string;
    siteurl: string;
    version: string;

    username: string;
    userid: number;
    userissiteadmin: boolean;
    userpictureurl: string;
}
