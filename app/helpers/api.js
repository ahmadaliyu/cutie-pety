import Toast from "react-native-toast-message";
import NetInfo from "@react-native-community/netinfo";
import fetchWithTimeout from "./fetchWithTimeOut";

/**
 *
 * This api handles your requests, and response, and it handles all returned error messages as toast alert (Note that all arguments are passed in correct order)
 * @param  {string} fullPath The full uri path
 * @param  {string} httpMethod http methods i.e POST, PUT, GET
 * @param  {string} contentType The content type i.e 'application/json', 'multipart/form-data'
 * @param  {object} payload             an object that has a body or formData object, and custom error messages if you like E.g  400: 'Agents already offered this job', 412: 'item does not exist
 *
 *
 *
 * @return {object} response the entire response object
 */
export const api = async (fullPath, httpMethod, contentType, payload = {}) => {
  let options;
  let respData;

  //if there is http method then that means we have request options
  if (httpMethod)
    options = {
      method: httpMethod,

      // add content type only if there is one, and the content type is not multipart/form-data
      ...(contentType &&
        contentType !== "multipart/form-data" && {
          headers: {
            "Content-Type": `${contentType}`,
          },
        }),
      ...((payload?.formData || payload?.body) && {
        body: payload.formData || JSON.stringify(payload.body),
      }),
    };
  try {
    const response = await fetchWithTimeout(fullPath, httpMethod && options);
    respData = await response.json();
  } catch (e) {
    if (payload.noToast) {
      throw new Error("SomeThing went wrong");
    }
    const unsubscibe = NetInfo.addEventListener((state) => {
      errorToastForTryCatch(
        state.isConnected && e.toString() !== "AbortError: Aborted"
          ? "There might be an error on the server"
          : e.toString() === "AbortError: Aborted"
          ? "Request timeout"
          : "No internet connection",
      );
    });
    unsubscibe();
    throw new Error("SomeThing went wrong");
  }

  // return if you the consumer dosent want errorToast message
  if (payload.noToast) {
    return respData;
  }
  switch (respData.status) {
    case 1:
      return respData;
    case 200:
      return respData;
    case 201:
      return respData;
    case 0:
      errorToast(payload.hasOwnProperty("0") ? payload[0] : respData.message);
    case 400:
      errorToast(
        payload.hasOwnProperty("400") ? payload[400] : respData.message,
      );
    case 403:
      errorToast(
        payload.hasOwnProperty("403") ? payload[403] : respData.message,
      );
    case 404:
      errorToast(
        payload.hasOwnProperty("404") ? payload[404] : respData.message,
      );
    case 406:
      errorToast(
        payload.hasOwnProperty("406") ? payload[406] : respData.message,
      );
    case 412:
      errorToast(
        payload.hasOwnProperty("412") ? payload[412] : respData.message,
      );
    case 406:
      errorToast(
        payload.hasOwnProperty("406") ? payload[406] : respData.message,
      );
    case 500:
      errorToast(
        payload.hasOwnProperty("500") ? payload[500] : respData.message,
      );
    default:
      return respData;
  }
};

const errorToast = (message) => {
  Toast.show({
    type: "error",
    props: {
      onPress: () => {
        Toast.hide();
      },
      subTitle: message,
    },
  });
  throw new Error(message);
};
const errorToastForTryCatch = (message) => {
  Toast.show({
    type: "error",
    props: {
      onPress: () => {
        Toast.hide();
      },
      subTitle: message,
    },
  });
};

export const successToast = (message = "Success") => {
  Toast.show({
    type: "success",
    props: {
      onPress: () => {
        Toast.hide();
      },
      subTitle: message,
    },
  });
};
