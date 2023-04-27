import axios, { AxiosResponse } from "axios";
import { MoodleLoginResponse, SiteInfo } from "../types/moodle";

const baseURL = "https://uerespaldoeva21-22.sudamericano.ec";
const token = "e87c71383173200c25e0050f2aaf9b44";
const url = `${baseURL}/webservice/rest/server.php`;


export const login = (username: string, password: string): Promise<AxiosResponse<MoodleLoginResponse>> => {
    const url = `${baseURL}/login/token.php`;
    const params = {
    //   wsfunction: "core_auth_external_login",
      username: username,
      password: password,
      service: "moodle_mobile_app"
    };
    return axios.get<MoodleLoginResponse>(url, { params });
};

export const getCourses = (): Promise<AxiosResponse> => {
    const params = {
        wstoken: token,
        wsfunction: "core_course_get_courses",
        moodlewsrestformat: "json",
    };
    return axios.get(url, { params });
};

export const getSiteInfo = (): Promise<AxiosResponse<SiteInfo>> => {
    const params = {
        wstoken: token,
        wsfunction: "core_webservice_get_site_info",
        moodlewsrestformat: "json",
    };
    return axios.get<SiteInfo>(url, { params });
}