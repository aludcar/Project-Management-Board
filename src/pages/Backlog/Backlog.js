import Task from "../../components/Task/Task";
import useDataFetching from "../../hooks/useDataFetching";
import styled from "styled-components";

const BacklogWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5%;
`;
const SubTitleBL = styled.h2`
        width: 100%;
    padding-bottom: 10px;
    text-align: center;
    border-bottom: 1px solid darkgray;
`;

const TaskWrapperBL = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction:row;
    flex-wrap: wrap;
    margin: 5%;
`;

const API_URL =
  "https://my-json-server.typicode.com/PacktPublishing/React-Projects-Second-Edition/tasks";

export default function Backlog() {
  const [loading, error, tasks] = useDataFetching(API_URL);

  return (
    <BacklogWrapper>
      <SubTitleBL>Backlog</SubTitleBL>
      <TaskWrapperBL>
        {loading || error ? (
          <span>{error || "loading..."}</span>
        ) : (
          tasks.map((task) => <Task key={task.id} {...task} />)
        )}
      </TaskWrapperBL>
    </BacklogWrapper>
  );
}
