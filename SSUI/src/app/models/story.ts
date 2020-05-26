import { Ssuser } from './ssuser';

export class Story {
  constructor() {}
  ssId: number;
  ssTitle: string;
  ssDescription: string;
  createdOn: Date;
  isApproved: boolean;
  like: number;
  dislike: number;
  id: string;
  ssUser: Ssuser;
}
