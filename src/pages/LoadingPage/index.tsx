import LogoImage from "@/src/components/Common/Logo/LogoImage";
import Layout from "../../components/Common/Layout";
import { LoadingPageUI } from "./style";

function LoadingPage() {
  return (
    <Layout>
      <LoadingPageUI.PositionContainer>
        <LogoImage />
      </LoadingPageUI.PositionContainer>
    </Layout>
  );
}

export default LoadingPage;
