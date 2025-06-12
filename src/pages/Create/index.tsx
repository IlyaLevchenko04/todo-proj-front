import { Container } from '@/shared/components/Container';
import { TodoForm } from '@/shared/components/EditForm';
import { Section } from '@/shared/components/Section';

export const Create = () => (
  <Section>
    <Container>
      <h2>Create ToDo</h2>

      <div>
        <TodoForm />
      </div>
    </Container>
  </Section>
);
