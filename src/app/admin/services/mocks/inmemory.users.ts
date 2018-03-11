
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from '../../../models/user';
import { Athlete } from '../../../models/athlete';

export class InMemoryDataBase implements InMemoryDbService {
  createDb() {
    const users: User[] = [
      { ID: 1, email: 'benjamin@edaid.com' },
      { ID: 2, email: 'ben@fsl.com' },
      { ID: 3, email: 'nell@gmail.com' },
    ];

    const athletes: Athlete[] = [
      { ID: 1, firstname: "benjamin", lastname: "toomer" },
    ];

    return { users, athletes };
  }
}

