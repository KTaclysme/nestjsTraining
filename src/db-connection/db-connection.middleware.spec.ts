import { DbConnectionMiddleware } from './db-connection.middleware';

describe('DbConnectionMiddleware', () => {
  it('should be defined', () => {
    expect(new DbConnectionMiddleware()).toBeDefined();
  });
});
