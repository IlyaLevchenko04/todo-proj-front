import { Container } from '@/shared/components/Container';

import { Link } from '@tanstack/react-router';

export const Header = () => (
  <Container>
    <div className="w-full h-[70px] flex items-center">
      <Link to="/todo">Home</Link>
    </div>
  </Container>
);
