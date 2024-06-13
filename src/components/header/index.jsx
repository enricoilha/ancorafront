import { useNavigate } from "react-router-dom";
import { Container, ButtonsWrapper, Logo, Button } from "./styled";

export const Header = () => {
  const navigate = useNavigate();
  const buttons = [
    {
      text: "Início",
      href: "/",
    },
  ];

  return (
    <Container>
      <Logo>Ancora Eventos</Logo>

      <ButtonsWrapper>
        {buttons.map((item, index) => (
          <Button onClick={() => navigate(item.href)} key={index}>
            {item.text}
          </Button>
        ))}
      </ButtonsWrapper>
    </Container>
  );
};
