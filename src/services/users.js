import callApi from '.';
import { HTTP_METHODS } from '../utils/Constants';

const baseUrl = '/users';

export default async function getCashFlowDataApi(userName) {
  const response = await callApi(HTTP_METHODS.GET, `${baseUrl}/${userName}`);
  return response.data;
}
