import { StorageEnum } from "../../global/enums";


export namespace FinalStorage {

  let local: any, session: any;

  export const init = () => {

    local = window.localStorage;
    session = window.sessionStorage;
  }

  export const set = (key: StorageEnum | string, value: any, persist: boolean) => {

    if (persist) {
      local.setItem(key, value);
      return;
    }

    session.setItem(key, value);
  }

  export const get = (key: StorageEnum | string) => {

    const data = local.getItem(key) || session.getItem(key) || null;
    return data;
  }

  export const remove = (key: StorageEnum | string) => {

    local.removeItem(key);
    session.removeItem(key);
  }

}