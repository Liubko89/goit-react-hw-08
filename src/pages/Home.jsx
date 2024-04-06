import { DiTravis } from "react-icons/di";
import DocumentTitle from "../components/DocumentTitle";

export default function Home() {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>

      <DiTravis>
        <h1>
          Task manager welcome page
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </h1>
      </DiTravis>
    </>
  );
}
