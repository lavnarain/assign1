import * as CryptoJS from "crypto-js";
import { Constant } from "../helpers/constants";

export class Token_Generator {
  public static encryptData(data) {
    try {
      return CryptoJS.AES.encrypt(
        JSON.stringify(data),
        Constant.SECRET_KEY
      ).toString();
    } catch (e) {
      console.log(e);
    }
  }

  public static decryptData(data) {
    try {
      const bytes = CryptoJS.AES.decrypt(data, Constant.SECRET_KEY);
      if (bytes.toString()) {
        return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      }
      return data;
    } catch (e) {
      console.log(e);
    }
  }
}
