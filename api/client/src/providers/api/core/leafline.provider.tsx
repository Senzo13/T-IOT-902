// @ts-ignore
import packageJson from "../../../../package.json";

const VERSION = packageJson.version;
const API_ENDPOINT = "https://iot-902.lgiralt.com:3062";

export class LeafLineProvider {
  static readPackageVersion() {
    return packageJson.version;
  }

  static get VERSION() {
    return VERSION;
  }

  static get API_ENDPOINT() {
    return API_ENDPOINT;
  }
}
