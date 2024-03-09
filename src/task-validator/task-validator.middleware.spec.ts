import { TaskValidatorMiddleware } from './task-validator.middleware';

describe('TaskValidatorMiddleware', () => {
  it('should be defined', () => {
    expect(new TaskValidatorMiddleware()).toBeDefined();
  });
});
