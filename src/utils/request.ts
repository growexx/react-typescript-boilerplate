import { TOKEN_KEY } from './constants';
import StorageService from './StorageService';
import { userExists } from './userExists';
/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response: Response) {
    if (response.status === 204 || response.status === 205) {
        return null;
    }
    return response.json();
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response: Response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }

    const error = new Error(response.statusText) as Error & { response: Response };
    error.response = response;
    throw error;
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export default function request(url: string, options: any) {
    const option: any = {
        method: options.method,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
    };
    if (options.body) {
        option.body = JSON.stringify(options.body);
    }
    if (options.data) {
        option.data = options.data;
    }
    if (options.headers) {
        option.headers = options.headers;
    }
    if (userExists()) {
        option.headers.Authorization = `${StorageService.get(TOKEN_KEY)}`;
    }
    return fetch(url, option)
        .then(checkStatus)
        .then(parseJSON);
}