export interface MoodleLoginResponse {
    token: string;
    privatetoken: string;
    errorcode?: string;
    error?: string;
}

export interface SiteInfo {
    sitename: string;
    siteurl: string;
    username: string;
    firstname: string;
    lastname: string;
    fullname: string;
    lang: string;
    userid: number;
    userpictureurl: string;
    userissiteadmin: boolean;
    version: string;
    functions: Array<{
      name: string;
      version: number;
    }>;
  }