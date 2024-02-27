import { Injectable } from '@nestjs/common';

@Injectable()
export class PetsService {
  getPets(userId: string) {
    return [{ id: userId, name: 'Micky', type: 'cat', breed: 'persian' }];
  }
  createPet() {
    return { id: 1, name: 'Micky', type: 'cat', breed: 'persian' };
  }

  updatePet(id: string) {
    return { id: id, name: 'Micky', type: 'cat', breed: 'persian' };
  }
}
