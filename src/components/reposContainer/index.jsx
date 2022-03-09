import { Section, Title, ListOfReposContainer, Repo } from "./styles";

const ReposContainer = (props) => {
  return (
    <div>
      <Title>Repositórios da Organização: {props.name?.split(" ")[0]}</Title>
      <Section>
        <ListOfReposContainer>
          {(props?.repos).map((repo) => (
            <Repo
              onClick={() => window.location.href(repo?.html_url)}
              key={repo?.id}
            >
              <h2>{repo?.name}</h2>
              <p>{repo?.description}</p>
            </Repo>
          ))}
        </ListOfReposContainer>
      </Section>
    </div>
  );
};

export default ReposContainer;
