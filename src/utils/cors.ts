import { APP_ENV } from "../enums/appSettings";
import { getEnv } from "./appSettings";

const AUTHORIZED_URLS = getEnv().APP_ENV == APP_ENV.local ? [
        "http://localhost:3000",
        "http://localhost:8000",
] : [
        "https://localhost:3000",
]


export default AUTHORIZED_URLS