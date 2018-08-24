import { LearningAgendaModule } from './learning-agenda.module';

describe('LearningAgendaModule', () => {
  let learningAgendaModule: LearningAgendaModule;

  beforeEach(() => {
    learningAgendaModule = new LearningAgendaModule();
  });

  it('should create an instance', () => {
    expect(learningAgendaModule).toBeTruthy();
  });
});
