import { Injectable } from '@nestjs/common';

@Injectable()
export class CakeService {
  getCake(): string {
    return 'Pâte à choux';
  }
}
