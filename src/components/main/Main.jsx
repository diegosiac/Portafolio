import { Contact } from '../contact/Contact';
import { MoreMe } from '../moreMe/MoreMe';
import { Proyects } from '../proyects/Proyects';
import { Section } from '../section/Section';

export const Main = () => {
  return (
    <main>
      <Section headerName={"¿Quién soy?"}>
        <MoreMe />
      </Section>
      <Section headerName={"Proyectos"}>
        <Proyects />
      </Section>
      <Section headerName={'Contacta conmigo'}>
        <Contact />
      </Section>
    </main>
  );
};
