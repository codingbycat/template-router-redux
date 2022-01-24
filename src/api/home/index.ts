import request from 'api/request';
import { Mock } from './types';

export async function mockGetList() {
  return await request.get<Mock[]>('/get');
}
