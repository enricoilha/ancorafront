import { useEffect, useState } from "react";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import {
  PageContainer,
  PageTitle,
  PageTitleDescription,
} from "../../components/styled";
import {
  StatRow,
  StatsContinaer,
  StatsRowsContainer,
  StatsTitle,
} from "./styled";

export const StatsPage = () => {
  const parts = JSON.parse(window.localStorage.getItem("participants"));
  const [participationStats, setParticipationStats] = useState([]);

  useEffect(() => {
    const arr = [];

    parts.forEach((participation) => {
      let email = participation.email;
      const participated = arr.find((p) => p.email === email);
      if (participated) {
        const indexOfValue = arr.findIndex((x) => x === participated);
        arr.splice(indexOfValue, 1, { email, times: participated.times + 1 });
      } else {
        arr.push({
          email,
          times: 1,
        });
      }
    });

    setParticipationStats(arr);
  }, []);

  return (
    <>
      <Header />
      <PageContainer>
        <PageTitle>Estatísticas</PageTitle>
        <PageTitleDescription>Estatísticas de usuários</PageTitleDescription>
        <StatsContinaer>
          <StatsTitle>
            Número de participações em reuniões por usuário
          </StatsTitle>

          <StatsRowsContainer>
            {participationStats.map((item) => (
              <StatRow>
                {item.email}
                <div> {item.times}</div>
              </StatRow>
            ))}
          </StatsRowsContainer>
        </StatsContinaer>
      </PageContainer>
      <Footer />
    </>
  );
};
