import { postRequest, putRequest, deleteRequest, getRequest } from '../client/client';

import headers from '../../constans/header.json';
import { parseResult } from './dataParser';

export const createArticle = async data => {
  const url = `${'http://ec2-3-84-69-186.compute-1.amazonaws.com:5000/routes/api/v1/article'}`;
  const config = headers.content_type.application_json;
  const result = await postRequest(url, data, config);
  const parsedResult = parseResult(result);
  return parsedResult;
};
export const updateArticle = async (articleId, data) => {
  const url = `${'http://ec2-3-84-69-186.compute-1.amazonaws.com:5000/routes/api/v1/article'}/${articleId}`;
  const config = headers.content_type.application_json;
  const result = await putRequest(url, data, config);
  const parsedResult = parseResult(result);
  return parsedResult;
};

export const deleteArticle = async id => {
  const url = `${'http://ec2-3-84-69-186.compute-1.amazonaws.com:5000/routes/api/v1/article'}/${id}`;
  const config = headers.content_type.application_json;
  const result = await deleteRequest(url, config);

  const parsedResult = parseResult(result);
  return parsedResult;
};

export const searchAllArticles = async () => {
  const url = 'http://ec2-3-84-69-186.compute-1.amazonaws.com:5000/routes/api/v1/article';
  const config = headers.content_type.application_json;
  const result = await getRequest(url, config);
  const parsedResult = parseResult(result);
  return parsedResult;
};

export const searchArticleById = async id => {
  const url = `${'http://ec2-3-84-69-186.compute-1.amazonaws.com:5000/routes/api/v1/article'}/${id}`;
  const config = headers.content_type.application_json;
  const result = await getRequest(url, config);
  const parsedResult = parseResult(result);
  return parsedResult;
};
